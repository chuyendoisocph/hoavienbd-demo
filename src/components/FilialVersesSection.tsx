"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { FILIAL_VERSES } from "@/lib/filial-verses";
import { cn } from "@/lib/utils";

const OPENING = FILIAL_VERSES.verses.find((verse) => !verse.image);
const SLIDES = FILIAL_VERSES.verses.flatMap((verse) => (verse.image ? [{ ...verse, image: verse.image }] : []));

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const FOCUS_RING = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const FOCUS_RING_ON_DARK = "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Thời gian đọc thong thả của một bài: khoảng nửa giây mỗi chữ, tối thiểu 12 giây. */
function readingTime(lines: string[]) {
  return Math.max(12000, lines.join(" ").split(/\s+/).length * 500);
}

function VerseLines({ lines, className }: { lines: string[]; className: string }) {
  return (
    <p className={className}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

/**
 * Mục thơ "Công cha nghĩa mẹ": một khung lớn (ảnh + thơ), đổi bài bằng nút hoặc vạch vị trí.
 * Tự chuyển bài theo độ dài từng bài, chỉ chạy khi khung đang hiện trên màn hình,
 * và dừng hẳn khi người xem tự chọn bài.
 */
export function FilialVersesSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const total = SLIDES.length;
  const slide = SLIDES[active];
  const autoplay = playing && !reducedMotion;
  const choose = (index: number) => {
    setPlaying(false);
    setActive((index + total) % total);
  };

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const arrowClass = cn(
    "grid h-11 w-11 shrink-0 place-items-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-[#242d73]",
    FOCUS_RING_ON_DARK,
  );

  return (
    <section className="bg-white pb-[88px] pt-[56px] lg:pb-[128px] lg:pt-[72px]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1140px]">
        <div className="grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-[34px] font-semibold leading-[1.2] text-heading lg:text-[52px]">
              {FILIAL_VERSES.title}
            </h2>
            <p className="mt-3 font-serif text-[19px] leading-[1.4] text-brand lg:mt-4 lg:text-[24px]">
              {FILIAL_VERSES.tagline}
            </p>
          </div>
          {OPENING && (
            <blockquote>
              <VerseLines
                lines={OPENING.lines}
                className="text-center font-serif text-[17px] italic leading-[1.55] text-[#555] md:text-right lg:text-[19px]"
              />
            </blockquote>
          )}
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={FILIAL_VERSES.title}
          className="-mx-6 mt-7 bg-[#242d73] shadow-[0_36px_70px_-40px_rgba(23,33,82,0.7)] md:mx-0 md:mt-9"
        >
          {/* Ảnh và thơ liền thành một khối; tràn mép trên điện thoại để thơ đủ chỗ; vuốt ngang để đổi bài. */}
          <div
            ref={stage}
            className="relative grid touch-pan-y md:grid-cols-2"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setHovered(true);
            }}
            onPointerLeave={() => setHovered(false)}
            onTouchStart={(event) => {
              touchStart.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStart.current;
              touchStart.current = null;
              if (Math.abs(distance) > 40) choose(active + (distance < 0 ? 1 : -1));
            }}
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-[#e3e7f0] md:aspect-auto md:min-h-[440px]">
              {SLIDES.map((item, index) => (
                <Image
                  key={item.image.src}
                  src={item.image.src}
                  alt={index === active ? item.image.alt : ""}
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className={cn(
                    "object-cover transition-[opacity,scale] ease-out [transition-duration:700ms,14000ms] motion-reduce:transition-none",
                    item.image.position,
                    // Ảnh đang xem phóng rất chậm trong lúc đọc thơ.
                    index === active ? "scale-[1.05] opacity-100 motion-reduce:scale-100" : "scale-100 opacity-0",
                  )}
                />
              ))}
            </div>

            <div className="flex flex-col px-4 py-5 md:px-6 md:py-8 lg:px-10">
              <div
                aria-live={autoplay ? "off" : "polite"}
                className="flex min-h-[200px] flex-1 items-center justify-center pb-4 md:min-h-0 md:pb-6"
              >
                <VerseLines
                  key={active}
                  lines={slide.lines}
                  className={cn(
                    "animate-in fade-in slide-in-from-bottom-2 text-center font-serif text-white duration-700 motion-reduce:animate-none",
                    // Bài ngắn in lớn hơn để hai câu thơ lấp đầy khung.
                    slide.lines.length <= 2
                      ? "text-[22px] leading-[1.5] md:text-[20px] lg:text-[26px] xl:text-[32px]"
                      : "text-[18px] leading-[1.7] md:text-[16px] lg:text-[22px] xl:text-[26px] xl:leading-[1.6]",
                  )}
                />
              </div>

              <div className="flex items-center justify-between gap-2 md:justify-center md:gap-3">
                <button type="button" onClick={() => choose(active - 1)} aria-label="Bài trước" className={arrowClass}>
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex">
                  {SLIDES.map((item, index) => (
                    <button
                      key={item.image.src}
                      type="button"
                      onClick={() => choose(index)}
                      aria-label={`Bài ${index + 1} trên ${total}: ${item.lines[0]}`}
                      aria-current={index === active ? "true" : undefined}
                      className={cn("flex h-11 w-6 items-center justify-center", FOCUS_RING_ON_DARK)}
                    >
                      <span className={cn("block h-[3px] w-4", index === active ? "bg-white" : "bg-white/30")} />
                    </button>
                  ))}
                </div>
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={() => setPlaying(!playing)}
                    aria-label={playing ? "Tạm dừng tự chuyển bài" : "Tiếp tục tự chuyển bài"}
                    className={arrowClass}
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                )}
                <button type="button" onClick={() => choose(active + 1)} aria-label="Bài sau" className={arrowClass}>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thanh dưới khung chạy hết thì sang bài kế; khi đã dừng thì không hiện. */}
            {autoplay && (
              <span
                key={active}
                aria-hidden="true"
                onAnimationEnd={() => setActive((active + 1) % total)}
                style={{ animationDuration: `${readingTime(slide.lines)}ms` }}
                className={cn(
                  "absolute inset-x-0 bottom-0 block h-[2px] origin-left animate-[filial-progress_1s_linear_forwards] bg-white/80",
                  (hovered || !inView) && "[animation-play-state:paused]",
                )}
              />
            )}
          </div>
        </div>

        <div className="mt-9 text-center">
          <Link
            href={FILIAL_VERSES.cta.href}
            className={cn(
              "inline-block border border-brand px-5 py-[14px] text-[13px] font-extrabold tracking-[1px] text-brand transition-colors hover:bg-brand hover:text-white md:px-[30px] md:py-[16px] md:text-[15px] md:tracking-[2px]",
              FOCUS_RING,
            )}
          >
            {FILIAL_VERSES.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
