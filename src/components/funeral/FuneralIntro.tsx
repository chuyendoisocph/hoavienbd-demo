import { FUNERAL_INTRO, INTRO_WATCH } from "@/lib/funeral-content";
import { CheckIcon } from "@/components/icons";
import { InlineReadMore } from "@/components/InlineReadMore";
import { YoutubeWatch } from "@/components/funeral/YoutubeWatch";

export function FuneralIntro() {
  return (
    <section className="bg-white pt-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-6">
        <p className="mb-3 text-center text-[15px] font-normal uppercase tracking-[0.12em] text-[#6b6b6b]">
          {FUNERAL_INTRO.eyebrow}
        </p>
        <h2
          className="mb-12 text-center font-heading font-medium leading-[1.2] text-brand"
          style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
        >
          {FUNERAL_INTRO.title}
        </h2>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left: body + consultation CTA */}
          <div>
            <p className="text-left text-[16px] leading-[1.9] text-[#666]">
              {FUNERAL_INTRO.body}
            </p>
            <InlineReadMore
              id="funeral-intro-details"
              contentClassName="text-[16px] leading-[1.9] text-[#666]"
            >
              {FUNERAL_INTRO.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </InlineReadMore>
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
        <p className="mb-[30px] text-[15px] uppercase tracking-[0.12em] text-[#6b6b6b]">
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
