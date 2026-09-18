"use client";

import { useState } from "react";
import { SANH_PHAN } from "@/lib/others-content";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function OthersNvSeed() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#d6d6d6] py-[70px]">
      {/* Intro */}
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="text-[15px] uppercase tracking-[6px] text-[#888]">{SANH_PHAN.eyebrow}</p>
        <h2 className="font-heading mt-3 text-[44px] font-medium text-brand md:text-[52px]">
          {SANH_PHAN.title}
        </h2>
        {SANH_PHAN.intro.map((para) => (
          <p
            key={para.slice(0, 24)}
            className="mx-auto mt-6 max-w-[860px] text-[15px] leading-[1.9] text-[#555]"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Carousel + 7 benefits */}
      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {SANH_PHAN.images.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`Không gian sanh phần ${i + 1}`}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {SANH_PHAN.images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Hiển thị hình ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === active ? "bg-brand" : "bg-black/25",
                )}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-[28px] font-bold text-brand">
            {SANH_PHAN.benefitsTitle}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.9] text-[#555]">{SANH_PHAN.benefitsIntro}</p>
          <ul className="mt-6 flex flex-col gap-4">
            {SANH_PHAN.benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[16px] text-[#444]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
