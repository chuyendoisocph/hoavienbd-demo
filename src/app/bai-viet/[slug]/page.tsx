import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { ArticleDetail } from "@/components/articles/ArticleDetail";
import { getRelatedArticles } from "@/lib/articles-content";
import { getArticleContent, getArticles } from "@/lib/cms";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl, isoDate, pageMetadata } from "@/lib/seo";
import { StoryArticle } from "@/components/articles/StoryArticle";

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getArticles()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getArticleContent(slug);
  if (!content) return { title: "Bài Viết | Hoa Viên Nghĩa Trang Bình Dương" };
  const { article } = content;
  return pageMetadata(article.href, {
    // Tiêu đề dài thì bỏ đuôi tên thương hiệu, để Google không cắt mất phần chính.
    title: article.title.length + SITE_NAME.length > 62 ? article.title : `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    image: { url: article.image, alt: article.title },
    type: "article",
    publishedTime: isoDate(article.date),
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getArticleContent(slug);
  if (!content) notFound();
  const { article, bodyHtml, body, story } = content;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [absoluteUrl(article.image)],
    datePublished: isoDate(article.date),
    articleSection: article.category,
    inLanguage: "vi-VN",
    mainEntityOfPage: absoluteUrl(article.href),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <SiteHeader />
      <main className="flex-1">
        <ArticleDetail
          article={article}
          bodyHtml={bodyHtml}
          related={getRelatedArticles(await getArticles(), slug)}
        >
          {story ? <StoryArticle story={story} /> : body ? <ArticleBody body={body} /> : null}
        </ArticleDetail>
      </main>
      <SiteFooter />
    </>
  );
}
