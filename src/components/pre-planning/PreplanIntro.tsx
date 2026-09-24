"use client";

import { useState } from "react";

import { PREPLAN_INTRO } from "@/lib/preplanning-content";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function PreplanIntro() {
  const [expandedBlocks, setExpandedBlocks] = useState<Set<number>>(() => new Set());

  function toggleBlock(index: number) {
    setExpandedBlocks((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  }

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-[60px] px-6">
        {PREPLAN_INTRO.blocks.map((block, index) => {
          const isExpanded = expandedBlocks.has(index);
          const detailsId = `preplan-intro-details-${index}`;

          return (
          <div key={block.title}>
            <h2
              className="text-center font-heading font-medium leading-[1.2] text-brand"
              style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
            >
              {block.title}
            </h2>
            <div className="mt-8">
              <p className="text-[16px] leading-[1.9] text-[#666]">{block.body[0]}</p>
              <div
                id={detailsId}
                aria-hidden={!isExpanded}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                  isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="space-y-5 pt-5">
                    {block.body.slice(1).map((paragraph) => (
                      <p key={paragraph} className="text-[16px] leading-[1.9] text-[#666]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex justify-end">
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => toggleBlock(index)}
                className="inline-flex cursor-pointer items-center gap-3 text-[18px] font-medium tracking-[2px] text-brand-link"
              >
                {isExpanded ? "THU GỌN" : block.cta.label}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                  <PlusIcon
                    className={cn(
                      "h-[14px] w-[14px] transition-transform duration-300",
                      isExpanded && "rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
