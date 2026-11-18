import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CARELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Không Tìm Thấy Trang | Hoa Viên Nghĩa Trang Bình Dương",
  robots: { index: false, follow: true },
};

/** Các lối đi chính để người lạc đường (link cũ, gõ nhầm) quay lại đúng chỗ. */
const LINKS = [
  { label: "Trang Chủ", href: "/" },
  { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
  { label: "Khu Mộ & Vị Trí An Nghỉ", href: "/dich-vu/phan-mo" },
  { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
  { label: "Bài Viết", href: "/bai-viet" },
  { label: "Liên Hệ", href: "/lien-he" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-[760px] px-6 pb-[90px] pt-[130px] text-center md:pb-[120px] md:pt-[170px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a86a3d]">Lỗi 404</p>
          <h1 className="mt-4 font-heading text-[32px] font-medium leading-[1.2] text-heading md:text-[44px] [text-wrap:balance]">
            Không tìm thấy trang
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.7] text-[#555] [text-wrap:pretty]">
            Đường dẫn có thể đã thay đổi hoặc không còn tồn tại. Quý khách vui lòng chọn một mục bên dưới, hoặc gọi
            tổng đài để được hỗ trợ.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-12 items-center justify-center border border-brand/25 px-5 py-3 text-[14px] font-medium uppercase tracking-[1.5px] text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[15px] text-[#555]">
            Tổng đài:{" "}
            <a
              href={`tel:${CARELINE.replace(/[^0-9]/g, "")}`}
              className="font-semibold tracking-[0.06em] text-brand-link transition-colors hover:text-brand"
            >
              {CARELINE}
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
