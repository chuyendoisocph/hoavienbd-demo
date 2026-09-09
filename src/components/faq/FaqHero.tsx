import { FAQ_HERO } from "@/lib/faq-content";

export function FaqHero() {
  return (
    <section className="relative h-[360px] overflow-hidden bg-black md:h-[440px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FAQ_HERO.background}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="font-heading font-medium leading-none text-white"
          style={{ fontSize: "clamp(40px, 7vw, 80px)", textShadow: "8px 8px 8px #242424" }}
        >
          {FAQ_HERO.title}
        </h1>
        <p className="mt-5 max-w-[640px] text-[17px] leading-snug text-white/90">
          {FAQ_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
