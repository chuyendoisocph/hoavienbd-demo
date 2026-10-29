"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Expand, Map, Minus, Plus, Shrink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TOUR_SCENES, clearViewYaw, getTourLinks, type TourScene } from "@/lib/tour360-content";
import { cn } from "@/lib/utils";
import { TourMap } from "./TourMap";

function sceneHfov() {
  return window.matchMedia("(max-width: 640px)").matches ? 70 : 95;
}

// Pannellum vẽ canvas theo devicePixelRatio. Ảnh gốc 4096px chỉ có khoảng 800 đến 1100px
// lọt vào khung nhìn, nên vẽ ở mật độ trên 2x chỉ tốn GPU mà không thêm chi tiết nào.
// Trên điện thoại 3x, giới hạn ở 2x giảm khoảng 2,25 lần số điểm ảnh phải vẽ mỗi khung.
const MAX_PIXEL_RATIO = 2;

/** Hướng nhìn lúc mở một điểm, đã né vùng làm mờ trong ảnh. */
function openingYaw(scene: TourScene, yaw = scene.yaw) {
  return clearViewYaw(scene, yaw, sceneHfov());
}

const preloadedPanoramas = new Set<string>();

/** Tải và giải mã sẵn ảnh 360° khi trình duyệt rảnh, để bấm sang điểm đó là mở gần như ngay. */
function preloadPanorama(src: string) {
  if (preloadedPanoramas.has(src)) return;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return;

  preloadedPanoramas.add(src);
  const load = () => {
    const image = new window.Image();
    image.decoding = "async";
    image.src = src;
    void image.decode().catch(() => preloadedPanoramas.delete(src));
  };
  // Safari chưa có requestIdleCallback dù kiểu DOM khai báo là luôn có.
  if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(load, { timeout: 2000 });
  else setTimeout(load, 600);
}

const GATE_DESTINATIONS = TOUR_SCENES.filter((scene) =>
  ["dai-lo-vinh-hang", "vinh-hang-dai", "chua-thien-phuoc", "khu-mo-gia-toc"].includes(scene.id),
);

export function VirtualTour() {
  const stageRef = useRef<HTMLDivElement>(null);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Pannellum.Viewer | null>(null);
  const initialSceneRef = useRef(TOUR_SCENES[0].id);
  const pendingSceneRef = useRef<string | null>(null);
  const viewerLoadingRef = useRef(true);
  const [activeSceneId, setActiveSceneId] = useState(TOUR_SCENES[0].id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [routeOpen, setRouteOpen] = useState(false);
  const [routeView, setRouteView] = useState<"map" | "list">("map");
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Trên điện thoại bảng chọn điểm ở cổng thu gọn thành một nút, để ảnh 360° không bị che.
  const [gateOpen, setGateOpen] = useState(false);
  const routeToggleRef = useRef<HTMLButtonElement>(null);
  const routeCloseRef = useRef<HTMLButtonElement>(null);
  const routeContentRef = useRef<HTMLDivElement>(null);
  const wasRouteOpenRef = useRef(false);

  useEffect(() => {
    if (!routeOpen && !gateOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setRouteOpen(false);
      setGateOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [routeOpen, gateOpen]);

  // Mở lộ trình thì đưa con trỏ bàn phím vào trong, đóng thì trả về nút đã mở nó.
  useEffect(() => {
    if (routeOpen) routeCloseRef.current?.focus();
    else if (wasRouteOpenRef.current) routeToggleRef.current?.focus();
    wasRouteOpenRef.current = routeOpen;
  }, [routeOpen]);

  useEffect(() => {
    if (!routeOpen || routeView !== "map") return;
    const frame = window.requestAnimationFrame(() => {
      const container = routeContentRef.current;
      const marker = container?.querySelector(`[data-tour-scene="${activeSceneId}"]`);
      if (!container || !marker) return;
      const markerTop = marker.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop += markerTop - container.clientHeight / 2;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeSceneId, routeOpen, routeView]);

  const activeIndex = TOUR_SCENES.findIndex((scene) => scene.id === activeSceneId);
  const activeScene = TOUR_SCENES[activeIndex] ?? TOUR_SCENES[0];
  const nextScene = TOUR_SCENES[(activeIndex + 1) % TOUR_SCENES.length];

  useEffect(() => {
    let cancelled = false;
    const cappedPixelRatio = (window.devicePixelRatio || 1) > MAX_PIXEL_RATIO;
    if (cappedPixelRatio) {
      Object.defineProperty(window, "devicePixelRatio", { configurable: true, get: () => MAX_PIXEL_RATIO });
    }

    async function createViewer() {
      try {
        await import("pannellum/build/pannellum.js");
        if (cancelled || !viewerContainerRef.current) return;

        const scenes = Object.fromEntries(
          TOUR_SCENES.map((scene) => {
            return [scene.id, {
              type: "equirectangular" as const,
              panorama: scene.panorama,
              preview: scene.thumbnail,
              pitch: scene.pitch,
              yaw: openingYaw(scene),
              hfov: sceneHfov(),
              hotSpots: getTourLinks(scene).map((link) => ({
                type: "scene" as const,
                pitch: link.pitch,
                yaw: link.yaw,
                sceneId: link.scene.id,
                targetPitch: link.scene.pitch,
                targetYaw: openingYaw(link.scene, link.arrivalYaw),
                targetHfov: sceneHfov(),
                text: `Đi tới ${link.scene.title}`,
                cssClass: "tour-scene-hotspot",
                createTooltipFunc: (element: HTMLDivElement) => {
                  const arrow = document.createElement("span");
                  arrow.className = "tour-scene-hotspot-arrow";
                  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                  icon.setAttribute("width", "18");
                  icon.setAttribute("height", "18");
                  icon.setAttribute("viewBox", "0 0 24 24");
                  icon.setAttribute("fill", "none");
                  icon.setAttribute("stroke", "currentColor");
                  icon.setAttribute("stroke-width", "2");
                  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  path.setAttribute("d", "M5 12h14m-6-6 6 6-6 6");
                  icon.append(path);
                  arrow.append(icon);
                  const label = document.createElement("span");
                  label.className = "tour-scene-hotspot-label";
                  label.textContent = link.scene.title;
                  element.append(arrow, label);
                  element.setAttribute("aria-label", `Đi tới ${link.scene.title}`);
                  element.setAttribute("role", "button");
                  element.tabIndex = 0;
                  element.addEventListener("keydown", (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      viewerRef.current?.loadScene(link.scene.id, link.scene.pitch, openingYaw(link.scene, link.arrivalYaw), sceneHfov());
                    }
                  });
                },
              })),
            }];
          }),
        );

        const viewer = window.pannellum.viewer(viewerContainerRef.current, {
          default: {
            firstScene: initialSceneRef.current,
            pitch: TOUR_SCENES.find((item) => item.id === initialSceneRef.current)?.pitch ?? TOUR_SCENES[0].pitch,
            hfov: sceneHfov(),
            autoLoad: true,
            sceneFadeDuration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 380,
            showControls: false,
            mouseZoom: "fullscreenonly",
            minPitch: -65,
            maxPitch: 55,
            minHfov: 45,
            maxHfov: 110,
            escapeHTML: true,
            strings: {
              loadingLabel: "Đang tải ảnh 360°…",
              noPanoramaError: "Không thể tải ảnh 360°.",
              genericWebGLError: "Trình duyệt không thể hiển thị ảnh 360°.",
              textureSizeError: "Thiết bị không hỗ trợ kích thước ảnh này.",
            },
          },
          scenes,
        });

        viewerRef.current = viewer;
        viewer.on("load", () => {
          const pendingSceneId = pendingSceneRef.current;
          pendingSceneRef.current = null;
          if (pendingSceneId && pendingSceneId !== viewer.getScene()) {
            const pendingScene = TOUR_SCENES.find((item) => item.id === pendingSceneId);
            viewerLoadingRef.current = true;
            viewer.loadScene(pendingSceneId, pendingScene?.pitch, pendingScene && openingYaw(pendingScene), sceneHfov());
            return;
          }
          viewerLoadingRef.current = false;
          setLoading(false);
          const currentIndex = TOUR_SCENES.findIndex((item) => item.id === viewer.getScene());
          preloadPanorama(TOUR_SCENES[(currentIndex + 1) % TOUR_SCENES.length].panorama);
        });
        viewer.on("scenechange", (sceneId) => {
          viewerLoadingRef.current = true;
          if (!pendingSceneRef.current) setActiveSceneId(sceneId);
          setLoading(true);
          setError("");
        });
        viewer.on("error", () => {
          viewerLoadingRef.current = false;
          pendingSceneRef.current = null;
          setLoading(false);
          setError("Không tải được ảnh ở điểm này. Hãy chọn một điểm khác trong lộ trình.");
        });
      } catch {
        if (!cancelled) {
          setLoading(false);
          setError("Không thể mở tour 360°. Vui lòng tải lại trang để thử lại.");
        }
      }
    }

    void createViewer();

    function updateFullscreen() {
      setIsFullscreen(document.fullscreenElement === stageRef.current);
      viewerRef.current?.resize();
    }
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => {
      cancelled = true;
      document.removeEventListener("fullscreenchange", updateFullscreen);
      viewerRef.current?.destroy();
      // Trả lại giá trị thật của trình duyệt khi rời trang tour.
      if (cappedPixelRatio) Reflect.deleteProperty(window, "devicePixelRatio");
      viewerRef.current = null;
    };
  }, []);

  function selectScene(sceneId: string) {
    if (sceneId === activeSceneId) {
      setRouteOpen(false);
      setGateOpen(false);
      return;
    }
    setActiveSceneId(sceneId);
    setLoading(true);
    setError("");
    setRouteOpen(false);
    setGateOpen(false);
    if (!document.fullscreenElement) window.scrollTo({ top: 0, behavior: "instant" });
    if (viewerRef.current) {
      if (viewerLoadingRef.current) pendingSceneRef.current = sceneId;
      else {
        const scene = TOUR_SCENES.find((item) => item.id === sceneId);
        viewerLoadingRef.current = true;
        viewerRef.current.loadScene(sceneId, scene?.pitch, scene && openingYaw(scene), sceneHfov());
      }
    }
    else initialSceneRef.current = sceneId;
  }

  function stepScene(direction: -1 | 1) {
    const nextIndex = (activeIndex + direction + TOUR_SCENES.length) % TOUR_SCENES.length;
    selectScene(TOUR_SCENES[nextIndex].id);
  }

  function zoom(direction: -1 | 1) {
    if (!viewerRef.current) return;
    const nextFov = Math.max(45, Math.min(110, viewerRef.current.getHfov() + direction * 15));
    viewerRef.current.setHfov(nextFov);
  }

  async function toggleFullscreen() {
    if (!stageRef.current) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stageRef.current.requestFullscreen();
    } catch {
      setError("Trình duyệt này không hỗ trợ chế độ toàn màn hình.");
    }
  }

  return (
    <div ref={stageRef} className="relative h-[calc(100svh-64px)] min-h-[560px] overflow-hidden bg-[#152f34] text-white min-[980px]:h-[calc(100svh-75px)]" aria-label="Tour tham quan Hoa Viên Bình Dương 360°">
      <div ref={viewerContainerRef} className="absolute inset-0" aria-label={`Ảnh 360°: ${activeScene.title}`} />

      {loading && (
        <div className="tour-loading-delayed pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#11292d]/25" role="status">
          <div className="bg-[#11292d]/90 px-5 py-3 text-[14px] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.25)]">Đang mở {activeScene.title}…</div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/65 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-72 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 p-4 sm:p-6">
        <div className="max-w-[460px]">
          <h1 className="font-heading text-[20px] font-semibold leading-tight sm:text-[27px]">Tham Quan Hoa Viên 360°</h1>
          <p className="mt-1 text-[12px] leading-relaxed text-white/85 sm:text-[14px]">Kéo để nhìn quanh không gian thực tế tại Hoa Viên Bình Dương.</p>
          {/* Đặt ở vùng trời phía trên: phần dưới ảnh là lối đi và mũi tên chuyển điểm. */}
          {activeSceneId === "cong-1" && !gateOpen && (
            <button type="button" onClick={() => setGateOpen(true)} aria-expanded={gateOpen} aria-controls="tour-gate" className="pointer-events-auto mt-3 inline-flex min-h-11 items-center gap-2 bg-white px-4 text-[13px] font-semibold text-heading shadow-[0_6px_20px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:hidden">
              <Compass size={17} className="text-brand" aria-hidden="true" />
              Chọn điểm đến từ cổng
            </button>
          )}
        </div>
        <div className="pointer-events-auto flex shrink-0 gap-2">
          <button ref={routeToggleRef} type="button" onClick={() => setRouteOpen((open) => !open)} aria-label={routeOpen ? "Đóng sơ đồ" : "Mở sơ đồ và lộ trình"} aria-expanded={routeOpen} aria-controls="tour-route" className="inline-flex h-11 items-center gap-2 bg-white px-3 text-[13px] font-semibold text-heading shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#edf3f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4">
            {routeOpen ? <X size={18} aria-hidden="true" /> : <Map size={18} aria-hidden="true" />}
            <span className="hidden sm:inline">{routeOpen ? "Đóng sơ đồ" : "Sơ đồ & lộ trình"}</span>
          </button>
          <button type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình"} className="grid h-11 w-11 place-items-center bg-white text-heading shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#edf3f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {isFullscreen ? <Shrink size={18} aria-hidden="true" /> : <Expand size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {activeSceneId === "cong-1" && (
        <div
          id="tour-gate"
          className={cn(
            "absolute inset-x-0 bottom-0 z-30 bg-white p-4 pb-6 text-heading shadow-[0_-12px_32px_rgba(0,0,0,0.24)]",
            "sm:inset-x-auto sm:bottom-auto sm:right-6 sm:top-[155px] sm:z-20 sm:w-[350px] sm:pb-4 sm:shadow-[0_12px_32px_rgba(0,0,0,0.24)] lg:bottom-8 lg:right-8 lg:top-auto lg:p-5",
            gateOpen ? "block" : "hidden sm:block",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-[17px] font-semibold leading-tight sm:text-[20px]">Từ cổng, bạn muốn khám phá đâu?</h3>
            <button type="button" onClick={() => setGateOpen(false)} aria-label="Đóng bảng chọn điểm đến" className="-mr-2 -mt-1 grid h-10 w-10 shrink-0 place-items-center hover:bg-[#f0f3f5] focus-visible:outline-2 focus-visible:outline-brand sm:hidden">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {GATE_DESTINATIONS.map((scene) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => selectScene(scene.id)}
                className="flex min-h-12 items-center justify-between gap-1 border border-[#dce3e9] px-2.5 py-2 text-left text-[12px] font-semibold leading-snug transition-colors hover:border-brand hover:bg-[#f4f6fc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-[13px]"
              >
                <span>{scene.title}</span>
                <ArrowRight size={15} className="shrink-0 text-brand" aria-hidden="true" />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => { setGateOpen(false); setRouteOpen(true); }} className="mt-3 text-[12px] font-semibold text-brand underline underline-offset-4 hover:text-[#3543ab] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-[13px]">
            Xem đầy đủ {TOUR_SCENES.length} điểm tham quan
          </button>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 lg:right-auto lg:w-[680px] lg:p-8">
        <div
          key={activeSceneId}
          aria-busy={loading}
          aria-live="polite"
          className={cn("tour-scene-caption", loading && "tour-scene-caption-pending")}
        >
          <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-white/80">
            <span>ĐIỂM {String(activeIndex + 1).padStart(2, "0")} / {String(TOUR_SCENES.length).padStart(2, "0")}</span>
            <span className="h-px w-10 bg-white/55" />
            <span>ẢNH THỰC TẾ</span>
          </div>
          <h2 className="font-heading text-[31px] font-semibold leading-[1.1] sm:text-[43px]">{activeScene.title}</h2>
          <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-white/90 sm:text-[16px]">{activeScene.description}</p>
        </div>
        <div className="pointer-events-auto mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
          <button type="button" onClick={() => stepScene(-1)} aria-label="Điểm tham quan trước" className="grid h-11 w-11 place-items-center border border-white/70 bg-black/20 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronLeft size={21} aria-hidden="true" /></button>
          <button type="button" onClick={() => stepScene(1)} className="inline-flex h-11 min-w-0 items-center gap-2 bg-white px-4 text-[13px] font-semibold text-heading transition-colors hover:bg-[#edf3f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:text-[14px]">
            <span className="max-w-[155px] truncate sm:max-w-none">Tiếp: {nextScene.title}</span><ChevronRight size={18} aria-hidden="true" />
          </button>
          <div className="ml-auto flex items-center gap-1 lg:ml-2">
            <button type="button" onClick={() => zoom(1)} aria-label="Thu nhỏ ảnh" className="grid h-11 w-11 place-items-center border border-white/70 bg-black/20 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Minus size={18} aria-hidden="true" /></button>
            <button type="button" onClick={() => zoom(-1)} aria-label="Phóng to ảnh" className="grid h-11 w-11 place-items-center border border-white/70 bg-black/20 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Plus size={18} aria-hidden="true" /></button>
          </div>
        </div>
      </div>

      <aside id="tour-route" aria-label="Sơ đồ và lộ trình tham quan" aria-hidden={!routeOpen} inert={!routeOpen} className={`tour-route-panel absolute bottom-0 right-0 top-0 z-30 flex w-full max-w-none flex-col bg-white text-heading shadow-[-12px_0_40px_rgba(0,0,0,0.18)] transition-transform duration-300 sm:w-[410px] sm:max-w-[410px] ${routeOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}>
        <div className="flex items-start justify-between border-b border-[#dfe5e8] px-5 py-5">
          <div><h3 className="font-heading text-[23px] font-semibold">Khám phá Hoa Viên</h3><p className="mt-1 text-[13px] text-[#586772]">Chọn điểm trên sơ đồ hoặc danh sách.</p></div>
          <button ref={routeCloseRef} type="button" onClick={() => setRouteOpen(false)} aria-label="Đóng lộ trình" tabIndex={routeOpen ? 0 : -1} className="grid h-10 w-10 place-items-center hover:bg-[#f0f3f5] focus-visible:outline-2 focus-visible:outline-brand"><X size={19} aria-hidden="true" /></button>
        </div>
        <div className="grid grid-cols-2 border-b border-[#dfe5e8] px-5 pt-2" aria-label="Cách chọn điểm tham quan">
          <button type="button" onClick={() => setRouteView("map")} aria-pressed={routeView === "map"} className={`min-h-11 border-b-2 px-2 text-[13px] font-semibold focus-visible:outline-2 focus-visible:outline-brand ${routeView === "map" ? "border-brand text-brand" : "border-transparent text-[#536879] hover:text-heading"}`}>Sơ đồ điểm chụp</button>
          <button type="button" onClick={() => setRouteView("list")} aria-pressed={routeView === "list"} className={`min-h-11 border-b-2 px-2 text-[13px] font-semibold focus-visible:outline-2 focus-visible:outline-brand ${routeView === "list" ? "border-brand text-brand" : "border-transparent text-[#536879] hover:text-heading"}`}>Danh sách {TOUR_SCENES.length} điểm</button>
        </div>
        <div ref={routeContentRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          {routeView === "map" ? (
            <TourMap activeScene={activeScene} onSelectScene={selectScene} />
          ) : TOUR_SCENES.map((scene, index) => (
              <div key={scene.id}>
                {(index === 0 || TOUR_SCENES[index - 1].group !== scene.group) && (
                  <h4 className="mb-2 mt-3 px-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#536879]">
                    {scene.group === "cong-trinh" ? "Cảnh quan & công trình" : "Các khu an nghỉ"}
                  </h4>
                )}
                <button type="button" onClick={() => selectScene(scene.id)} tabIndex={routeOpen ? 0 : -1} aria-current={activeSceneId === scene.id ? "step" : undefined} className={`mb-2 flex w-full items-center gap-3 p-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-brand ${activeSceneId === scene.id ? "bg-[#eaf1f4]" : "hover:bg-[#f3f6f7]"}`}>
                  <span className="relative h-16 w-24 shrink-0 overflow-hidden bg-[#dce7ea]"><Image src={scene.thumbnail} alt="" fill sizes="96px" className="object-cover" /></span>
                  <span className="min-w-0 flex-1"><span className="block text-[11px] font-semibold tracking-[0.1em] text-[#61737e]">ĐIỂM {String(index + 1).padStart(2, "0")}</span><span className="mt-1 block text-[14px] font-semibold leading-snug">{scene.title}</span></span>
                  {activeSceneId === scene.id ? <span className="h-2 w-2 shrink-0 rounded-full bg-brand" /> : <ArrowRight size={16} className="shrink-0 text-[#61737e]" aria-hidden="true" />}
                </button>
              </div>
            ))}
        </div>
      </aside>

      {error && <div className="absolute left-4 right-4 top-24 z-40 flex items-center justify-between gap-3 bg-white px-4 py-3 text-[13px] text-heading shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:left-auto sm:max-w-[440px]" role="alert"><p>{error}</p><button type="button" onClick={() => setError("")} aria-label="Đóng thông báo lỗi" className="shrink-0 focus-visible:outline-2 focus-visible:outline-brand"><X size={18} aria-hidden="true" /></button></div>}
    </div>
  );
}
