import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WwaHero } from "@/components/wwa/WwaHero";
import { WwaIntro } from "@/components/wwa/WwaIntro";
import { WwaValues } from "@/components/wwa/WwaValues";
import { WwaStats } from "@/components/wwa/WwaStats";

export const metadata: Metadata = pageMetadata("/ve-chung-toi", {
  title: "Về Chúng Tôi | Hoa Viên Nghĩa Trang Bình Dương",
  description:
    "Hoa Viên Nghĩa Trang Bình Dương là công viên tưởng niệm sinh thái tại phường Chánh Phú Hòa, TP. Hồ Chí Minh, chốn an nghỉ trang nghiêm giữa thiên nhiên xanh mát.",
});

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <WwaHero />
        <WwaIntro />
        <WwaValues />
        <WwaStats />
      </main>
      <SiteFooter />
    </>
  );
}
