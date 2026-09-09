"use client";

import { CREMATION_INTRO } from "@/lib/cremation-content";
import { VideoFeature } from "@/components/VideoFeature";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function CremationIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-[70px] lg:grid-cols-[58%_42%]">
        {/* LEFT: video with overlapping badge */}
        <div className="relative">
          <VideoFeature
            poster={CREMATION_INTRO.poster}
            video={CREMATION_INTRO.video}
            className="aspect-[4/3]"
          />
          <div
            className={cn(
              "absolute bottom-6 -left-2 z-10 bg-brand px-7 py-[18px] text-[18px] font-bold uppercase leading-tight tracking-[3px] text-white",
            )}
          >
            <span className="block">VIDEO</span>
            <span className="block">TOÀN CẢNH</span>
          </div>
        </div>

        {/* RIGHT: heading, body, read more */}
        <div>
          <h2 className="mb-6 font-heading font-medium leading-[1.25] text-brand text-[clamp(28px,3.5vw,36px)]">
            {CREMATION_INTRO.title}
          </h2>
          <p className="text-[15px] leading-[1.9] text-[#666]">
            {CREMATION_INTRO.body}
          </p>
          <a
            href={CREMATION_INTRO.cta.href}
            className="mt-6 inline-flex items-center gap-4 text-[18px] font-medium uppercase tracking-[2px] text-brand-link"
          >
            <span>{CREMATION_INTRO.cta.label}</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand">
              <PlusIcon className="text-white" style={{ fontSize: "18px" }} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
