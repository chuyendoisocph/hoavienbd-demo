import { LOVED_ONE } from "@/lib/immediate-content";
import { PlusIcon } from "@/components/icons";

export function ImmediateLoved() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2">
        {/* Left: image */}
        <div className="lg:sticky lg:top-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOVED_ONE.image}
            alt={LOVED_ONE.title}
            className="h-full w-full rounded-sm object-cover shadow-[0_24px_50px_-28px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Right: text */}
        <div>
          <h2 className="font-heading text-[30px] font-medium leading-tight text-brand md:text-[38px]">
            {LOVED_ONE.title}
          </h2>
          {LOVED_ONE.body.map((para) => (
            <p key={para.slice(0, 24)} className="mt-5 text-[15px] leading-[1.9] text-[#666]">
              {para}
            </p>
          ))}

          <p className="mt-8 text-[20px] font-medium text-heading">{LOVED_ONE.prompt}</p>
          <a
            href={LOVED_ONE.cta.href}
            className="mt-4 inline-flex items-center gap-3 text-[15px] uppercase tracking-[2px] text-brand-link"
          >
            {LOVED_ONE.cta.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
              <PlusIcon className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* What to do when someone dies */}
          <h3 className="mt-12 font-heading text-[26px] font-medium text-brand">
            {LOVED_ONE.deathTitle}
          </h3>
          <ol className="mt-6 flex flex-col gap-4">
            {LOVED_ONE.deathSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-[15px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-[16px] leading-snug text-[#444]">{step}</span>
              </li>
            ))}
          </ol>
          <a
            href={LOVED_ONE.deathCta.href}
            className="mt-8 inline-flex items-center gap-3 text-[15px] uppercase tracking-[2px] text-brand-link"
          >
            {LOVED_ONE.deathCta.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
              <PlusIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
