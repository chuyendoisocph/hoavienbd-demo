import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyAccordion } from "@/components/privacy/PrivacyAccordion";

export const metadata: Metadata = {
  title: "Chính Sách Quyền Riêng Tư | Hoa Viên Bình Dương",
  description:
    "Cách Hoa Viên Bình Dương thu thập, sử dụng, bảo mật và chia sẻ dữ liệu cá nhân của khách hàng, cùng quyền truy cập và chỉnh sửa dữ liệu của Quý khách.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PrivacyHero />
        <PrivacyAccordion />
      </main>
      <SiteFooter />
    </>
  );
}
