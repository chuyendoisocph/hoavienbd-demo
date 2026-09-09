"use client";

import { useState } from "react";
import { PLOT_TYPES, PLOT_TYPES_HEADING, type PlotType } from "@/lib/burial-content";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function BurialPlotTypes() {
  // Track active carousel index per plot, keyed by plot index.
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
    <section className="py-[70px]">
      {/* Heading */}
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-3 text-[14px] uppercase tracking-[3px] text-[#888]">
          {PLOT_TYPES_HEADING.eyebrow}
        </p>
        <h2 className="font-heading text-[52px] font-medium leading-tight tracking-[2px] text-brand">
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

      {/* Row 2 — indigo background, white text */}
      <div className="bg-brand">
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
    </section>
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
          "mb-3 text-center text-[14px] uppercase tracking-[3px]",
          dark ? "text-white/85" : "text-[#888]",
        )}
      >
        {plot.eyebrow}
      </p>
      <h3
        className={cn(
          "mb-4 text-center font-heading text-[25px] font-bold",
          dark ? "text-white" : "text-brand",
        )}
      >
        {plot.title}
      </h3>
      <p
        className={cn(
          "text-[15px] leading-[1.8]",
          dark ? "text-white/95" : "text-[#666]",
        )}
      >
        {plot.body}
      </p>

      <div className="mt-6 flex flex-col items-center gap-5">
        {plot.buttons.map((button) =>
          button.label === "TÌM HIỂU THÊM" ? (
            <a
              key={button.label}
              href={button.href}
              className={cn(
                "inline-flex items-center gap-3 text-[14px] uppercase tracking-[2px]",
                dark ? "text-white" : "text-brand-link",
              )}
            >
              {button.label}
              <span
                className={cn(
                  "inline-flex h-7 w-7 items-center justify-center rounded-full border",
                  dark ? "border-white" : "border-brand-link",
                )}
              >
                <PlusIcon className="text-[14px]" />
              </span>
            </a>
          ) : (
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
          ),
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
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
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
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
            aria-label={`Show image ${i + 1}`}
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
