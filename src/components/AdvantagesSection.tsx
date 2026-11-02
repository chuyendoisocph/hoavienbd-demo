import { Fragment } from "react";
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
      <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.26em] text-brand">{card.pillar}</p>
      <h3 className="mt-2 text-[22px] font-bold uppercase leading-[1.3] tracking-[3px] text-heading">{card.title}</h3>
      <span aria-hidden="true" className="mt-5 block h-px w-10 bg-brand/40" />
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
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-brand">{ADVANTAGES.eyebrow}</p>
          <h2 className="font-heading mt-4 text-[30px] font-semibold leading-[1.25] text-heading [text-wrap:balance] lg:text-[44px]">
            {ADVANTAGES.title}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#666] lg:text-[18px]">{noOrphan(ADVANTAGES.subtitle)}</p>
        </div>

        <div
          data-stagger
          className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e3e7f0] lg:mt-16"
        >
          {ADVANTAGES.cards.map((card) => (
            <AdvantageItem key={card.title} card={card} />
          ))}
        </div>

        {/*
          Khép mục bằng chính câu khẩu hiệu, không đóng khung: một câu chữ có chân cỡ lớn,
          động từ màu chữ thường, ba từ khóa (hôm nay / người thân / mai sau) màu thương hiệu.
          Điện thoại: ba vế thành ba dòng như một khổ thơ, bỏ gạch ngang để không có dấu treo cuối dòng.
          Từ md trở lên: cả câu một hàng, các vế ngăn bằng gạch ngang.
        */}
        <div className="mt-16 flex flex-col items-center border-t border-[#e3e7f0] pt-14 text-center lg:mt-20 lg:pt-16">
          <p className="font-serif text-[27px] font-medium leading-[1.4] tracking-[-0.01em] text-heading md:text-[24px] md:leading-[1.3] lg:text-[32px] xl:text-[40px]">
            {ADVANTAGES.slogan
              .replace(/\.$/, "")
              .split(" – ")
              .map((part, index, parts) => {
                const words = part.split(" ");
                return (
                  <Fragment key={part}>
                    <span className="block whitespace-nowrap md:inline">
                      {words.slice(0, 2).join(" ")} <span className="text-brand">{words.slice(2).join(" ")}</span>
                      {index < parts.length - 1 && <span className="hidden text-[#b9c0d6] md:inline"> –</span>}
                    </span>
                    {index < parts.length - 1 && " "}
                  </Fragment>
                );
              })}
          </p>
          <ConsultationDialog
            title="Tư vấn chuẩn bị từ sớm"
            interest="chủ động chuẩn bị từ sớm"
            triggerClassName="mt-10 inline-block rounded-none bg-[#4453C4] px-[30px] py-[18px] text-[16px] font-extrabold tracking-[2px] text-white shadow-[0_10px_20px_rgba(65,84,125,0.24)] transition-transform hover:-translate-y-0.5 lg:mt-12 lg:text-[18px]"
          >
            {ADVANTAGES.cta.label}
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
}
