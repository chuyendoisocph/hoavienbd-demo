import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Hỏi & Đáp | Hoa Viên Bình Dương",
  description:
    "Giải đáp những thắc mắc thường gặp về hoa viên: chăm sóc mộ phần, xây mộ & bia mộ, hỏa táng, quyền an táng, thanh toán và phản hồi tại Hoa Viên Bình Dương.",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FaqHero />
        <FaqAccordion />
      </main>
      <SiteFooter />
    </>
  );
}
