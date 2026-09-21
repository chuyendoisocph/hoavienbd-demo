import { PREPLAN_RESOURCES } from "@/lib/preplanning-content";
import { ArrowRightIcon } from "@/components/icons";

export function PreplanResources() {
  return (
    <section className="bg-white pb-[90px] pt-[20px]">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="font-heading mb-[40px] text-[30px] font-medium text-brand md:text-[44px]">
          {PREPLAN_RESOURCES.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PREPLAN_RESOURCES.links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="group flex items-center justify-between gap-4 border border-brand/30 px-6 py-[22px] text-left transition-colors hover:bg-brand/5"
            >
              <span className="text-[17px] font-medium leading-snug text-brand">
                {link.title}
              </span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
