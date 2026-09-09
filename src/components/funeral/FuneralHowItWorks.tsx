import { HOW_IT_WORKS } from "@/lib/funeral-content";

export function FuneralHowItWorks() {
  return (
    <section className="bg-white pb-[90px] pt-[40px]">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="font-heading text-[44px] font-medium leading-tight text-brand md:text-[52px]">
          {HOW_IT_WORKS.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.8] text-[#666]">
          {HOW_IT_WORKS.intro}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1140px] grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            {/* connector line (desktop) */}
            {i < HOW_IT_WORKS.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[calc(50%+55px)] top-[55px] hidden h-px w-[calc(100%-110px)] bg-brand/25 lg:block"
              />
            )}
            <div className="grid h-[110px] w-[110px] place-items-center rounded-full border border-brand/20 bg-brand/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={step.icon} alt="" className="h-[56px] w-[56px] object-contain" />
            </div>
            <h3 className="mt-6 font-heading text-[18px] font-bold text-brand">
              {step.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
