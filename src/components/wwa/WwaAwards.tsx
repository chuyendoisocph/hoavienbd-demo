"use client";

import { useState } from "react";
import { WWA_AWARDS } from "@/lib/wwa-content";
import { cn } from "@/lib/utils";

export function WwaAwards() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-[34px] font-medium text-brand md:text-[44px]">
          {WWA_AWARDS.title}
        </h2>
        {WWA_AWARDS.body.map((para) => (
          <p key={para.slice(0, 24)} className="mx-auto mt-5 max-w-[820px] text-[15px] leading-[1.9] text-[#666]">
            {para}
          </p>
        ))}
      </div>

      {/* Awards carousel */}
      {WWA_AWARDS.images.length > 0 && (
      <div className="mx-auto mt-12 max-w-[900px] px-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {WWA_AWARDS.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`Award ${i + 1}`}
              className={cn(
                "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
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
              aria-label={`Show award ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                i === active ? "bg-brand" : "bg-black/20",
              )}
            />
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
