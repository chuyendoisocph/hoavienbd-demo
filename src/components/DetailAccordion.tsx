"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface DetailAccordionProps {
  id: string;
  title: string;
  children: ReactNode;
  theme?: "light" | "dark";
}

export function DetailAccordion({
  id,
  title,
  children,
  theme = "light",
}: DetailAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "border-l-4 px-5 py-[18px] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)]",
        theme === "dark" ? "border-white/70 bg-white/10" : "border-brand bg-white",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className={cn("text-[17px] font-medium leading-[1.3]", theme === "dark" ? "text-white" : "text-brand")}>
          {title}
        </span>
        <PlusIcon
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-300",
            theme === "dark" ? "text-white" : "text-brand",
            open && "rotate-45",
          )}
        />
      </button>
      <div
        id={id}
        aria-hidden={!open}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={cn("pt-3 text-[16px] leading-[1.7]", theme === "dark" ? "text-white/90" : "text-[#666]")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
