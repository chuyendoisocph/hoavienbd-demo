import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticlesHero } from "@/components/articles/ArticlesHero";
import { ArticleGrid } from "@/components/articles/ArticleGrid";

export const metadata: Metadata = {
  title: "Bài Viết | Hoa Viên Bình Dương",
  description:
    "Bài viết từ Hoa Viên Bình Dương về lập kế hoạch trước, dịch vụ tang lễ, nghi lễ – văn hóa và những tin tức mới nhất.",
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ArticlesHero />
        <ArticleGrid />
      </main>
      <SiteFooter />
    </>
  );
}
