"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { PRIVACY_ITEMS, PRIVACY_TITLE } from "@/lib/privacy-content";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { PolicyBlock } from "@/types";

function Block({ block }: { block: PolicyBlock }) {
  if (block.type === "list") {
    return (
      <ol className="mb-[12px] list-[lower-alpha] space-y-2 pl-6 marker:font-semibold marker:text-heading md:mb-[17px]">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "contact") {
    return (
      <dl className="mb-[12px] grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 md:mb-[17px]">
        {block.rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="font-semibold text-heading">{row.label}:</dt>
            <dd>
              {row.href ? (
                <Link href={row.href} className="text-brand-link underline underline-offset-2">
                  {row.value}
                </Link>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <p className={cn("mb-[12px] md:mb-[17px]", block.emphasis && "font-medium text-heading")}>
      {block.lead && <strong className="mr-1 font-bold text-heading">{block.lead}</strong>}
      {block.text}
    </p>
  );
}

// Divi accordion behaviour: exactly one item open, first open on load,
// clicking the open item keeps it open.
export function PrivacyAccordion() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="bg-section-light pt-[25px] md:pt-[50px]">
      <div className="mx-auto w-full max-w-[1080px] px-[15px] md:w-[80%] md:px-0">
        <h2 className="font-heading text-[25px] font-bold uppercase leading-[1.6] tracking-[0.04em] text-heading">
          {PRIVACY_TITLE}
        </h2>
        <hr className="mt-[29px] border-0 border-t-2 border-brand" />

        <div className="my-[30px] pt-[7px]">
          {PRIVACY_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const Icon = isOpen ? MinusIcon : PlusIcon;
            return (
              <div
                key={item.title}
                className={cn(
                  "mb-[30px] p-[15px] shadow-[6px_6px_18px_0_rgba(0,0,0,0.3)] transition-colors duration-300 last:mb-0 md:p-[20px]",
                  isOpen ? "bg-white" : "bg-[#f4f4f4]",
                )}
              >
                <h3 className="text-[18px] leading-[1.3]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(i)}
                    className="relative block w-full cursor-pointer pr-[28px] text-left font-sans font-bold text-heading md:pr-[50px]"
                  >
                    {item.title}
                    <Icon
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-[18px] text-brand"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-label={item.title}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <div className="pt-[20px] text-[16px] leading-[1.7] text-[#555]">
                      {item.blocks.map((block, bi) => (
                        <Block key={bi} block={block} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
