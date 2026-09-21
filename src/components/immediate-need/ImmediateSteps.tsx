import { PASSING_STEPS } from "@/lib/immediate-content";
import { PlusIcon } from "@/components/icons";

export function ImmediateSteps() {
  return (
    <section className="bg-white pb-[80px] pt-[70px]">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-[30px] font-medium leading-[1.2] md:leading-tight text-brand md:text-[44px]">
          {PASSING_STEPS.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.8] text-[#666]">
          {PASSING_STEPS.intro}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {PASSING_STEPS.steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="grid h-[100px] w-[100px] place-items-center overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={step.icon} alt="" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-5 font-heading text-[16px] font-bold leading-snug text-brand">
              {step.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#666]">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={PASSING_STEPS.cta.href}
          className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[2px] text-brand-link"
        >
          {PASSING_STEPS.cta.label}
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
            <PlusIcon className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
