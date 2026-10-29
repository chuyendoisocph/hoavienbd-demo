import type { Metadata } from "next";
import Link from "next/link";
import "pannellum/build/pannellum.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VirtualTour } from "@/components/tour360/VirtualTour";
import "./tour.css";

export const metadata: Metadata = {
  title: "Tham Quan Hoa Viên 360° | Hoa Viên Bình Dương",
  description: "Khám phá Hoa Viên Bình Dương qua ảnh toàn cảnh 360° thực tế: cổng hoa viên, Đại Lộ Vĩnh Hằng, Vĩnh Hằng Đài, Chùa Thiên Phước và các khu cảnh quan.",
};

export default function VirtualTourPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white pt-16 min-[980px]:pt-[75px]">
        <VirtualTour />
        <section className="border-t border-[#e6e9ee] bg-[#f7f9fc] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-heading text-[26px] font-semibold text-heading sm:text-[32px]">Muốn tham quan trực tiếp?</h2>
              <p className="mt-2 max-w-[58ch] text-[16px] leading-relaxed text-[#5d6573]">Đội ngũ Hoa Viên có thể hướng dẫn quý khách tìm hiểu các khu vực và vị trí còn trống tại thực địa.</p>
            </div>
            <Link href="/lien-he" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-brand px-6 py-3 text-center text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#3543ab] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Liên hệ tư vấn</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
