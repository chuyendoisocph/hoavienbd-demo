"use client";

import type { ReactNode } from "react";
import { useId, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { PhoneIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ConsultationDialogProps {
  children: ReactNode;
  title: string;
  interest: string;
  description?: string;
  triggerClassName?: string;
}

const HOTLINE = "0818 555 444";
const HOTLINE_HREF = "tel:0818555444";

export function ConsultationDialog({
  children,
  title,
  interest,
  description,
  triggerClassName,
}: ConsultationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const contactHref = `/lien-he?nhu-cau=${encodeURIComponent(interest)}`;

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className={cn(
          "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
          triggerClassName,
        )}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto max-h-[calc(100dvh-32px)] w-[min(92vw,560px)] overflow-y-auto bg-transparent p-0 backdrop:bg-[#151937]/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative border border-brand/15 bg-white px-6 py-8 shadow-2xl sm:px-10 sm:py-10">
          <form method="dialog">
            <button
              type="submit"
              aria-label="Đóng hộp thoại tư vấn"
              className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center text-brand/65 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </form>

          <p className="pr-12 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand/65">
            TƯ VẤN NHANH
          </p>
          <h2
            id={titleId}
            className="mt-3 pr-12 font-heading text-[32px] font-medium leading-tight text-brand sm:text-[40px]"
          >
            {title}
          </h2>
          <p id={descriptionId} className="mt-5 text-[16px] leading-[1.75] text-[#5f6475]">
            {description ?? (
              <>
                Quý khách đang quan tâm đến{" "}
                <strong className="font-semibold text-brand">{interest}</strong>. Đội ngũ Hoa Viên
                sẵn sàng trao đổi và tư vấn phương án phù hợp ngay trong cuộc gọi.
              </>
            )}
          </p>

          <div className="mt-7 border-y border-brand/15 py-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#7b7f8d]">
              TỔNG ĐÀI TƯ VẤN
            </p>
            <a
              href={HOTLINE_HREF}
              className="mt-2 inline-flex items-center gap-3 text-[26px] font-semibold tracking-[-0.02em] text-brand transition-colors hover:text-[#3544b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <PhoneIcon className="text-[19px]" aria-hidden="true" />
              {HOTLINE}
            </a>
            <p className="mt-2 text-[13px] leading-relaxed text-[#7b7f8d]">
              Văn phòng phục vụ từ 7h30 – 17h00, tất cả các ngày trong tuần.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={HOTLINE_HREF}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-brand px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#3544b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <PhoneIcon className="text-[14px]" aria-hidden="true" />
              Gọi tổng đài
            </a>
            <Link
              href={contactHref}
              onClick={() => dialogRef.current?.close()}
              className="inline-flex min-h-12 flex-1 items-center justify-center border border-brand px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-brand transition-colors hover:bg-brand/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Thông tin liên hệ
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
