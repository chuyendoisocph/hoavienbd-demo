import { IMMEDIATE_HERO } from "@/lib/immediate-content";
import { PhoneIcon } from "@/components/icons";

export function ImmediateHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[600px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMMEDIATE_HERO.background}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="font-heading font-medium leading-none text-white"
          style={{ fontSize: "clamp(40px, 8vw, 90px)", textShadow: "8px 8px 8px #242424" }}
        >
          {IMMEDIATE_HERO.title}
        </h1>
        <p
          className="mt-[10px] font-heading font-normal text-white"
          style={{ fontSize: "clamp(18px, 2.6vw, 32px)", textShadow: "4px 4px 8px #242424" }}
        >
          {IMMEDIATE_HERO.subtitle}
        </p>
        <a
          href={IMMEDIATE_HERO.cta.href}
          className="mt-8 inline-flex items-center gap-3 rounded-none bg-brand px-[34px] py-[16px] text-[15px] font-medium tracking-[1px] text-white transition-colors hover:bg-brand/90"
        >
          <PhoneIcon className="text-[16px]" />
          {IMMEDIATE_HERO.cta.label}
        </a>
      </div>
    </section>
  );
}
