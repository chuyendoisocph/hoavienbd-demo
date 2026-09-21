"use client";

import { COMMITMENT } from "@/lib/burial-content";
import { VideoFeature } from "@/components/VideoFeature";
import { cn } from "@/lib/utils";

export function CommitmentSection() {
  return (
    <section className="py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch px-4 md:flex-row md:items-center">
        {/* LEFT: video (~62%) */}
        <div className="w-full md:w-[62%]">
          <VideoFeature
            poster={COMMITMENT.poster}
            video={COMMITMENT.video}
            className="aspect-[4/3] md:h-[520px] md:aspect-auto"
          />
        </div>

        {/* RIGHT: indigo panel (~38%), overlaps video on desktop */}
        <div
          className={cn(
            "relative z-10 w-full bg-brand text-white",
            "px-10 py-[50px] md:w-[38%] md:max-w-[440px] md:-ml-[60px]",
          )}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.12em] text-white/85">
            {COMMITMENT.eyebrow}
          </p>
          <h3 className="mb-4 font-heading text-[20px] md:text-[30px] font-bold text-white">
            {COMMITMENT.title}
          </h3>
          <p className="text-[16px] leading-[1.8] text-white/95">
            {COMMITMENT.body}
          </p>
          <a
            href={COMMITMENT.cta.href}
            className={cn(
              "mt-6 inline-block rounded-none border border-white/80 bg-transparent",
              "px-[30px] py-3 tracking-[2px] text-white transition-colors hover:bg-white/15",
            )}
          >
            {COMMITMENT.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
