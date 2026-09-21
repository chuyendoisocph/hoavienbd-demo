"use client";

import { useState } from "react";
import { FAQ_GROUPS } from "@/lib/faq-content";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  // Open key = "groupIndex-itemIndex"; first item open by default.
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[920px] px-6">
        {FAQ_GROUPS.map((group, gi) => (
          <div key={group.category} className="mb-12 last:mb-0">
            <h2 className="mb-6 font-heading text-[30px] font-bold text-brand md:text-[28px]">
              {group.category}
            </h2>
            <div className="flex flex-col gap-3">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const isOpen = open === key;
                return (
                  <div
                    key={key}
                    className="border-l-4 border-brand bg-white px-5 py-[18px] shadow-[0_10px_30px_-22px_rgba(0,0,0,0.4)]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    >
                      <span className="text-[17px] font-medium leading-[1.4] text-heading">
                        {item.q}
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
                        {item.a.map((para) => (
                          <p
                            key={para.slice(0, 24)}
                            className="pt-3 text-[16px] leading-[1.8] text-[#666]"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
