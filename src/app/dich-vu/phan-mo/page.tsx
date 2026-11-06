import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BurialHero } from "@/components/burial/BurialHero";
import { BurialIntro } from "@/components/burial/BurialIntro";
import { CommitmentSection } from "@/components/burial/CommitmentSection";
import { BurialPlotTypes } from "@/components/burial/BurialPlotTypes";
import { MemorialPark360 } from "@/components/burial/MemorialPark360";
import { BurialConsiderations } from "@/components/burial/BurialConsiderations";

export const metadata: Metadata = pageMetadata("/dich-vu/phan-mo", {
  title: "Khu Mộ & Vị Trí An Nghỉ | Hoa Viên Nghĩa Trang Bình Dương",
  description:
    "Tìm hiểu các khu mộ và vị trí an nghỉ tại Hoa Viên Nghĩa Trang Bình Dương – Mộ Gia Tộc Hoàng Gia, Mộ Gia Đình, Mộ Đơn & Đôi và Vườn Tưởng Niệm Công Giáo.",
});

export default function BurialPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16 min-[980px]:pt-[75px]">
        <BurialHero />
        <BurialIntro />
        <CommitmentSection />
        <BurialPlotTypes />
        <MemorialPark360 />
        <BurialConsiderations />
      </main>
      <SiteFooter />
    </>
  );
}
