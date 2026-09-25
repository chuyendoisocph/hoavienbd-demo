import Image from "next/image";
import { PREPLAN_CARDS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PreplanCards() {
  return (
    <section className="bg-white">
      <div data-stagger className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 px-[15px] py-10 md:grid-cols-3 md:gap-12 md:px-6 md:py-[70px]">
        {PREPLAN_CARDS.map((card) => (
          <a key={card.title} href={card.href} className="group block">
            <div className="relative h-[150px] overflow-hidden md:aspect-video md:h-auto">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3
              className={cn(
                "font-heading font-medium text-heading leading-[1.2] mt-[18px]",
                "text-[20px] group-hover:text-brand transition-colors md:text-[28px]",
              )}
            >
              {card.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
