import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PreplanHero } from "@/components/pre-planning/PreplanHero";
import { PreplanIntro } from "@/components/pre-planning/PreplanIntro";
import { PreplanAdvantages } from "@/components/pre-planning/PreplanAdvantages";
import { PreplanArticles } from "@/components/pre-planning/PreplanArticles";
import { PreplanSteps } from "@/components/pre-planning/PreplanSteps";
import { PreplanResources } from "@/components/pre-planning/PreplanResources";

export const metadata: Metadata = {
  title: "Lập Kế Hoạch Trước | Hoa Viên Bình Dương",
  description:
    "Để lại di sản của tình yêu thương. Tìm hiểu lập kế hoạch trước là gì, 5 lợi ích cho bạn và gia đình, cùng cẩm nang 6 bước chuẩn bị từ sớm.",
};

export default function PrePlanningPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PreplanHero />
        <PreplanIntro />
        <PreplanAdvantages />
        <PreplanArticles />
        <PreplanSteps />
        <PreplanResources />
      </main>
      <SiteFooter />
    </>
  );
}
