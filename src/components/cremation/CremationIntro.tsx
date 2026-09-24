import Image from "next/image";
import { CREMATION_INTRO } from "@/lib/cremation-content";
import { InlineReadMore } from "@/components/InlineReadMore";

export function CremationIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-[70px] lg:grid-cols-[58%_42%]">
        <div className="relative aspect-[16/10] overflow-hidden shadow-[0_24px_55px_-28px_rgba(20,36,68,0.5)] lg:aspect-[4/3]">
          <Image
            src={CREMATION_INTRO.image}
            alt={CREMATION_INTRO.imageAlt}
            fill
            sizes="(min-width: 1024px) 650px, calc(100vw - 48px)"
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT: heading, body, read more */}
        <div>
          <h2 className="mb-6 font-heading font-medium leading-[1.2] md:leading-[1.25] text-brand text-[30px] md:text-[clamp(28px,3.5vw,36px)]">
            {CREMATION_INTRO.title}
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#666]">
            {CREMATION_INTRO.body}
          </p>
          <InlineReadMore
            id="cremation-intro-details"
            align="start"
            contentClassName="text-[16px] leading-[1.9] text-[#666]"
            buttonClassName="text-[18px]"
          >
            {CREMATION_INTRO.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </InlineReadMore>
        </div>
      </div>
    </section>
  );
}
