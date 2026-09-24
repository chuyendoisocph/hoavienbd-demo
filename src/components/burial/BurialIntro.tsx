import { BURIAL_INTRO } from "@/lib/burial-content";
import { InlineReadMore } from "@/components/InlineReadMore";

export function BurialIntro() {
  return (
    <section className="min-h-[541px] bg-white px-6 py-16 min-[980px]:px-0 min-[980px]:pb-[75px] min-[980px]:pt-[76px]">
      <div className="mx-auto w-full min-[980px]:w-[85%] min-[980px]:max-w-[1080px]">
        <p className="mx-auto max-w-[800px] pb-[10px] text-center text-[15px] font-normal uppercase leading-[30px] tracking-[0.12em] text-[#333] min-[980px]:text-[20px] min-[980px]:tracking-[0.12em]">
          {BURIAL_INTRO.eyebrow}
        </p>
        <h2
          className="mb-[30px] mt-[2px] pb-[10px] text-center font-heading text-[30px] font-medium leading-[1.2] text-brand min-[980px]:text-[40px] min-[980px]:leading-[60px]"
        >
          {BURIAL_INTRO.title}
        </h2>
        <p className="text-left text-[16px] leading-[1.8] text-black min-[980px]:px-[17px] min-[980px]:pr-[38px] min-[980px]:text-[18px] min-[980px]:leading-[27px]">
          {BURIAL_INTRO.body}
        </p>
        <InlineReadMore
          id="burial-intro-details"
          className="px-4 min-[980px]:px-5"
          contentClassName="text-left text-[16px] leading-[1.8] text-black min-[980px]:text-[18px] min-[980px]:leading-[27px]"
          buttonClassName="text-[18px] leading-[27px]"
        >
          {BURIAL_INTRO.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </InlineReadMore>
      </div>
    </section>
  );
}
