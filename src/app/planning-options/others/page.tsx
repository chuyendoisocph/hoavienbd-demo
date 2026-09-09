import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OthersHero } from "@/components/others/OthersHero";
import { OthersProductBlock } from "@/components/others/OthersProducts";
import { OthersNvSeed } from "@/components/others/OthersNvSeed";
import { OthersRead } from "@/components/others/OthersRead";
import { PRODUCTS } from "@/lib/others-content";

export const metadata: Metadata = {
  title: "Sản Phẩm Khác | Hoa Viên Bình Dương",
  description:
    "Bài Vị Tổ Tiên, Đèn Cầu An và Sinh Phần – những sản phẩm tưởng niệm và phong thủy của Hoa Viên Bình Dương, gìn giữ truyền thống hiếu nghĩa.",
};

export default function OthersPage() {
  const ancestralTablet = PRODUCTS[0];
  const eternalBlessing = PRODUCTS[1];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <OthersHero />
        <OthersProductBlock product={ancestralTablet} />
        <OthersNvSeed />
        <OthersProductBlock product={eternalBlessing} />
        <OthersRead />
      </main>
      <SiteFooter />
    </>
  );
}
