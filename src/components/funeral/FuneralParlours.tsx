"use client";

import Image from "next/image";
import { useState } from "react";
import { PARLOURS } from "@/lib/funeral-content";
import { cn } from "@/lib/utils";

export function FuneralParlours() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: gallery carousel */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {PARLOURS.slides.map((slide, i) => (
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.caption}
                fill
                sizes="(min-width: 1024px) 576px, calc(100vw - 48px)"
                className={cn(
                  "object-cover object-center transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <p className="mt-3 text-[16px] text-[#6b6b6b]">
            {PARLOURS.slides[active].caption}
          </p>
          <div className="mt-4 flex items-center gap-2">
            {PARLOURS.slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show ${slide.caption}`}
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

        {/* Right: static description */}
        <div>
          <h2 className="font-heading text-[30px] font-medium text-heading md:text-[40px]">
            {PARLOURS.title}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.9] text-[#666]">{PARLOURS.body}</p>
          <p className="mt-6 text-[16px] text-[#666]">{PARLOURS.note}</p>
        </div>
      </div>
    </section>
  );
}
