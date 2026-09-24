import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { BURIAL_HERO } from "@/lib/burial-content";

export function BurialHero() {
  return (
    <section className="relative h-[440px] overflow-hidden bg-black md:h-[765px]">
      <Image
        src={BURIAL_HERO.image}
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <HeroVideo
        mobileSrc={BURIAL_HERO.videoMobile}
        desktopSrc={BURIAL_HERO.video}
        poster={BURIAL_HERO.image}
        className="absolute inset-0 z-0 h-full w-full object-cover motion-reduce:hidden"
      />

      <div className="absolute inset-0 z-[1] bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          className="font-heading font-medium leading-[1.15] text-white"
          style={{
            fontSize: "clamp(40px, 9vw, 100px)",
            textShadow: "8px 8px 8px #242424",
          }}
        >
          {BURIAL_HERO.title}
        </h1>
        <p
          className="font-heading mt-[10px] font-normal text-white"
          style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            textShadow: "4px 4px 8px #242424",
          }}
        >
          {BURIAL_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
