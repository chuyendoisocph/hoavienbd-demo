import Image from "next/image";
import { CREMATION_READ } from "@/lib/cremation-content";
import { cn } from "@/lib/utils";

export function CremationRead() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-[70px]">
        <div className="text-center">
          <p className="text-[15px] uppercase tracking-[0.12em] text-[#999]">
            {CREMATION_READ.eyebrow}
          </p>
          <h2 className="font-heading mb-[50px] text-[30px] md:text-[52px] font-medium text-brand">
            {CREMATION_READ.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
          {CREMATION_READ.cards.map((card) => (
            <a key={card.title} href={card.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 340px, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                />
              </div>
              <h3
                className={cn(
                  "font-heading mt-4 text-[20px] md:text-[22px] font-medium leading-[1.3] text-[#333] text-center transition-colors",
                  "group-hover:text-brand",
                )}
              >
                {card.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
