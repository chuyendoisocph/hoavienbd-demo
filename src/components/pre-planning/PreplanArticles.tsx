import Image from "next/image";
import { PREPLAN_ARTICLES } from "@/lib/preplanning-content";
import { cn } from "@/lib/utils";

export function PreplanArticles() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-[70px]">
        <div className="text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[4px] text-brand-link">
            {PREPLAN_ARTICLES.eyebrow}
          </p>
          <h2 className="mb-[40px] mt-3 font-heading text-[40px] font-medium text-brand md:text-[52px]">
            {PREPLAN_ARTICLES.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
          {PREPLAN_ARTICLES.cards.map((card) => (
            <a key={card.title} href={card.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                />
              </div>
              <h3
                className={cn(
                  "font-heading mt-4 text-center text-[20px] md:text-[22px] font-medium leading-[1.3] text-[#333] transition-colors",
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
