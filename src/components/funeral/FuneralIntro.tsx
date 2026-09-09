import { FUNERAL_INTRO, INTRO_WATCH } from "@/lib/funeral-content";
import { PlusIcon, CheckIcon } from "@/components/icons";
import { YoutubeWatch } from "@/components/funeral/YoutubeWatch";

export function FuneralIntro() {
  return (
    <section className="bg-white pt-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-6">
        <p className="mb-3 text-center text-[15px] font-normal uppercase tracking-[6px] text-[#999]">
          {FUNERAL_INTRO.eyebrow}
        </p>
        <h2
          className="mb-12 text-center font-heading font-medium leading-[1.2] text-brand"
          style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
        >
          {FUNERAL_INTRO.title}
        </h2>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left: body + READ MORE */}
          <div>
            <p className="text-left text-[15px] leading-[1.9] text-[#666]">
              {FUNERAL_INTRO.body}
            </p>
            <div className="mt-[30px] flex justify-end">
              <a
                href={FUNERAL_INTRO.cta.href}
                className="inline-flex items-center gap-3 text-[18px] font-medium tracking-[2px] text-brand-link"
              >
                {FUNERAL_INTRO.cta.label}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                  <PlusIcon className="h-[14px] w-[14px]" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: service checklist */}
          <ul className="flex flex-col gap-6">
            {FUNERAL_INTRO.services.map((service) => (
              <li key={service} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[18px] leading-snug text-[#555]">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* WATCH video */}
      <div className="px-6 pb-[90px] pt-[70px] text-center">
        <p className="mb-[30px] text-[15px] uppercase tracking-[6px] text-[#999]">
          XEM VIDEO
        </p>
        <YoutubeWatch
          youtubeId={INTRO_WATCH.youtubeId}
          poster={INTRO_WATCH.poster}
          className="mx-auto aspect-[16/7] max-w-[1180px]"
        />
      </div>
    </section>
  );
}
