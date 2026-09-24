"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CAROUSEL_SLIDES, CULTURE } from "@/lib/content";
import { InlineReadMore } from "@/components/InlineReadMore";

const ROTATE_INTERVAL = 5000;

function CultureBody() {
  return <p className="text-[16px] leading-[1.7] text-[#666]">{CULTURE.body}</p>;
}

export function CultureSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
    // Re-create the timer whenever the active slide changes so a dot click
    // resets the 5s countdown.
  }, [active]);

  return (
    <section className="min-h-[1043px] bg-white lg:min-h-[547px]">
      <div className="mx-auto grid max-w-[1282px] items-center gap-8 px-[15px] py-[30px] lg:grid-cols-[42%_1fr] lg:gap-[80px] lg:py-[27px]">
        {/* LEFT: auto-rotating carousel card */}
        <div>
          <div className="relative mx-auto h-[410px] w-full max-w-[410px] overflow-hidden lg:mx-8">
            {CAROUSEL_SLIDES.map((slide, index) => (
              <div
                key={slide.title + index}
                inert={index !== active}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  index === active ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                aria-hidden={index === active ? undefined : true}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1024px) 410px, 35vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c2877] via-[#0a0c2899] to-[#0a0c28cc]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-[30px] py-10 text-center text-white">
                  <p className="text-[20px] md:text-[24px] font-bold leading-[1.3] md:leading-snug text-white">{slide.title}</p>
                  {slide.subtitle ? (
                    <p className="mt-2 text-[16px] text-white">{slide.subtitle}</p>
                  ) : null}
                  <p className="mt-4 text-[16px] leading-relaxed text-white/90">{slide.body}</p>
                  {slide.cta ? (
                    <a
                      href={slide.cta.href}
                      tabIndex={index === active ? undefined : -1}
                      className="mt-6 inline-block border border-white/80 px-[26px] py-[10px] text-[14px] tracking-[1px] text-white transition-colors duration-200 hover:bg-white/15"
                    >
                      {slide.cta.label}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-1">
            {CAROUSEL_SLIDES.map((slide, index) => (
              <button
                key={slide.title + index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Chuyển đến nội dung ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                className="grid h-6 w-6 place-items-center rounded-full"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === active ? "w-5 bg-brand" : "w-2 bg-black/20",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: static text */}
        <div className="text-center lg:text-left">
          <p className="text-[15px] font-normal uppercase tracking-[0.12em] text-[#666]">
            {CULTURE.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[30px] font-medium leading-[1.2] md:leading-[1.15] text-brand md:text-[52px]">
            {CULTURE.title}
          </h2>
          <div className="mt-6">
            <CultureBody />
          </div>
          <InlineReadMore
            id="culture-details"
            align="start"
            contentClassName="text-[16px] leading-[1.7] text-[#666]"
          >
            {CULTURE.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </InlineReadMore>
        </div>
      </div>
    </section>
  );
}
