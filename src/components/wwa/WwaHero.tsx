import Image from "next/image";
import { WWA_HERO } from "@/lib/wwa-content";

export function WwaHero() {
  return (
    <section className="relative h-[460px] overflow-hidden bg-black md:h-[600px]">
      <Image
        src={WWA_HERO.image}
        alt=""
        fill
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1
          className="text-center font-heading font-medium text-white"
          style={{ fontSize: "clamp(40px, 8vw, 90px)", textShadow: "8px 8px 8px #242424" }}
        >
          {WWA_HERO.title}
        </h1>
      </div>
    </section>
  );
}
