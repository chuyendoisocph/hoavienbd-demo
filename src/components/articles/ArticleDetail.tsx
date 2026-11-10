import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Article } from "@/lib/articles-content";

interface ArticleDetailProps {
  article: Article;
  /** Thân bài dạng HTML; bỏ qua khi bài có cách trình bày riêng (`children`). */
  bodyHtml?: string;
  children?: ReactNode;
  related: Article[];
}

export function ArticleDetail({ article, bodyHtml, children, related }: ArticleDetailProps) {
  const { cover } = article;
  return (
    <>
      {/* Hero theo kiểu bài viết National Geographic: chuyên mục, tiêu đề, lời dẫn căn giữa trên nền trắng,
          ảnh lớn ngay bên dưới, thấy trọn khung hình thay vì bị cắt và phủ tối. */}
      <section className="bg-white pt-[118px] md:pt-[140px]">
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <p className="inline-block border border-heading px-2.5 py-1 text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-heading">
            {article.category}
          </p>
          <h1
            className="mt-6 font-heading font-medium leading-[1.18] text-heading [text-wrap:balance]"
            style={{ fontSize: "clamp(30px, 3.6vw, 46px)" }}
          >
            {article.title}
          </h1>
          {article.excerpt ? (
            <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.6] text-[#555] md:text-[17px] [text-wrap:pretty]">
              {article.excerpt}
            </p>
          ) : null}
          <p className="mt-4 text-[14px] text-[#777]">
            <span className="block sm:inline">bởi Hoa Viên Nghĩa Trang Bình Dương</span>
            <span aria-hidden="true" className="mx-2 hidden text-[#b9b9c9] sm:inline">|</span>
            <span className="mt-1 block sm:mt-0 sm:inline">{article.date}</span>
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-[1008px] px-6 md:mt-10">
          {cover ? (
            // Ảnh bìa thiết kế sẵn (có chữ) từ cphaco.vn: giữ nguyên tỉ lệ, không cắt.
            <Image
              src={article.image}
              alt={article.title}
              width={cover.width}
              height={cover.height}
              sizes="(max-width: 1008px) 100vw, 960px"
              fetchPriority="high"
              loading="eager"
              className="block h-auto w-full"
            />
          ) : (
            <div className="relative aspect-[3/2] overflow-hidden bg-[#f4f6fa]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1008px) 100vw, 960px"
                fetchPriority="high"
                loading="eager"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="bg-white pb-[70px] pt-[48px] md:pt-[64px]">
        <div className="mx-auto max-w-[820px] px-6">
          {children ? (
            <article>{children}</article>
          ) : (
            <article
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: bodyHtml ?? "" }}
            />
          )}
          <div className="mt-14 border-t border-black/10 pt-8">
            <Link
              href="/bai-viet"
              className="inline-block py-2 text-[15px] font-medium uppercase tracking-[2px] text-brand-link transition-colors hover:text-brand"
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
