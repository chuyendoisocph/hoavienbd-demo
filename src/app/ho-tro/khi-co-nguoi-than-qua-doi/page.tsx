import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ImmediateHero } from "@/components/immediate-need/ImmediateHero";
import { ImmediateSteps } from "@/components/immediate-need/ImmediateSteps";
import { ImmediateLoved } from "@/components/immediate-need/ImmediateLoved";
import { ImmediateResources } from "@/components/immediate-need/ImmediateResources";

export const metadata: Metadata = {
  title: "Khi Người Thân Qua Đời | Hoa Viên Bình Dương",
  description:
    "Chúng tôi sẵn sàng hỗ trợ 24/7. Hướng dẫn từng bước cần làm khi có người thân qua đời và sự hỗ trợ tang lễ từ Hoa Viên Bình Dương.",
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
