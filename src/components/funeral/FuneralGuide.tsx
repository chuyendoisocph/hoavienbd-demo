import { GUIDE } from "@/lib/funeral-content";
import { PlusIcon } from "@/components/icons";

export function FuneralGuide() {
  return (
    <section className="bg-white">
      {/* Indigo band with overlapping banner image on the left */}
      <div className="relative bg-brand">
        <div className="mx-auto h-[90px] max-w-[1200px] px-6" />
        <div className="mx-auto max-w-[1200px] px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={GUIDE.bannerImage}
            alt={GUIDE.title}
            className="relative -mt-[150px] h-[300px] w-full max-w-[560px] rounded-sm object-cover shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-x-16 gap-y-12 px-6 py-[70px] lg:grid-cols-2">
        {/* Left: guide intro + READ MORE */}
        <div>
          <p className="text-[15px] leading-[1.9] text-[#666]">{GUIDE.body}</p>
          <div className="mt-8 flex justify-end">
            <a
              href={GUIDE.cta.href}
              className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[2px] text-brand-link"
            >
              {GUIDE.cta.label}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                <PlusIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Right: 5 things to consider */}
        <div>
          <h2 className="text-[30px] font-medium leading-tight text-heading">
            {GUIDE.considerTitle}
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {GUIDE.considerItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 border-l-4 border-brand bg-white px-5 py-[16px] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)]"
              >
                <span className="text-[17px] font-medium text-brand">{item}</span>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            ))}
          </div>
          <a
            href={GUIDE.considerCta.href}
            className="mt-8 inline-flex items-center gap-3 text-[16px] uppercase tracking-[2px] text-brand-link"
          >
            {GUIDE.considerCta.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
              <PlusIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
