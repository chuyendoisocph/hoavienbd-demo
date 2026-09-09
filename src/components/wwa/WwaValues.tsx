import { WWA_VALUES } from "@/lib/wwa-content";
import { PlusIcon } from "@/components/icons";

export function WwaValues() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-[90px]"
      style={{ backgroundImage: `url(${WWA_VALUES.background})` }}
    >
      <div className="absolute inset-0 bg-[#1b2447]/80" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {WWA_VALUES.cards.map((card) => (
          <div key={card.title} className="text-center text-white">
            <p
              className="font-heading font-bold leading-none text-white/30"
              style={{ fontSize: "64px" }}
            >
              {card.number}
            </p>
            <h3 className="mt-4 font-heading text-[26px] font-medium text-white">{card.title}</h3>
            <p className="mx-auto mt-4 max-w-[320px] text-[15px] leading-[1.8] text-white/90">
              {card.body}
            </p>
            <a
              href={card.cta.href}
              className="mt-6 inline-flex items-center gap-3 text-[14px] uppercase tracking-[2px] text-white"
            >
              {card.cta.label}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white">
                <PlusIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
