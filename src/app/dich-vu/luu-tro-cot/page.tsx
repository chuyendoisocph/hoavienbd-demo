import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CremationHero } from "@/components/cremation/CremationHero";
import { CremationIntro } from "@/components/cremation/CremationIntro";
import { ColumbariaTypes } from "@/components/cremation/ColumbariaTypes";
import { CremationRead } from "@/components/cremation/CremationRead";

export const metadata: Metadata = pageMetadata("/dich-vu/luu-tro-cot", {
  title: "Dịch Vụ Lưu Tro Cốt | Hoa Viên Nghĩa Trang Bình Dương",
  description:
    "Dịch vụ lưu tro cốt tại Chùa Thiên Phước, Hoa Viên Nghĩa Trang Bình Dương với không gian trang nghiêm, hộc lưu cốt riêng và quy trình lưu ký rõ ràng.",
});

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
