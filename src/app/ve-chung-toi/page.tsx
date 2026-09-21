import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WwaHero } from "@/components/wwa/WwaHero";
import { WwaIntro } from "@/components/wwa/WwaIntro";
import { WwaValues } from "@/components/wwa/WwaValues";
import { WwaStats } from "@/components/wwa/WwaStats";
import { WwaAwards } from "@/components/wwa/WwaAwards";

export const metadata: Metadata = {
  title: "Về Chúng Tôi | Hoa Viên Bình Dương",
  description:
    "Hoa Viên Bình Dương là công viên tưởng niệm sinh thái quy mô lớn tại Chánh Phú Hòa, Bến Cát, Bình Dương, mang đến chốn an nghỉ trang nghiêm giữa thiên nhiên xanh mát.",
};

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <WwaHero />
        <WwaIntro />
        <WwaValues />
        <WwaStats />
        <WwaAwards />
      </main>
      <SiteFooter />
    </>
  );
}
