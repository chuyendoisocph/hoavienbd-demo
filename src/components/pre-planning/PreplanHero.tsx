import Image from "next/image";
import { PREPLAN_HERO } from "@/lib/preplanning-content";

export function PreplanHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[600px]">
      <Image
        src={PREPLAN_HERO.background}
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/35" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="font-heading font-medium leading-[1.15] text-white"
          style={{ fontSize: "clamp(40px, 8vw, 90px)", textShadow: "8px 8px 8px #242424" }}
        >
          {PREPLAN_HERO.title}
        </h1>
        <p
          className="mt-[10px] font-heading font-normal text-white"
          style={{ fontSize: "clamp(18px, 2.6vw, 32px)", textShadow: "4px 4px 8px #242424" }}
        >
          {PREPLAN_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
