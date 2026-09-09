import { OTHERS_HERO } from "@/lib/others-content";

export function OthersHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[600px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={OTHERS_HERO.image}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-[1] bg-black/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          className="font-heading font-medium leading-none text-white"
          style={{ fontSize: "clamp(40px, 8vw, 90px)", textShadow: "8px 8px 8px #242424" }}
        >
          {OTHERS_HERO.title}
        </h1>
        <p
          className="mt-[10px] font-heading font-normal text-white"
          style={{ fontSize: "clamp(18px, 2.6vw, 32px)", textShadow: "4px 4px 8px #242424" }}
        >
          {OTHERS_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
