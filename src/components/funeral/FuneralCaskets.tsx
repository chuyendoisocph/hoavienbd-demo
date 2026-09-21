"use client";

import { useState } from "react";
import { CASKETS, CASKET_WATCH } from "@/lib/funeral-content";
import { YoutubeWatch } from "@/components/funeral/YoutubeWatch";
import { cn } from "@/lib/utils";

export function FuneralCaskets() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Left: title + casket carousel + copy */}
        <div>
          <h2 className="font-heading text-[30px] font-medium text-heading md:text-[40px]">
            {CASKETS.title}
          </h2>
          <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden">
            {CASKETS.caskets.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt="Casket"
                className={cn(
                  "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            {CASKETS.caskets.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show casket ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === active ? "bg-brand" : "bg-black/20",
                )}
              />
            ))}
          </div>
          <p className="mt-8 text-[16px] leading-[1.9] text-[#666]">{CASKETS.bodyOne}</p>
          <p className="mt-5 text-[16px] leading-[1.9] text-[#666]">{CASKETS.bodyTwo}</p>
          <p className="mt-5 text-[16px] text-[#666]">{CASKETS.note}</p>
        </div>

        {/* Right: urn grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 self-start pt-4">
          {CASKETS.urns.map((urn) => (
            <div key={urn.image} className="flex flex-col items-center text-center">
              <div className="flex h-[220px] w-full items-end justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={urn.image} alt={urn.label} className="max-h-[220px] object-contain" />
              </div>
              <p className="mt-4 text-[16px] leading-snug text-heading">{urn.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WATCH: The Guardian hearse */}
      <div className="px-6 pb-[20px] pt-[80px] text-center">
        <p className="mb-[30px] text-[15px] uppercase tracking-[0.12em] text-[#999]">XEM VIDEO</p>
        <YoutubeWatch
          youtubeId={CASKET_WATCH.youtubeId}
          poster={CASKET_WATCH.poster}
          className="mx-auto aspect-[16/8] max-w-[1180px]"
        />
      </div>
    </section>
  );
}
