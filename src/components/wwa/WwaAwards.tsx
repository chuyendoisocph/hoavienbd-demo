"use client";

import { useState } from "react";
import Image from "next/image";
import { WWA_AWARDS } from "@/lib/wwa-content";
import { cn } from "@/lib/utils";

export function WwaAwards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-[30px] font-medium text-brand md:text-[44px]">
          {WWA_AWARDS.title}
        </h2>
        {WWA_AWARDS.body.map((para) => (
          <p key={para.slice(0, 24)} className="mx-auto mt-5 max-w-[820px] text-[16px] leading-[1.9] text-[#666]">
            {para}
          </p>
        ))}
      </div>

      {/* Awards carousel */}
      {WWA_AWARDS.images.length > 0 && (
      <div className="mx-auto mt-12 max-w-[900px] px-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {WWA_AWARDS.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Giải thưởng ${i + 1}`}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className={cn(
                "object-contain transition-opacity duration-500",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {WWA_AWARDS.images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Hiển thị giải thưởng ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className="grid h-6 w-6 place-items-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === active ? "bg-brand" : "bg-black/20",
                )}
              />
            </button>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
