"use client";

import { MEMORIAL_360 } from "@/lib/burial-content";
import { VideoFeature } from "@/components/VideoFeature";

export function MemorialPark360() {
  return (
    <section className="bg-[#8CA3D1] py-[70px]">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="text-center text-white">
          <p className="mb-[10px] text-[14px] uppercase tracking-[6px] text-white/90">
            {MEMORIAL_360.eyebrow}
          </p>
          <h3 className="font-heading text-[30px] font-bold text-white">
            {MEMORIAL_360.title}
          </h3>
          <p className="mb-[30px] font-heading text-[22px] text-white">
            {MEMORIAL_360.subtitle}
          </p>
        </div>
        <VideoFeature
          poster={MEMORIAL_360.poster}
          video={MEMORIAL_360.video}
          className="mx-auto aspect-[16/8] max-w-[1180px]"
        />
      </div>
    </section>
  );
}
