import { CREMATION_HERO } from "@/lib/cremation-content";

export function CremationHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[565px]">
      <img
        src={CREMATION_HERO.background}
        alt={CREMATION_HERO.title}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/35" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          className="font-heading font-medium text-white"
          style={{ fontSize: "clamp(44px,9vw,100px)", textShadow: "8px 8px 8px #242424" }}
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
