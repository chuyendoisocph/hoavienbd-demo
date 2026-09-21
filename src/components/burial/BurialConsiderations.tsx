"use client";

import { useState } from "react";
import { CONSIDERATIONS, CEMETERIES } from "@/lib/burial-content";
import { PlusIcon } from "@/components/icons";
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
          <div className="lg:translate-y-6">
            <img
              src={CONSIDERATIONS.bannerImage}
              alt={CONSIDERATIONS.title}
              className="h-full max-h-[420px] w-full rounded object-cover"
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
                onClick={() => toggle(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
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

      {/* Cemeteries note */}
      <div className="bg-white px-6 pb-[80px] text-center">
        <h2
          className="font-heading text-brand"
          style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
        >
          {CEMETERIES.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[820px] text-[16px] leading-[1.9] text-[#666]">
          {CEMETERIES.body}
        </p>
        <a
          href={CEMETERIES.cta.href}
          className="mt-8 inline-flex items-center gap-3 text-[18px] tracking-[2px] text-brand-link"
        >
          {CEMETERIES.cta.label}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
            <PlusIcon aria-hidden="true" style={{ fontSize: "16px" }} />
          </span>
        </a>
      </div>
    </section>
  );
}
