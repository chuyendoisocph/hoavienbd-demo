import { CONTACT_HERO } from "@/lib/contact-content";

export function ContactHero() {
  return (
    <section className="relative h-[420px] overflow-hidden bg-black md:h-[520px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CONTACT_HERO.background}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="font-heading font-medium leading-[1.15] text-white"
          style={{ fontSize: "clamp(40px, 8vw, 90px)", textShadow: "8px 8px 8px #242424" }}
        >
          {CONTACT_HERO.title}
        </h1>
        <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-white/90">
          {CONTACT_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
