import Image from "next/image";
import { CREMATION_HERO } from "@/lib/cremation-content";

export function CremationHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[565px]">
      <Image
        src={CREMATION_HERO.background}
        alt={CREMATION_HERO.title}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/30 to-black/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="font-heading font-medium text-white"
          style={{ fontSize: "clamp(40px,9vw,100px)", textShadow: "8px 8px 8px #242424" }}
        >
          {CREMATION_HERO.title}
        </h1>
        <p
          className="mt-[10px] font-heading font-normal text-white"
          style={{ fontSize: "clamp(20px,3vw,36px)", textShadow: "4px 4px 8px #242424" }}
        >
          {CREMATION_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
