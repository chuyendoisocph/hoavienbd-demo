import Image from "next/image";
import { ArrowUpRight, Navigation2 } from "lucide-react";
import { TOUR_SCENES, type TourScene } from "@/lib/tour360-content";

const MAP_WIDTH = 320;
const MAP_HEIGHT = 490;
const LONGITUDE_METERS = 111_320 * Math.cos(11.176 * Math.PI / 180);
const LATITUDE_METERS = 111_132;

const minLat = Math.min(...TOUR_SCENES.map((scene) => scene.camera.lat));
const maxLat = Math.max(...TOUR_SCENES.map((scene) => scene.camera.lat));
const minLon = Math.min(...TOUR_SCENES.map((scene) => scene.camera.lon));
const maxLon = Math.max(...TOUR_SCENES.map((scene) => scene.camera.lon));
const spanX = (maxLon - minLon) * LONGITUDE_METERS;
const spanY = (maxLat - minLat) * LATITUDE_METERS;
const scale = Math.min((MAP_WIDTH - 92) / spanX, (MAP_HEIGHT - 76) / spanY);

function mapPosition(scene: TourScene) {
  return {
    x: MAP_WIDTH / 2 + (scene.camera.lon - (minLon + maxLon) / 2) * LONGITUDE_METERS * scale,
    y: MAP_HEIGHT / 2 - (scene.camera.lat - (minLat + maxLat) / 2) * LATITUDE_METERS * scale,
  };
}

const positions = Object.fromEntries(TOUR_SCENES.map((scene) => [scene.id, mapPosition(scene)]));
const connections = TOUR_SCENES.flatMap((scene) =>
  scene.links
    .filter((targetId) => TOUR_SCENES.some((target) => target.id === targetId) && scene.id < targetId)
    .map((targetId) => ({ from: positions[scene.id], to: positions[targetId] })),
);

interface TourMapProps {
  activeScene: TourScene;
  onSelectScene: (sceneId: string) => void;
}

export function TourMap({ activeScene, onSelectScene }: TourMapProps) {
  return (
    <div>
      <div className="relative overflow-hidden border border-[#d8e4dc] bg-[#eaf1ea]">
        <svg
          className="block h-auto w-full"
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          aria-label="Sơ đồ vị trí tương đối của 15 điểm chụp 360 độ"
          role="group"
        >
          <defs>
            <pattern id="tour-map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#cadacf" strokeWidth="0.65" />
            </pattern>
          </defs>
          <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#tour-map-grid)" />
          {connections.map(({ from, to }, index) => (
            <line key={index} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#719486" strokeWidth="2" strokeDasharray="3 5" />
          ))}
          {TOUR_SCENES.map((scene, index) => {
            const point = positions[scene.id];
            const isActive = scene.id === activeScene.id;
            return (
              <g
                key={scene.id}
                className={`tour-map-node cursor-pointer ${isActive ? "tour-map-node-active" : ""}`}
                data-tour-scene={scene.id}
                role="button"
                tabIndex={0}
                aria-label={`${isActive ? "Đang xem" : "Xem"} điểm ${index + 1}: ${scene.title}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => onSelectScene(scene.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectScene(scene.id);
                  }
                }}
              >
                <title>{scene.title}</title>
                <circle className="tour-map-hit" cx={point.x} cy={point.y} r="19" fill="transparent" />
                {isActive && <circle cx={point.x} cy={point.y} r="20" fill="#4356c3" opacity="0.16" />}
                <circle
                  className="tour-map-dot"
                  cx={point.x}
                  cy={point.y}
                  r={isActive ? 14 : 12}
                  fill={isActive ? "#4356c3" : scene.group === "cong-trinh" ? "#214e53" : "#567b64"}
                  stroke="#fff"
                  strokeWidth="2.5"
                />
                <text x={point.x} y={point.y + 3.5} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" pointerEvents="none">
                  {index + 1}
                </text>
              </g>
            );
          })}
          <g transform="translate(275 19)" aria-hidden="true">
            <path d="M 0 17 L 9 0 L 18 17" fill="none" stroke="#214e53" strokeWidth="2" />
            <text x="9" y="30" textAnchor="middle" fill="#214e53" fontSize="10" fontWeight="700">BẮC</text>
          </g>
        </svg>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 px-2.5 py-1.5 text-[11px] font-semibold text-[#214e53] shadow-[0_4px_12px_rgba(20,50,40,0.12)]">
          <Navigation2 size={13} aria-hidden="true" />
          Chạm vào điểm để tham quan
        </div>
      </div>
      <div className="mt-3 flex gap-3 border-b border-[#dfe5e8] pb-4">
        <div className="relative h-16 w-20 shrink-0 overflow-hidden bg-[#dce7ea]">
          <Image src={activeScene.thumbnail} alt="" fill sizes="80px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#526a72]">Đang xem trên tour</p>
          <p className="mt-1 font-heading text-[17px] font-semibold leading-tight">{activeScene.title}</p>
          <p className="mt-1 text-[12px] leading-snug text-[#52616b]">{activeScene.description}</p>
        </div>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-[#51636a]">
        Các điểm đặt theo tọa độ ảnh chụp. Đường nét đứt chỉ liên kết chuyển cảnh, không phải lối đi thực địa.
      </p>
      <button type="button" onClick={() => onSelectScene(TOUR_SCENES[0].id)} className="mt-3 inline-flex min-h-11 items-center gap-1 text-[12px] font-semibold text-brand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-brand">
        Trở về cổng Hoa Viên <ArrowUpRight size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
