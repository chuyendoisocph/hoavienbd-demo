import { ARTICLES } from "@/lib/articles-content";

export function ArticleGrid() {
  return (
    <section className="bg-white py-[60px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <article key={article.href} className="group flex flex-col">
              <a href={article.href} className="block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                />
              </a>
              <a href={article.href}>
                <h2 className="mt-5 font-heading text-[18px] font-medium leading-[1.4] text-[#333] transition-colors group-hover:text-brand">
                  {article.title}
                </h2>
              </a>
              <p className="mt-3 text-[16px] text-[#666]">
                bởi Hoa Viên Bình Dương | {article.date}
                {article.category ? ` | ${article.category}` : ""}
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[#666]">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
