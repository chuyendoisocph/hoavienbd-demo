import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OthersHero } from "@/components/others/OthersHero";
import { OthersProductBlock } from "@/components/others/OthersProducts";
import { OthersNvSeed } from "@/components/others/OthersNvSeed";
import { OthersRead } from "@/components/others/OthersRead";
import { PRODUCTS } from "@/lib/others-content";

export const metadata: Metadata = {
  title: "Dịch Vụ Khác | Hoa Viên Bình Dương",
  description:
    "Tìm hiểu dịch vụ chăm sóc mộ phần, tư vấn thiết kế xây dựng mộ và sanh phần tại Hoa Viên Bình Dương.",
};

export default function OthersPage() {
  const graveCare = PRODUCTS[0];
  const graveDesign = PRODUCTS[1];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <OthersHero />
        <OthersProductBlock product={graveCare} />
        <OthersNvSeed />
        <OthersProductBlock product={graveDesign} />
        <OthersRead />
      </main>
      <SiteFooter />
    </>
  );
}
