import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleDetail } from "@/components/articles/ArticleDetail";
import {
  ARTICLES,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles-content";
import { ARTICLE_BODIES } from "@/lib/articles-body";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Bài Viết | Hoa Viên Bình Dương" };
  return {
    title: `${article.title} | Hoa Viên Bình Dương`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const bodyHtml = ARTICLE_BODIES[slug];
  if (!article || !bodyHtml) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ArticleDetail
          article={article}
          bodyHtml={bodyHtml}
          related={getRelatedArticles(slug)}
        />
      </main>
      <SiteFooter />
    </>
  );
}
