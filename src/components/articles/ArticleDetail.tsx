import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles-content";

interface ArticleDetailProps {
  article: Article;
  bodyHtml: string;
  related: Article[];
}

export function ArticleDetail({ article, bodyHtml, related }: ArticleDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] overflow-hidden bg-black md:h-[520px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="100vw"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-[900px] flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-[13px] uppercase tracking-[0.12em] text-white/80">
            {article.category}
          </p>
          <h1
            className="font-heading font-medium leading-[1.15] text-white"
            style={{ fontSize: "clamp(40px, 4.5vw, 48px)", letterSpacing: "0.5px" }}
          >
            {article.title}
          </h1>
          <p className="mt-5 text-[16px] text-white/80">
            bởi Hoa Viên Bình Dương | {article.date}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-[70px]">
        <div className="mx-auto max-w-[820px] px-6">
          <article
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
          <div className="mt-14 border-t border-black/10 pt-8">
            <Link
              href="/bai-viet"
              className="text-[15px] font-medium uppercase tracking-[2px] text-brand-link transition-colors hover:text-brand"
            >
              ← Quay lại danh sách bài viết
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#f7f7f7] py-[70px]">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="mb-10 text-center font-heading text-[30px] font-medium text-heading">
              Bài Viết Liên Quan
            </h2>
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="group flex flex-col">
                  <a href={item.href} className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                    />
                  </a>
                  <a href={item.href}>
                    <h3 className="mt-5 font-heading text-[18px] font-medium leading-[1.4] text-[#333] transition-colors group-hover:text-brand">
                      {item.title}
                    </h3>
                  </a>
                  <p className="mt-3 text-[16px] text-[#666]">
                    {item.date}
                    {item.category ? ` | ${item.category}` : ""}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
