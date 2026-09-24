import { WWA_VALUES } from "@/lib/wwa-content";
import { InlineReadMore } from "@/components/InlineReadMore";

export function WwaValues() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-[90px]"
      style={{ backgroundImage: `url(${WWA_VALUES.background})` }}
    >
      <div className="absolute inset-0 bg-[#1b2447]/80" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {WWA_VALUES.cards.map((card, index) => (
          <div key={card.title} className="text-center text-white">
            <p
              className="font-heading font-bold leading-none text-white/30"
              style={{ fontSize: "64px" }}
            >
              {card.number}
            </p>
            <h3 className="mt-4 font-heading text-[20px] md:text-[26px] font-medium text-white">{card.title}</h3>
            <p className="mx-auto mt-4 max-w-[320px] text-[16px] leading-[1.8] text-white/90">
              {card.body}
            </p>
            <InlineReadMore
              id={`value-details-${index}`}
              align="center"
              theme="dark"
              contentClassName="text-[16px] leading-[1.8] text-white/90"
              buttonClassName="text-[14px]"
            >
              {card.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </InlineReadMore>
          </div>
        ))}
      </div>
    </section>
  );
}
