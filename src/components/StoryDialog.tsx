"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface StoryDialogProps {
  id: string;
  eyebrow?: string;
  title: string;
  /** Đoạn mở đầu, đặt ở đầu bài trong cửa sổ. */
  lead?: string;
  /** Thân bài, dựng sẵn trên máy chủ (StoryBlocks) để chữ không nằm trong mã JavaScript. */
  children: ReactNode;
  /** Ảnh đầu bài trong cửa sổ. */
  image?: string;
  /** Vị trí cắt ảnh đầu bài (CSS object-position), để không cắt mất phần chính của ảnh. */
  imagePosition?: string;
  label?: string;
  /** Canh trái nút từ cỡ màn hình nào trở lên (theo cách canh chữ của mục chứa nó). */
  align?: "center" | "md" | "lg";
  theme?: "light" | "dark";
}

/**
 * Nút "Đọc thêm" mở toàn bộ bài trong một cửa sổ nổi, để trang chủ không bị kéo dài.
 * Dùng <dialog> gốc của trình duyệt: tự giữ con trỏ bàn phím bên trong, Esc để đóng.
 */
export function StoryDialog({
  id,
  eyebrow,
  title,
  lead,
  children,
  image,
  imagePosition = "center",
  label = "Đọc thêm",
  align = "lg",
  theme = "light",
}: StoryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${id}-title`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Khóa cuộn trang phía sau khi cửa sổ đang mở.
    const unlock = () => document.documentElement.style.removeProperty("overflow");
    dialog.addEventListener("close", unlock);
    return () => {
      dialog.removeEventListener("close", unlock);
      unlock();
    };
  }, []);

  function open() {
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
    dialogRef.current?.querySelector(".story-dialog-body")?.scrollTo({ top: 0 });
  }

  return (
    <>
      <div className={cn("mt-6 flex justify-center", align === "lg" && "lg:justify-start", align === "md" && "md:justify-start")}>
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          aria-controls={id}
          className={cn(
            "inline-flex cursor-pointer items-center gap-3 py-2 text-[16px] font-medium uppercase tracking-[2px]",
            theme === "dark" ? "text-white" : "text-brand-link",
          )}
        >
          {label}
          <span
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-full",
              theme === "dark" ? "border border-white" : "bg-brand text-white",
            )}
          >
            <PlusIcon aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        id={id}
        aria-labelledby={titleId}
        // Bấm ra vùng tối bên ngoài khung thì đóng.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="story-dialog m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-left backdrop:bg-[#0a0c28]/70 md:h-[min(88vh,900px)] md:w-[calc(100%-48px)] md:max-w-[760px]"
      >
        <div className="relative flex h-full flex-col overflow-hidden bg-white text-[#555] md:rounded-[6px] md:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Đóng"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-heading shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur transition-colors hover:bg-white md:right-4 md:top-4"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="story-dialog-body flex-1 overflow-y-auto overscroll-contain">
            {/* Ảnh đầu bài: cùng ảnh với mục trên trang chủ, để người đọc thấy mình vẫn ở đúng câu chuyện đó. */}
            <header className="relative flex min-h-[220px] items-end overflow-hidden bg-[#1b2447] md:min-h-[280px]">
              {image && (
                <Image src={image} alt="" fill sizes="(min-width: 768px) 760px, 100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
              )}
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,40,0.15)_0%,rgba(10,12,40,0.82)_100%)]" />
              <div className="relative px-5 pb-6 pr-16 md:px-12 md:pb-9">
                {eyebrow && (
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e3c98a]">{eyebrow}</p>
                )}
                <h2 id={titleId} className="mt-2 font-heading text-[28px] font-medium leading-[1.2] !text-white md:text-[40px]">
                  {title}
                </h2>
              </div>
            </header>
            <div className="mx-auto max-w-[640px] px-5 pb-14 pt-9 text-[17px] leading-[1.85] md:px-0 md:pt-12 md:text-[18px]">
              {lead && (
                <p className="mb-10 font-serif text-[20px] leading-[1.65] text-heading md:text-[22px]">
                  {lead}
                </p>
              )}
              {children}
              <footer className="mt-14 border-t border-[#e6dcc4] pt-8 text-center">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#b08a35]">Hoa Viên Bình Dương</p>
              </footer>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
