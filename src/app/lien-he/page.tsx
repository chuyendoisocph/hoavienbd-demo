import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactBranches } from "@/components/contact/ContactBranches";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ | Hoa Viên Bình Dương",
  description:
    "Liên hệ Hoa Viên Bình Dương. Thông tin văn phòng, tổng đài, email và hệ thống hoa viên tại Chánh Phú Hòa, Bến Cát, Bình Dương.",
};

export default function ContactUsPage() {
  return (
    <>
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
