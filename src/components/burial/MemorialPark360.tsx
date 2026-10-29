"use client";

import Link from "next/link";
import { MEMORIAL_360 } from "@/lib/burial-content";
import { VideoFeature } from "@/components/VideoFeature";

export function MemorialPark360() {
  return (
    <section className="bg-[#4f6aa6] py-[70px]">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="text-center text-white">
          <p className="mb-[10px] text-[14px] uppercase tracking-[0.12em] text-white/90">
            {MEMORIAL_360.eyebrow}
          </p>
          <h3 className="font-heading text-[20px] md:text-[30px] font-bold text-white">
            {MEMORIAL_360.title}
          </h3>
          <p className="mb-[30px] font-heading text-[22px] text-white">
            {MEMORIAL_360.subtitle}
          </p>
        </div>
        <VideoFeature
          poster={MEMORIAL_360.poster}
          video={MEMORIAL_360.video}
          videoMobile={MEMORIAL_360.videoMobile}
          className="mx-auto aspect-[16/8] max-w-[1180px]"
        />
        <div className="mt-8 text-center">
          <Link
            href="/tham-quan-360"
            className="inline-flex min-h-12 items-center justify-center border border-white px-6 py-3 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-[#4f6aa6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Khám phá tour ảnh 360°
          </Link>
        </div>
      </div>
    </section>
  );
}
