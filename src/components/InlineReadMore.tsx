"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface InlineReadMoreProps {
  id: string;
  children: ReactNode;
  align?: "start" | "center" | "end";
  theme?: "light" | "dark";
  className?: string;
  contentClassName?: string;
  buttonClassName?: string;
}

const alignment = {
  start: "justify-center lg:justify-start",
  center: "justify-center",
  end: "justify-center lg:justify-end",
};

export function InlineReadMore({
  id,
  children,
  align = "end",
  theme = "light",
  className,
  contentClassName,
  buttonClassName,
}: InlineReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={className}>
      <div
        id={id}
        aria-hidden={!expanded}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={cn("space-y-4 pt-5", contentClassName)}>{children}</div>
        </div>
      </div>

      <div className={cn("mt-6 flex", alignment[align])}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((current) => !current)}
          className={cn(
            "inline-flex cursor-pointer items-center gap-3 py-2 text-[16px] font-medium uppercase tracking-[2px]",
            theme === "dark" ? "text-white" : "text-brand-link",
            buttonClassName,
          )}
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
          <span
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-full",
              theme === "dark" ? "border border-white" : "bg-brand text-white",
            )}
          >
            <PlusIcon
              aria-hidden="true"
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded && "rotate-45",
              )}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
