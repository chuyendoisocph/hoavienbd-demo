import { ADVANTAGES } from "@/lib/preplanning-content";
import { CheckIcon, PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function PreplanAdvantages() {
  return (
    <section className="bg-white pb-[40px] pt-[40px]">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-[34px] font-medium leading-tight text-brand md:text-[44px]">
          {ADVANTAGES.title}
        </h2>
      </div>

      {ADVANTAGES.groups.map((group) => {
        const image = (
          <div className={group.imageLeft ? "lg:order-1" : "lg:order-2"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={group.image}
              alt={group.label}
              className="h-full max-h-[360px] w-full rounded-sm object-cover shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)]"
            />
          </div>
        );
        const text = (
          <div className={group.imageLeft ? "lg:order-2" : "lg:order-1"}>
            <h3 className="font-heading text-[26px] font-bold text-brand">{group.label}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[16px] leading-snug text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

        return (
          <div
            key={group.label}
            className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2"
          >
            {image}
            {text}
          </div>
        );
      })}

      <div className={cn("flex justify-center pt-4")}>
        <a
          href={ADVANTAGES.cta.href}
          className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[2px] text-brand-link"
        >
          {ADVANTAGES.cta.label}
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
            <PlusIcon className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
