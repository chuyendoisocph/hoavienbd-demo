import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BranchDirectory } from "@/components/branches/BranchDirectory";

export const metadata: Metadata = {
  title: "Hệ Thống Chi Nhánh | Hoa Viên Bình Dương",
  description:
    "Địa chỉ Hoa Viên Bình Dương và ba chi nhánh tại TP. Hồ Chí Minh. Xem vị trí trên bản đồ và chọn địa điểm thuận tiện cho quý khách.",
};

export default function BranchesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="print-page-hero relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#163551] px-6 text-center text-white md:min-h-[500px]">
          <Image
            src="/images/hvbd/park-aerial-roundabout.jpg"
            alt=""
            fill
            sizes="100vw"
            fetchPriority="high"
            loading="eager"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#102447]/55" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-[900px] py-20">
            <p className="text-[12px] font-semibold tracking-[0.32em] text-white/90 uppercase md:text-[14px]">
              Hoa Viên Bình Dương
            </p>
            <h1 className="mt-5 font-display text-[46px] leading-[1.08] font-medium text-white sm:text-[58px] md:text-[76px]">
              Hệ Thống Chi Nhánh
            </h1>
            <p className="mx-auto mt-6 max-w-[660px] text-[15px] leading-[1.75] text-white/95 md:text-[18px]">
              Tìm Hoa Viên và các chi nhánh để kết nối với chúng tôi thuận tiện hơn.
            </p>
          </div>
        </section>
        <BranchDirectory />
      </main>
      <SiteFooter />
    </>
  );
}
