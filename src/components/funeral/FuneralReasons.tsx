import Image from "next/image";
import { CARE_TEAM, REASONS } from "@/lib/funeral-content";
import { PlusIcon } from "@/components/icons";

export function FuneralReasons() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-x-16 gap-y-12 px-6 lg:grid-cols-2">
        {/* Left: 6 Reasons */}
        <div>
          <h2 className="font-heading text-[44px] font-medium leading-tight text-brand md:text-[52px]">
            {REASONS.title}
          </h2>
          <p className="mt-2 text-[18px] text-[#666]">{REASONS.subtitle}</p>

          <div className="mt-10 flex flex-col gap-5">
            {REASONS.items.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 border-l-4 border-brand bg-white px-5 py-[18px] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)]"
              >
                <span className="text-[17px] font-medium leading-[1.3] text-brand">
                  {item}
                </span>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: care team */}
        <div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-sm shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)]">
            <Image
              src={CARE_TEAM.image}
              alt={CARE_TEAM.title}
              fill
              sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
              className="object-cover object-center"
            />
          </div>
          <h2 className="mt-10 font-heading text-[40px] font-medium leading-tight text-brand md:text-[48px]">
            {CARE_TEAM.title}
          </h2>
          <p className="mt-4 text-[22px] leading-snug text-heading">
            {CARE_TEAM.subtitle}
          </p>
          <p className="mt-6 text-[15px] leading-[1.9] text-[#666]">{CARE_TEAM.body}</p>
          <a
            href={CARE_TEAM.cta.href}
            className="mt-8 inline-block rounded-none border border-brand px-[30px] py-[14px] text-[16px] text-brand transition-colors hover:bg-brand/5"
          >
            {CARE_TEAM.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
