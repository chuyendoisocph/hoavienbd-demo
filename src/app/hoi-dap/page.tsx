import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_GROUPS } from "@/lib/faq-content";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = pageMetadata("/hoi-dap", {
  title: "Hỏi & Đáp | Hoa Viên Bình Dương",
  description:
    "Giải đáp những thắc mắc thường gặp về hoa viên: chăm sóc khu mộ, xây mộ & bia mộ, hỏa táng, quyền an táng, thanh toán và phản hồi tại Hoa Viên Bình Dương.",
});

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_JSON_LD} />
      <SiteHeader />
      <main className="flex-1">
        <FaqHero />
        <FaqAccordion />
      </main>
      <SiteFooter />
    </>
  );
}
