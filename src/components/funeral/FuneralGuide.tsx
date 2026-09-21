import Image from "next/image";
import { GUIDE } from "@/lib/funeral-content";
import { PlusIcon } from "@/components/icons";

export function FuneralGuide() {
  return (
    <section className="bg-white">
      {/* Indigo feature band with the image overlapping its lower edge on desktop */}
      <div className="relative bg-brand lg:h-[530px]">
        <div className="mx-auto grid max-w-[1612px] gap-10 px-6 py-16 lg:grid-cols-[minmax(0,722px)_minmax(0,1fr)] lg:gap-[82px] lg:py-0">
          <div className="relative aspect-[3/2] w-full overflow-hidden shadow-[0_18px_32px_-18px_rgba(0,0,0,0.45)] lg:mt-[106px] lg:h-[482px] lg:aspect-auto">
            <Image
              src={GUIDE.bannerImage}
              alt={GUIDE.title}
              fill
              sizes="(min-width: 1024px) 722px, calc(100vw - 48px)"
              className="object-cover object-center"
            />
          </div>
          <h2 className="max-w-[660px] self-start font-sans text-[30px] font-medium leading-[1.2] md:leading-[1.35] text-white sm:text-[44px] lg:mt-[128px] lg:text-[54px]">
            {GUIDE.title}
          </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1612px] grid-cols-1 items-start gap-x-[82px] gap-y-12 px-6 py-[70px] lg:grid-cols-[minmax(0,722px)_minmax(0,1fr)] lg:pb-[90px] lg:pt-[120px]">
        {/* Left: guide intro + READ MORE */}
        <div>
          <p className="text-[16px] leading-[1.9] text-[#666]">{GUIDE.body}</p>
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
