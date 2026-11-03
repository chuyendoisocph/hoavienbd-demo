import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_JSON_LD, pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactBranches } from "@/components/contact/ContactBranches";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = pageMetadata("/lien-he", {
  title: "Liên Hệ | Hoa Viên Bình Dương",
  description:
    "Liên hệ Hoa Viên Bình Dương. Thông tin văn phòng, tổng đài, email và hệ thống hoa viên tại phường Chánh Phú Hòa, TP. Hồ Chí Minh.",
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={ORGANIZATION_JSON_LD} />
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactInfo />
        <ContactBranches />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
