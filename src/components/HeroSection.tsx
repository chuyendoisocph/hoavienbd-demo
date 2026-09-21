import { HeroVideo } from "@/components/HeroVideo";
import { PhoneIcon } from "@/components/icons";
import { CARELINE, HERO } from "@/lib/content";

export function HeroSection() {
  return (
    <section>
      <div className="relative h-[414px] overflow-hidden bg-black md:h-[558px]">
        {/* The still image remains visible when reduced motion disables the video. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <HeroVideo
          mobileSrc={HERO.videoMobile}
          desktopSrc={HERO.video}
          poster={HERO.image}
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="whitespace-nowrap font-heading text-[8.2vw] leading-[1.15] font-bold text-white [text-shadow:8px_8px_8px_#242424] md:text-[clamp(60px,9vw,100px)] md:leading-[1.2] md:font-medium">
            {HERO.title}
          </h1>
          <p className="font-heading text-[18px] leading-[1.4] font-medium tracking-[0.02em] text-white [text-shadow:4px_4px_8px_#242424] md:text-[40px] md:leading-[52px] md:tracking-[3px]">
            {HERO.subtitle}
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-9 h-[60px] md:h-[78px]">
        <a
          href={`tel:${CARELINE.replace(/[^0-9]/g, "")}`}
          className="flex h-full w-[92%] items-center justify-center gap-2 rounded-r-[70px] bg-[linear-gradient(90deg,rgba(124,180,223,0.92)_0%,rgba(67,142,201,0.96)_48%,rgba(28,111,179,1)_100%)] px-4 text-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-[filter] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c6fb3] md:w-[48%] md:justify-end md:gap-3 md:pr-[6%] md:pl-6"
        >
          <PhoneIcon className="shrink-0 text-[15px] md:text-[18px]" aria-hidden="true" />
          <span className="whitespace-nowrap text-[14px] leading-none font-bold tracking-[0.12em] uppercase sm:text-[14px] md:text-[18px] md:tracking-[0.12em]">
            TỔNG ĐÀI: {CARELINE}
          </span>
        </a>
      </div>
    </section>
  );
}
