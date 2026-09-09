"use client";

import { useState } from "react";
import { BRANCHES, type Region } from "@/lib/contact-content";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

function RegionBlock({ region }: { region: Region }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="border-t border-black/10 py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
        {/* Region summary */}
        <div>
          <h3 className="font-heading text-[22px] font-bold tracking-[1px] text-brand">
            {region.name}
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-[15px] text-[#666]">
            {region.summary.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <a
            href={region.explore}
            className="mt-6 inline-block rounded-none border border-brand px-7 py-3 text-[13px] uppercase tracking-[2px] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Khám phá
          </a>
        </div>

        {/* Location accordion */}
        <div className="flex flex-col">
          {region.locations.map((loc) => {
            const isOpen = open === loc.name;
            return (
              <div key={loc.name} className="border-b border-black/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : loc.name)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[16px] font-medium uppercase tracking-[1px] text-heading">
                    {loc.name}
                  </span>
                  <PlusIcon
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-brand transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                    style={{ fontSize: "20px" }}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="min-h-0">
                    <p className="whitespace-pre-line pb-5 text-[14px] leading-[1.8] text-[#666]">
                      {loc.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ContactBranches() {
  return (
    <section className="bg-white pb-[40px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center font-heading text-[34px] font-medium text-brand md:text-[44px]">
          Hệ Thống Chi Nhánh
        </h2>
        <div className="mt-8">
          {BRANCHES.map((region) => (
            <RegionBlock key={region.name} region={region} />
          ))}
        </div>
      </div>
    </section>
  );
}
