"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FAMILY_PLOT,
  PLOT_TYPES,
  PLOT_TYPES_HEADING,
  type PlotType,
} from "@/lib/burial-content";
import { InlineReadMore } from "@/components/InlineReadMore";
import { cn } from "@/lib/utils";

export function BurialPlotTypes() {
  // Track active carousel index per plot, keyed by plot index.
  const [activeIndices, setActiveIndices] = useState<number[]>(() =>
    PLOT_TYPES.map(() => 0),
  );

  const setActive = (plotIndex: number, imageIndex: number) => {
    setActiveIndices((prev) => {
      const next = [...prev];
      next[plotIndex] = imageIndex;
      return next;
    });
  };

  const lightPlots = PLOT_TYPES.slice(0, 2);
  const darkPlots = PLOT_TYPES.slice(2, 4);

  return (
    <section className="bg-white py-[70px]">
      {/* Heading */}
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-3 text-[14px] uppercase tracking-[0.12em] text-[#888]">
          {PLOT_TYPES_HEADING.eyebrow}
        </p>
        <h2 className="font-heading text-[30px] md:text-[52px] font-medium leading-[1.2] md:leading-tight text-brand">
          {PLOT_TYPES_HEADING.title}
        </h2>
      </div>

      {/* Row 1 — white background */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[60px] px-6 py-[70px] lg:grid-cols-2">
        {lightPlots.map((plot, i) => (
          <PlotBlock
            key={plot.title}
            plot={plot}
            activeIndex={activeIndices[i]}
            onSelect={(imageIndex) => setActive(i, imageIndex)}
          />
        ))}
      </div>

      {/* Row 2 — two indigo cards on a white section background */}
      <div className="bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[60px] px-6 py-[70px] lg:grid-cols-2">
          {darkPlots.map((plot, i) => (
            <PlotBlock
              key={plot.title}
              plot={plot}
              activeIndex={activeIndices[i + 2]}
              onSelect={(imageIndex) => setActive(i + 2, imageIndex)}
            />
          ))}
        </div>
      </div>

      <FamilyPlotFeature />
    </section>
  );
}

function FamilyPlotFeature() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="khu-mo-gia-toc" className="scroll-mt-24 bg-[#e8eef9] px-6 py-[80px] md:py-[96px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-10 max-w-[780px] text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-brand/70">
            {FAMILY_PLOT.category}
          </p>
          <h2 className="font-heading text-[36px] font-medium leading-[1.15] text-brand md:text-[52px]">
            {FAMILY_PLOT.title}
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-[1.7] text-[#3f4a77] md:text-[19px]">
            {FAMILY_PLOT.tagline}
          </p>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand/10 md:aspect-[16/8]">
          {FAMILY_PLOT.images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1247px) calc(100vw - 48px), 1200px"
              className={cn(
                "object-cover transition-opacity duration-500",
                image.src.endsWith("/khu-gia-toc.jpg")
                  ? "object-[center_35%]"
                  : "object-center",
                index === activeImage ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>

        <div className="flex h-12 items-center justify-center gap-2 border-x border-brand/15 bg-white">
          {FAMILY_PLOT.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Hiển thị hình ${index + 1}: ${FAMILY_PLOT.title}`}
              aria-current={index === activeImage}
              onClick={() => setActiveImage(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                index === activeImage ? "bg-brand" : "bg-brand/30",
              )}
            />
          ))}
        </div>

        <div className="grid border-x border-b border-brand/15 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between px-6 py-8 sm:px-9 lg:px-10 lg:py-10">
            <p className="max-w-[54ch] text-[16px] leading-[1.8] text-[#666]">
              {FAMILY_PLOT.body}
            </p>
            <a
              href={FAMILY_PLOT.cta.href}
              className="mt-7 inline-flex w-fit items-center justify-center border border-brand bg-brand px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#3544b8] active:translate-y-px"
            >
              {FAMILY_PLOT.cta.label}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-px border-t border-brand/15 bg-brand/15 sm:grid-cols-2 lg:border-l lg:border-t-0">
            {FAMILY_PLOT.facts.map((fact) => (
              <div key={fact.label} className="flex min-h-[126px] flex-col justify-center bg-white px-6 py-5 sm:px-8">
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#888]">
                  {fact.label}
                </p>
                <p className="mt-2 text-[17px] font-semibold leading-[1.45] text-brand">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PlotBlockProps {
  plot: PlotType;
  activeIndex: number;
  onSelect: (imageIndex: number) => void;
}

function PlotBlock({ plot, activeIndex, onSelect }: PlotBlockProps) {
  const { dark } = plot;

  const carousel = (
    <Carousel
      images={plot.images}
      activeIndex={activeIndex}
      onSelect={onSelect}
      dark={dark}
      title={plot.title}
    />
  );

  const text = (
    <div
      className={cn(
        "flex flex-col p-10",
        !dark && "shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]",
      )}
    >
      <p
        className={cn(
          "mb-3 text-center text-[14px] uppercase tracking-[0.12em]",
          dark ? "text-white/85" : "text-[#888]",
        )}
      >
        {plot.eyebrow}
      </p>
      <h3
        className={cn(
          "mb-4 text-center font-heading text-[20px] font-bold md:text-[25px]",
          dark ? "text-white" : "text-brand",
        )}
      >
        {plot.title}
      </h3>
      <p
        className={cn(
          "text-[16px] leading-[1.8]",
          dark ? "text-white/95" : "text-[#666]",
        )}
      >
        {plot.body}
      </p>

      <InlineReadMore
        id={`plot-details-${plot.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        align="center"
        theme={dark ? "dark" : "light"}
        contentClassName={cn("text-[16px] leading-[1.8]", dark ? "text-white/95" : "text-[#666]")}
        buttonClassName="text-[14px]"
      >
        {plot.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </InlineReadMore>

      <div className="mt-5 flex flex-col items-center gap-5">
        {plot.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={cn(
                "inline-block rounded-none border px-[34px] py-[14px] text-[14px] uppercase tracking-[2px] transition-colors",
                dark
                  ? "border-white text-white hover:bg-white/10"
                  : "border-brand text-brand hover:bg-brand/5",
              )}
            >
              {button.label}
            </a>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col",
        dark && "bg-brand p-5 shadow-[0_16px_32px_-18px_rgba(32,45,112,0.65)]",
      )}
    >
      {plot.imageFirst ? (
        <>
          {carousel}
          {text}
        </>
      ) : (
        <>
          {text}
          {carousel}
        </>
      )}
    </div>
  );
}

interface CarouselProps {
  images: string[];
  activeIndex: number;
  onSelect: (imageIndex: number) => void;
  dark: boolean;
  title: string;
}

function Carousel({ images, activeIndex, onSelect, dark, title }: CarouselProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eee8da]">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "transition-opacity duration-500",
              src.endsWith("/long-phung.jpg") ? "object-contain" : "object-cover",
              i === activeIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Hiển thị hình ${i + 1}: ${title}`}
            aria-current={i === activeIndex}
            onClick={() => onSelect(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              i === activeIndex
                ? dark
                  ? "bg-white"
                  : "bg-brand"
                : dark
                  ? "bg-white/40"
                  : "bg-brand/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}
