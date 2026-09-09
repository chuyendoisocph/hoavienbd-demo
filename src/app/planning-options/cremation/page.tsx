import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CremationHero } from "@/components/cremation/CremationHero";
import { CremationIntro } from "@/components/cremation/CremationIntro";
import { ColumbariaTypes } from "@/components/cremation/ColumbariaTypes";
import { CremationRead } from "@/components/cremation/CremationRead";

export const metadata: Metadata = {
  title: "Lưu Tro Cốt | Hoa Viên Bình Dương",
  description:
    "Nhà lưu tro cốt tại Hoa Viên Bình Dương với kiến trúc tráng lệ – Cao Cấp, Hiện Đại, Á Đông Cổ, Công Giáo, Khúc Ca Cuộc Đời và Vườn Hũ Cốt.",
};

export default function CremationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CremationHero />
        <CremationIntro />
        <ColumbariaTypes />
        <CremationRead />
      </main>
      <SiteFooter />
    </>
  );
}
