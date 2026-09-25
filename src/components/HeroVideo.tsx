"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  /** Nén nhẹ cho điện thoại (720p). */
  mobileSrc: string;
  /** Bản nét hơn cho máy tính (1080p). */
  desktopSrc: string;
  poster: string;
  className?: string;
}

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

/**
 * Video nền hero. Điện thoại và máy tính bảng (dưới 1024px) tải bản 720p,
 * máy tính tải bản 1080p.
 *
 * Video bị bỏ qua, chỉ còn ảnh poster, trong ba trường hợp:
 * 1. Người dùng bật "giảm chuyển động".
 * 2. Người dùng bật chế độ tiết kiệm dữ liệu.
 * 3. Mạng 2G hoặc 3G chậm.
 * Ngoài ra nếu trình duyệt từ chối tự phát (ví dụ iPhone đang ở chế độ nguồn điện
 * thấp), poster vẫn hiển thị nên hero không bao giờ trống.
 */
export function HeroVideo({ mobileSrc, desktopSrc, poster, className }: HeroVideoProps) {
  const [allowVideo, setAllowVideo] = useState(false);
  const [compact, setCompact] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Chọn nguồn bằng JS thay vì thuộc tính `media` của <source>: trình duyệt chỉ
    // duyệt `media` một lần lúc tạo phần tử, xoay ngang máy sẽ không đổi nguồn.
    const small = window.matchMedia("(max-width: 1023px)");
    const pickSource = () => setCompact(small.matches);

    pickSource();
    small.addEventListener("change", pickSource);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection;
    const slowNetwork =
      connection?.saveData === true ||
      /^(slow-)?2g$/.test(connection?.effectiveType ?? "");

    const update = () => setAllowVideo(!reduceMotion.matches && !slowNetwork);

    update();
    reduceMotion.addEventListener("change", update);

    return () => {
      small.removeEventListener("change", pickSource);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!allowVideo) return;

    // Safari trên iOS đôi khi bỏ qua thuộc tính autoplay, cần gọi play() tay.
    // Nếu bị từ chối thì giữ nguyên poster, không cần xử lý gì thêm.
    const video = videoRef.current;
    if (!video) return;

    video.load();
    void video.play().catch(() => undefined);
  }, [allowVideo, compact]);

  if (!allowVideo) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      className={cn(className)}
    >
      <source src={compact ? mobileSrc : desktopSrc} type="video/mp4" />
    </video>
  );
}
