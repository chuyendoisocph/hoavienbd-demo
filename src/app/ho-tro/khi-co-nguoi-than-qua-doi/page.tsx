import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ImmediateHero } from "@/components/immediate-need/ImmediateHero";
import { ImmediateSteps } from "@/components/immediate-need/ImmediateSteps";
import { ImmediateLoved } from "@/components/immediate-need/ImmediateLoved";
import { ImmediateResources } from "@/components/immediate-need/ImmediateResources";

export const metadata: Metadata = {
  title: "Hỗ Trợ Tang Lễ | Hoa Viên Bình Dương",
  description:
    "Hướng dẫn các bước cần thiết và kết nối đội ngũ hỗ trợ tang lễ 24/7 từ Hoa Viên Bình Dương.",
};

export default function ImmediateNeedPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ImmediateHero />
        <ImmediateSteps />
        <ImmediateLoved />
        <ImmediateResources />
      </main>
      <SiteFooter />
    </>
  );
}
