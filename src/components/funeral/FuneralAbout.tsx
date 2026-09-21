import Image from "next/image";
import { ABOUT } from "@/lib/funeral-content";

export function FuneralAbout() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-[90px]"
      style={{ backgroundImage: `url(${ABOUT.background})` }}
    >
      <div className="absolute inset-0 bg-[#1b2447]/80" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-heading text-[30px] font-medium text-white md:text-[44px]">
          {ABOUT.title}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.cards.map((card) => (
            <a key={card.title} href={card.href} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, calc(100vw - 48px)"
                  className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 text-[20px] font-medium leading-snug text-white">
                {card.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
