import type { MetadataRoute } from "next";
import { getArticles, getEvents } from "@/lib/cms";
import { SITE_URL, isoDate } from "@/lib/seo";

export const revalidate = 3600;

const PAGES = [
  "/",
  "/ve-chung-toi",
  "/dich-vu/tang-le",
  "/dich-vu/phan-mo",
  "/dich-vu/luu-tro-cot",
  "/dich-vu/dich-vu-khac",
  "/ho-tro/khi-co-nguoi-than-qua-doi",
  "/ho-tro/chuan-bi-tu-som",
  "/tham-quan-360",
  "/bai-viet",
  "/su-kien",
  "/hoi-dap",
  "/chi-nhanh",
  "/lien-he",
  "/chinh-sach-quyen-rieng-tu",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, events] = await Promise.all([getArticles(), getEvents()]);
  return [
    ...PAGES.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...articles.map((article) => ({ url: `${SITE_URL}${article.href}`, lastModified: isoDate(article.date) })),
    ...events.map((event) => ({ url: `${SITE_URL}/su-kien/${event.slug}` })),
  ];
}
