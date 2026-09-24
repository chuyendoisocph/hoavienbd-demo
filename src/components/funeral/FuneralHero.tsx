import Image from "next/image";
import { FUNERAL_HERO } from "@/lib/funeral-content";

export function FuneralHero() {
  return (
    <section className="relative h-[520px] md:h-[765px] overflow-hidden bg-black">
      <Image
        src={FUNERAL_HERO.image}
        alt="Đội ngũ thực hiện nghi lễ tang lễ tại Hoa Viên Bình Dương"
        fill
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-[1] bg-black/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1
          className="font-heading font-medium leading-[1.15] text-white"
          style={{
            fontSize: "clamp(40px, 9vw, 100px)",
            textShadow: "8px 8px 8px #242424",
          }}
        >
          {FUNERAL_HERO.title}
        </h1>
        <p
          className="font-heading mt-[10px] font-normal text-white"
          style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            textShadow: "4px 4px 8px #242424",
          }}
        >
          {FUNERAL_HERO.subtitle}
        </p>
      </div>
    </section>
  );
}
