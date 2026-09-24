"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  /** Nén nhẹ cho điện thoại (720p). */
  mobileSrc: string;
  /** Bản nét hơn cho máy tính (1080p). */
  desktopSrc: string;
  poster: string;
  className?: string;
}

/**
 * Video nền hero: điện thoại tải bản 720p, máy tính tải bản 1080p.
 * Trình duyệt cũ không hỗ trợ `media` sẽ lấy source đầu tiên (bản nhẹ).
 */
export function HeroVideo({ mobileSrc, desktopSrc, poster, className }: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setShowVideo(desktop.matches);

    update();
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, []);

  if (!showVideo) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      className={cn(className)}
    >
      <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
      <source src={desktopSrc} type="video/mp4" />
    </video>
  );
}
