"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Phone } from "lucide-react";
import { BRANCH_GROUPS, type BranchLocation } from "@/lib/branches-content";

function LocationCard({ location, index }: { location: BranchLocation; index: number }) {
  return (
    <article className="overflow-hidden border border-[#e8ecf4] bg-white shadow-[0_14px_36px_rgba(24,39,87,0.045)] md:grid md:grid-cols-[minmax(0,38%)_1fr]">
      {location.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e7ebef] md:aspect-auto md:min-h-[260px]">
          <Image
            src={location.image}
            alt={location.imageAlt ?? location.name}
            fill
            sizes="(max-width: 767px) 100vw, 38vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex min-h-[132px] items-end justify-between bg-[#eaf0f8] px-6 py-5 text-[#4453c4] md:min-h-[225px] md:flex-col md:items-start md:px-8 md:py-7">
          <span className="text-[12px] font-semibold tracking-[0.2em] uppercase">Chi nhánh</span>
          <span className="font-display text-[52px] leading-none md:text-[82px]" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
        </div>
      )}
      <div className="flex min-w-0 flex-col justify-center px-6 py-7 sm:px-8 md:px-10 md:py-9">
        <p className="mb-3 text-[12px] font-semibold tracking-[0.17em] text-brand uppercase">
          {location.image ? "Tham quan hoa viên" : "Liên hệ chi nhánh"}
        </p>
        <h3 className="font-heading text-[22px] leading-[1.35] font-semibold text-[#30343c] md:text-[26px]">
          {location.name}
        </h3>
        <p className="mt-4 flex items-start gap-3 text-[15px] leading-7 text-[#626b78] md:text-[17px]">
          <MapPin className="mt-1 h-[18px] w-[18px] shrink-0 text-brand" aria-hidden="true" />
          <span>{location.address}</span>
        </p>
        {location.phones && (
          <div className="mt-3 flex items-start gap-3 text-[15px] leading-7 text-[#626b78] md:text-[17px]">
            <Phone className="mt-1 h-[18px] w-[18px] shrink-0 text-brand" aria-hidden="true" />
            <div className="flex flex-wrap gap-x-3">
              {location.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="underline-offset-4 hover:text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        )}
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 text-[13px] font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#303c9d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Xem trên bản đồ
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function BranchDirectory() {
  const [openGroup, setOpenGroup] = useState<string | null>(BRANCH_GROUPS[0].id);

  return (
    <section className="bg-[#f5f7fa] px-4 py-16 sm:px-6 md:py-24" aria-labelledby="branches-heading">
      <div className="mx-auto max-w-[1145px]">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[12px] font-semibold tracking-[0.24em] text-brand uppercase md:text-[13px]">
            Các chi nhánh
          </p>
          <h2 id="branches-heading" className="mt-3 font-heading text-[35px] leading-[1.15] font-medium text-brand md:text-[54px]">
            Tìm địa điểm phù hợp
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-[#616a75] md:text-[18px]">
            Quý khách có thể đến trực tiếp Hoa Viên Bình Dương để tham quan, hoặc liên hệ một trong ba chi nhánh tại TP. Hồ Chí Minh.
          </p>
        </div>

        <div className="mt-12 space-y-3 md:mt-16">
          {BRANCH_GROUPS.map((group) => {
            const isOpen = openGroup === group.id;
            const panelId = `branch-panel-${group.id}`;
            return (
              <div key={group.id}>
                <h3>
                  <button
                    type="button"
                    id={`branch-trigger-${group.id}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenGroup(isOpen ? null : group.id)}
                    className={`flex min-h-[76px] w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-7 md:min-h-[94px] md:px-9 ${isOpen ? "bg-[#26315a] text-white" : "bg-[#73839d] text-white hover:bg-[#64768f]"}`}
                  >
                    <span className="font-heading text-[18px] leading-snug font-semibold sm:text-[21px] md:text-[24px]">
                      {group.name}
                    </span>
                    <ChevronDown className={`h-6 w-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`branch-trigger-${group.id}`}
                  hidden={!isOpen}
                  className="bg-white px-4 py-6 sm:px-6 md:px-8 md:py-8"
                >
                  <p className="mb-6 text-[15px] leading-7 text-[#657080] md:text-[17px]">
                    {group.description}
                  </p>
                  <div className="space-y-5 md:space-y-7">
                    {group.locations.map((location, index) => (
                      <LocationCard key={location.id} location={location} index={index + 1} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-[#dce3ed] pt-8 text-center text-[15px] leading-7 text-[#616a75]">
          Cần được hướng dẫn trước khi đến? Gọi tổng đài tư vấn{" "}
          <a href="tel:0818555444" className="font-semibold text-brand underline underline-offset-4 hover:text-[#303c9d]">
            0818 555 444
          </a>
          .
        </div>
      </div>
    </section>
  );
}
