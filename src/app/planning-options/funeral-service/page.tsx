import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FuneralHero } from "@/components/funeral/FuneralHero";
import { FuneralIntro } from "@/components/funeral/FuneralIntro";
import { FuneralHowItWorks } from "@/components/funeral/FuneralHowItWorks";
import { FuneralParlours } from "@/components/funeral/FuneralParlours";
import { FuneralCaskets } from "@/components/funeral/FuneralCaskets";
import { FuneralReasons } from "@/components/funeral/FuneralReasons";
import { FuneralPlans } from "@/components/funeral/FuneralPlans";
import { FuneralGuide } from "@/components/funeral/FuneralGuide";
import { FuneralAbout } from "@/components/funeral/FuneralAbout";

export const metadata: Metadata = {
  title: "Dịch Vụ Tang Lễ | Hoa Viên Bình Dương",
  description:
    "Dịch vụ tang lễ trọn gói của Hoa Viên Bình Dương – nhà tang lễ, quan tài & hũ cốt cao cấp, cùng đội ngũ chăm sóc tận tâm, chuyên nghiệp.",
};

export default function FuneralServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FuneralHero />
        <FuneralIntro />
        <FuneralHowItWorks />
        <FuneralParlours />
        <FuneralCaskets />
        <FuneralReasons />
        <FuneralPlans />
        <FuneralGuide />
        <FuneralAbout />
      </main>
      <SiteFooter />
    </>
  );
}
