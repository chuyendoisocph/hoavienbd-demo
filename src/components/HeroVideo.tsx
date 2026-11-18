"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  /** Nén nhẹ cho điện thoại (720p). */
  mobileSrc: string;
  /** Bản nét hơn cho máy tính (1080p). */
  desktopSrc: string;
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
 * Ảnh tĩnh nằm sẵn ở lớp dưới (next/image, đã nén và tải ưu tiên). Video không có
 * `poster` riêng và trong suốt cho tới khi thật sự chạy, rồi mới hiện dần lên. Nhờ vậy
 * ảnh không bị tải hai lần (bản gốc qua `poster`), và Google đo tốc độ hiển thị (LCP)
 * theo ảnh đã nén thay vì chờ thẻ video.
 *
 * Video bị bỏ qua, chỉ còn ảnh tĩnh, trong ba trường hợp:
 * 1. Người dùng bật "giảm chuyển động".
 * 2. Người dùng bật chế độ tiết kiệm dữ liệu.
 * 3. Mạng 2G chậm.
 * Ngoài ra nếu trình duyệt từ chối tự phát (ví dụ iPhone đang ở chế độ nguồn điện
 * thấp), video không bao giờ hiện lên và ảnh tĩnh vẫn ở đó, hero không bao giờ trống.
 */
export function HeroVideo({ mobileSrc, desktopSrc, className }: HeroVideoProps) {
  const [allowVideo, setAllowVideo] = useState(false);
  const [compact, setCompact] = useState(true);
  // Nguồn đang thực sự chạy: đổi nguồn (xoay máy) thì video tự ẩn lại cho tới khi nguồn mới chạy.
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
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

    // Chỉ tải video khi trang đã tải xong (sự kiện load): video vài MB tải song song sẽ
    // chiếm đường truyền của ảnh hero, làm ảnh hiện chậm trên mạng di động.
    if (document.readyState === "complete") update();
    else window.addEventListener("load", update, { once: true });
    reduceMotion.addEventListener("change", update);

    return () => {
      small.removeEventListener("change", pickSource);
      window.removeEventListener("load", update);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!allowVideo) return;

    // Safari trên iOS đôi khi bỏ qua thuộc tính autoplay, cần gọi play() tay.
    // Nếu bị từ chối thì video vẫn trong suốt, ảnh tĩnh bên dưới vẫn hiển thị.
    const video = videoRef.current;
    if (!video) return;

    video.load();
    void video.play().catch(() => undefined);
  }, [allowVideo, compact]);

  if (!allowVideo) return null;

  const src = compact ? mobileSrc : desktopSrc;

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      onPlaying={() => setPlayingSrc(src)}
      className={cn(className, "opacity-0 transition-opacity duration-700 ease-out", playingSrc === src && "opacity-100")}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
