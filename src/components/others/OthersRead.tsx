import { OTHERS_READ } from "@/lib/others-content";
import { cn } from "@/lib/utils";

export function OthersRead() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-[70px]">
        <div className="text-center">
          <h2 className="font-heading mb-[50px] text-[40px] font-medium tracking-[2px] text-brand md:text-[52px]">
            {OTHERS_READ.eyebrow}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
          {OTHERS_READ.cards.map((card) => (
            <a key={card.title} href={card.href} className="group block">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                />
              </div>
              <h3
                className={cn(
                  "font-heading mt-4 text-center text-[22px] font-medium leading-[1.3] text-[#333] transition-colors",
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
