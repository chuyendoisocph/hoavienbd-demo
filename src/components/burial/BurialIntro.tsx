import Link from "next/link";
import { BURIAL_INTRO } from "@/lib/burial-content";
import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function BurialIntro() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <p className="mb-3 text-center text-[15px] font-normal uppercase tracking-[6px] text-[#999]">
          {BURIAL_INTRO.eyebrow}
        </p>
        <h2
          className="mb-10 text-center font-heading font-medium leading-[1.2] text-brand"
          style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
        >
          {BURIAL_INTRO.title}
        </h2>
        <p className="text-left text-[15px] leading-[1.9] text-[#666]">
          {BURIAL_INTRO.body}
        </p>
        <div className="mt-[30px] flex justify-end">
          <Link
            href={BURIAL_INTRO.cta.href}
            className={cn(
              "inline-flex items-center gap-3",
              "text-[18px] font-medium tracking-[2px] text-brand-link",
            )}
          >
            {BURIAL_INTRO.cta.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
              <PlusIcon className="h-[14px] w-[14px]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
