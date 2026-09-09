import { QUOTE } from "@/lib/content";

export function QuoteSection() {
  return (
    <section className="bg-section-light pt-[51px] pb-[85px] lg:bg-transparent">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col lg:relative lg:block lg:h-[408px]">
        <blockquote className="relative z-10 order-1 mx-auto mb-[10vw] w-full bg-[#4453c4] px-[10%] py-[40px] text-left text-white shadow-[-41px_45px_180px_0_rgba(0,0,0,0.52)] lg:absolute lg:top-[-12vw] lg:left-[calc((100vw-100%)/-2)] lg:mb-0 lg:h-[408px] lg:w-[50.4vw] lg:pt-[80px] lg:pr-[60px] lg:pb-[80px] lg:pl-[7vw]">
          <p className="border-l-[5px] border-[#2ea3f2] pl-[20px] font-heading text-[18px] leading-[1.8] font-semibold tracking-[1px] italic sm:leading-[36px] lg:mt-[20px] lg:mb-[30px]">
            {"“"}
            {QUOTE.text}
            {"”"}
          </p>
        </blockquote>

        <div
          aria-hidden="true"
          className="order-2 h-[260px] w-full bg-cover bg-center sm:h-[340px] lg:h-[408px]"
          style={{ backgroundImage: `url(${QUOTE.background})` }}
        />
      </div>
    </section>
  );
}
