"use client";

import Image from "next/image";
import { useState } from "react";
import {
  COLUMBARIA_TYPES,
  COLUMBARIA_HEADING,
  type ColumbariaType,
} from "@/lib/cremation-content";
import { InlineReadMore } from "@/components/InlineReadMore";
import { cn } from "@/lib/utils";

function Carousel({
  images,
  title,
  dark,
  active,
  onSelect,
}: {
  images: string[];
  title: string;
  dark: boolean;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 576px, calc(100vw - 48px)"
            className={cn(
              "object-cover object-center transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-current={i === active}
              onClick={() => onSelect(i)}
              className="grid h-6 w-6 place-items-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === active
                    ? dark
                      ? "bg-white"
                      : "bg-brand"
                    : dark
                      ? "bg-white/40"
                      : "bg-black/20",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FeatureBlock({
  type,
  active,
  onSelect,
}: {
  type: ColumbariaType;
  active: number;
  onSelect: (index: number) => void;
}) {
  const { dark, imageLeft } = type;

  const carousel = (
    <div className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}>
      <Carousel
        images={type.images}
        title={type.title}
        dark={dark}
        active={active}
        onSelect={onSelect}
      />
    </div>
  );

  const text = (
    <div className={cn(imageLeft ? "lg:order-2" : "lg:order-1")}>
      <p
        className={cn(
          "text-[15px] uppercase tracking-[0.12em]",
          dark ? "text-white/85" : "text-[#6b6b6b]",
        )}
      >
        {type.eyebrow}
      </p>
      <h3
        className={cn(
          "font-heading mt-4 text-[20px] font-bold md:text-[25px]",
          dark ? "text-white" : "text-brand",
        )}
      >
        {type.title}
      </h3>
      <p
        className={cn(
          "mt-5 text-[16px] leading-[1.8]",
          dark ? "text-white" : "text-[#666]",
        )}
      >
        {type.body}
      </p>
      <InlineReadMore
        id={`columbaria-details-${type.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        align="start"
        theme={dark ? "dark" : "light"}
        contentClassName={cn("text-[16px] leading-[1.8]", dark ? "text-white/90" : "text-[#666]")}
        buttonClassName="text-[13px]"
      >
        {type.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </InlineReadMore>
      {type.buttons.length > 0 ? (
        <div className="mt-7 flex flex-wrap items-center gap-6">
          {type.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={cn(
                "inline-block rounded-none px-[30px] py-[14px] text-[13px] uppercase tracking-[2px]",
                dark ? "bg-white text-brand" : "bg-brand text-white",
              )}
            >
              {button.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );

  const row = (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
      {carousel}
      {text}
    </div>
  );

  if (dark) {
    return <div className="bg-brand">{row}</div>;
  }
  return row;
}

export function ColumbariaTypes() {
  const [active, setActive] = useState<number[]>(() =>
    COLUMBARIA_TYPES.map(() => 0),
  );

  const handleSelect = (blockIndex: number, imageIndex: number) => {
    setActive((prev) => {
      const next = [...prev];
      next[blockIndex] = imageIndex;
      return next;
    });
  };

  return (
    <section>
      <div className="px-6 py-16 text-center">
        <p className="text-[15px] uppercase tracking-[0.12em] text-[#6b6b6b]">
          {COLUMBARIA_HEADING.eyebrow}
        </p>
        <h2 className="font-heading mt-4 text-[30px] md:text-[clamp(34px,5vw,52px)] font-medium text-brand">
          {COLUMBARIA_HEADING.title}
        </h2>
      </div>
      {COLUMBARIA_TYPES.map((type, i) => (
        <FeatureBlock
          key={type.title}
          type={type}
          active={active[i]}
          onSelect={(imageIndex) => handleSelect(i, imageIndex)}
        />
      ))}
    </section>
  );
}
