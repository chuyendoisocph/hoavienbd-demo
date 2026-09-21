import { PRIVACY_HERO } from "@/lib/privacy-content";

// Nirvana "Policies" hero: photo blended (overlay) onto a purple gradient.
export function PrivacyHero() {
  return (
    <section
      className="relative mt-16 flex h-[244px] items-center justify-center bg-cover bg-center bg-blend-overlay md:h-[272px] min-[980px]:mt-[75px]"
      style={{
        backgroundImage: `url(${PRIVACY_HERO.background}), linear-gradient(180deg, #474ab6 0%, #9271f6 100%)`,
      }}
    >
      <h1 className="px-[15px] pb-[10px] text-center font-heading text-[40px] font-semibold leading-[1.15] text-white md:text-[52px] md:leading-[1.3]">
        {PRIVACY_HERO.title}
      </h1>
    </section>
  );
}
