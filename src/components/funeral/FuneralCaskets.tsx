import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { FUNERAL_SUPPLIES } from "@/lib/funeral-content";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export function FuneralCaskets() {
  return (
    <section className="bg-[#f7f7f4] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e8e3]">
          <Image
            src={FUNERAL_SUPPLIES.image}
            alt={FUNERAL_SUPPLIES.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">
            {FUNERAL_SUPPLIES.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-medium leading-tight text-heading md:text-[44px]">
            {FUNERAL_SUPPLIES.title}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.85] text-[#606060]">
            {FUNERAL_SUPPLIES.body}
          </p>

          <ul className="mt-7 space-y-4">
            {FUNERAL_SUPPLIES.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#4f4f4f]">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-brand/50 pl-4 text-[14px] leading-7 text-[#666]">
            {FUNERAL_SUPPLIES.note}
          </p>

          <ConsultationDialog
            title="Tư vấn vật dụng tang lễ"
            interest="vật dụng và phương án tang lễ"
            triggerClassName="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand px-6 py-3 text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-brand/90"
          >
            {FUNERAL_SUPPLIES.cta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
}
