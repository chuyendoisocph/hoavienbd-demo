import { ADVANTAGES } from "@/lib/content";

type AdvantageCard = (typeof ADVANTAGES.cards)[number];

function AdvantageItem({ card }: { card: AdvantageCard }) {
  return (
    <article>
      <img
        src={card.icon}
        alt=""
        className="h-[88px] w-[88px] object-contain lg:h-[100px] lg:w-[100px]"
      />
      <div className="mt-5 lg:mt-[27.8px]">
        <h3 className="pb-2 text-[18px] font-bold leading-[27px] tracking-[1px] text-heading lg:pb-[10px]">
          {card.title}
        </h3>
        <p className="text-[16px] font-medium leading-[25px] tracking-[0.5px] text-[#666] lg:text-[18px] lg:leading-[27px] lg:tracking-[1px]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

export function AdvantagesSection() {
  const primaryCard = ADVANTAGES.cards[0];
  const middleCards = ADVANTAGES.cards.slice(1, 3);
  const finalCards = ADVANTAGES.cards.slice(3, 5);

  return (
    <section className="bg-[#F7F9FC] py-[50px] lg:py-[4vw]">
      <div className="mx-auto grid w-[calc(100%-48px)] max-w-[1080px] grid-cols-1 gap-[52px] lg:w-[80%] lg:grid-cols-2 lg:gap-[5.5%]">
        <div className="text-center lg:py-[28px] lg:text-left">
          <h2 className="font-heading pb-[10px] text-[30px] font-semibold leading-[1.2] text-heading lg:text-[52px] lg:leading-[78px]">
            {ADVANTAGES.title}
          </h2>
          <p className="mt-3 text-[18px] font-medium leading-[29px] tracking-[0.5px] text-[#666] lg:mt-0 lg:text-[25px] lg:leading-[37.5px] lg:tracking-[1px]">
            {ADVANTAGES.subtitle}
          </p>
          <a
            href={ADVANTAGES.cta.href}
            className="mt-6 inline-block rounded-none bg-[#4453C4] px-[30px] py-[18px] text-[16px] font-extrabold tracking-[2px] text-white shadow-[0_10px_20px_rgba(65,84,125,0.24)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4453C4] lg:mt-[27.8px] lg:text-[18px]"
          >
            {ADVANTAGES.cta.label}
          </a>
        </div>

        <div>
          {primaryCard ? (
            <div className="pb-[52px] lg:min-h-[330px] lg:py-[27.8px]">
              <AdvantageItem card={primaryCard} />
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-[52px] pb-[52px] lg:min-h-[355px] lg:grid-cols-2 lg:gap-[11.64%] lg:py-[27.8px]">
            {middleCards.map((card) => (
              <AdvantageItem key={card.title} card={card} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[52px] lg:min-h-[411px] lg:grid-cols-2 lg:gap-[11.64%] lg:py-[27.8px]">
            {finalCards.map((card) => (
              <AdvantageItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
