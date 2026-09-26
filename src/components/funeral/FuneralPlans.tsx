import { PLANS } from "@/lib/funeral-content";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export function FuneralPlans() {
  return (
    <section className="bg-[#d6d6d6] px-6 py-[80px]">
      <div className="mx-auto max-w-[1000px] text-center">
        <h2 className="font-heading text-[30px] font-medium text-heading md:text-[44px]">
          {PLANS.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.8] text-[#555]">
          {PLANS.introLead}
          <span className="font-semibold text-heading">{PLANS.introBold}</span>
        </p>

        <div className="mx-auto mt-12 grid max-w-[820px] grid-cols-1 gap-6 sm:grid-cols-2">
          {PLANS.buttons.map((button) => (
            button.href === "/lien-he" ? (
              <ConsultationDialog
                key={button.label}
                title="Tư vấn dịch vụ tang lễ"
                interest="dịch vụ tang lễ và hậu sự"
                triggerClassName="block bg-brand px-6 py-[18px] text-center text-[16px] tracking-[1px] text-white transition-colors hover:bg-brand/90"
              >
                {button.label}
              </ConsultationDialog>
            ) : (
              <a
                key={button.label}
                href={button.href}
                className="block bg-brand px-6 py-[18px] text-center text-[16px] tracking-[1px] text-white transition-colors hover:bg-brand/90"
              >
                {button.label}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
