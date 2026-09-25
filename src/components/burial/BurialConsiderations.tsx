"use client";

import Image from "next/image";
import { useState } from "react";
import { CONSIDERATIONS, CEMETERIES } from "@/lib/burial-content";
import { PlusIcon } from "@/components/icons";
import { InlineReadMore } from "@/components/InlineReadMore";
import { cn } from "@/lib/utils";

export function BurialConsiderations() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-white">
      {/* Banner */}
      <div
        className="px-6 py-[60px]"
        style={{ background: "linear-gradient(131deg, #4453C4 0%, #49497A 100%)" }}
      >
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <h2
            className="font-heading font-bold leading-tight text-white"
            style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
          >
            {CONSIDERATIONS.title}
          </h2>
          <div className="relative aspect-[4/3] lg:translate-y-6">
            <Image
              src={CONSIDERATIONS.bannerImage}
              alt={CONSIDERATIONS.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-x-10 gap-y-4 px-6 py-[60px] md:grid-cols-2">
        {CONSIDERATIONS.items.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={item.title}
              className="border-l-4 border-brand bg-white px-5 py-[18px] shadow-sm"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`burial-consideration-${index}`}
                onClick={() => toggle(index)}
                className="-my-2 flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left"
              >
                <span className="text-[17px] font-medium leading-[1.3] text-brand">
                  {item.title}
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-brand transition-transform duration-300 ease-in-out",
                    isOpen && "rotate-45",
                  )}
                  style={{ fontSize: "22px" }}
                />
              </button>
              <div
                id={`burial-consideration-${index}`}
                aria-hidden={!isOpen}
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0">
                  <p className="pt-3 text-[16px] leading-[1.7] text-[#666]">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Difference between memorial parks and traditional cemeteries */}
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24">
        <div className="relative pb-5 pr-5 md:pb-9 md:pr-9">
          <div aria-hidden="true" className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d7d7d7] md:translate-x-9 md:translate-y-9" />
          <div className="relative aspect-[3/2] overflow-hidden bg-[#ecece8]">
            <Image
              src={CEMETERIES.image}
              alt={CEMETERIES.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:pr-6">
          <h2
            className="font-heading font-medium leading-[1.18] text-brand"
            style={{ fontSize: "clamp(30px, 3vw, 40px)" }}
          >
            {CEMETERIES.title}
          </h2>
          <p className="mt-8 text-[16px] leading-[1.9] text-[#333]">
            {CEMETERIES.body}
          </p>
          <InlineReadMore
            id="cemeteries-details"
            align="end"
            contentClassName="text-[16px] leading-[1.9] text-[#555]"
            buttonClassName="text-[15px]"
          >
            {CEMETERIES.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </InlineReadMore>
        </div>
      </div>
    </section>
  );
}
