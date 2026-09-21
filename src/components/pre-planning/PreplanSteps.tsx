import { PREPLAN_STEPS } from "@/lib/preplanning-content";
import { PlusIcon } from "@/components/icons";

export function PreplanSteps() {
  return (
    <section className="bg-white pb-[70px]">
      <div className="mx-auto max-w-[1000px] px-6">
        <h2 className="text-center font-heading text-[30px] font-medium leading-tight text-brand md:text-[38px]">
          {PREPLAN_STEPS.title}
        </h2>
        {PREPLAN_STEPS.body.map((para) => (
          <p key={para.slice(0, 24)} className="mt-6 text-[16px] leading-[1.9] text-[#666]">
            {para}
          </p>
        ))}

        <ol className="mx-auto mt-10 flex max-w-[760px] flex-col gap-4">
          {PREPLAN_STEPS.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 border-l-4 border-brand bg-white px-5 py-[16px] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)]"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-[15px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[16px] leading-snug text-[#444]">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href={PREPLAN_STEPS.cta.href}
            className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[2px] text-brand-link"
          >
            {PREPLAN_STEPS.cta.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
              <PlusIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
