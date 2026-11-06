import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticlesHero } from "@/components/articles/ArticlesHero";
import { ArticleGrid } from "@/components/articles/ArticleGrid";
import { getArticles } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata("/bai-viet", {
  title: "Bài Viết | Hoa Viên Nghĩa Trang Bình Dương",
  description:
    "Bài viết từ Hoa Viên Nghĩa Trang Bình Dương về chủ động chuẩn bị từ sớm, dịch vụ tang lễ, an táng, hỏa táng, lưu giữ tro cốt và văn hóa tưởng niệm Việt Nam.",
});

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ArticlesHero />
        <ArticleGrid articles={articles} />
      </main>
      <SiteFooter />
    </>
  );
}
