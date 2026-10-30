import { HeartHandshake, Scale, ShieldCheck } from "lucide-react";
import { ADVANTAGES } from "@/lib/content";
import { noOrphan } from "@/lib/utils";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import type { AdvantageCard } from "@/types";

const ICONS = { shield: ShieldCheck, scale: Scale, heart: HeartHandshake };

/** Đổi "**chữ**" trong mô tả thành chữ in đậm. */
function withBold(text: string) {
  return noOrphan(text)
    .split(/\*\*(.+?)\*\*/g)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-semibold text-heading">
          {part}
        </strong>
      ) : (
        part
      ),
    );
}

function AdvantageItem({ card }: { card: AdvantageCard }) {
  const Icon = ICONS[card.icon];
  return (
    <article className="flex flex-col items-center px-2 text-center md:px-6 lg:px-9">
      {/* Bộ biểu tượng "3 Hợp": nét vàng đồng, đồng nhất, đủ rõ khi hiển thị nhỏ trên điện thoại. */}
      <span className="flex h-[96px] w-[96px] items-center justify-center rounded-full border border-[#e3d3ad] p-[6px] lg:h-[112px] lg:w-[112px]">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#f4eee1] text-[#b08a35]">
          <Icon aria-hidden="true" strokeWidth={1.5} className="h-9 w-9 lg:h-10 lg:w-10" />
        </span>
      </span>
      <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#b08a35]">{card.pillar}</p>
      <h3 className="mt-2 text-[22px] font-bold uppercase leading-[1.3] tracking-[3px] text-heading">{card.title}</h3>
      <p className="mt-1 font-serif text-[20px] font-medium leading-[1.4] text-brand">{card.tagline}</p>
      <span aria-hidden="true" className="mt-5 block h-px w-10 bg-[#c9a24a]" />
      <p className="mt-5 max-w-[330px] text-[15.5px] leading-[1.8] text-[#666]">{withBold(card.description)}</p>
    </article>
  );
}

export function AdvantagesSection() {
  return (
    // Khung trích dẫn của mục kế tiếp chồng ngược lên 12vw trên máy tính: chừa chỗ để không đè nút.
    <section className="bg-[#F7F9FC] py-[64px] lg:pb-[calc(12vw+48px)] lg:pt-[96px]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1140px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#b08a35]">{ADVANTAGES.eyebrow}</p>
          <h2 className="font-heading mt-4 text-[30px] font-semibold leading-[1.25] text-heading [text-wrap:balance] lg:text-[44px]">
            {ADVANTAGES.title}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#666] lg:text-[18px]">{noOrphan(ADVANTAGES.subtitle)}</p>
        </div>

        <div
          data-stagger
          className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e6dcc4] lg:mt-16"
        >
          {ADVANTAGES.cards.map((card) => (
            <AdvantageItem key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-10 text-center lg:mt-16">
          {/* Khẩu hiệu khép mục: dải trắng riêng, chữ lớn màu thương hiệu giữa hai vạch vàng để là điểm nhấn cuối mục. */}
          <div className="w-full bg-white px-5 py-9 shadow-[0_18px_40px_-30px_rgba(24,39,87,0.45)] md:py-11">
            <span aria-hidden="true" className="mx-auto block h-px w-14 bg-[#c9a24a]" />
            <p className="mt-6 flex flex-col items-center gap-x-4 gap-y-1 font-serif text-[26px] font-medium leading-[1.35] text-brand md:flex-row md:justify-center md:text-[28px] lg:text-[34px]">
              {ADVANTAGES.slogan
                .replace(/\.$/, "")
                .split(" – ")
                .map((part, index) => (
                  <span key={part} className="flex flex-col items-center gap-x-4 gap-y-1 whitespace-nowrap md:flex-row">
                    {index > 0 && <span className="text-[#c9a24a]">–</span>}
                    {part}
                  </span>
                ))}
            </p>
            <span aria-hidden="true" className="mx-auto mt-6 block h-px w-14 bg-[#c9a24a]" />
          </div>
          <ConsultationDialog
            title="Tư vấn chuẩn bị từ sớm"
            interest="chủ động chuẩn bị từ sớm"
            triggerClassName="inline-block rounded-none bg-[#4453C4] px-[30px] py-[18px] text-[16px] font-extrabold tracking-[2px] text-white shadow-[0_10px_20px_rgba(65,84,125,0.24)] transition-transform hover:-translate-y-0.5 lg:text-[18px]"
          >
            {ADVANTAGES.cta.label}
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
}
