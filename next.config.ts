import type { NextConfig } from "next";

// Old English routes (from the original clone) -> Vietnamese slugs.
// Permanent (308) so bookmarks and search engines move to the new URLs.
const LEGACY_ROUTES: Record<string, string> = {
  "/getting-started/immediate-need": "/ho-tro/khi-co-nguoi-than-qua-doi",
  "/getting-started/pre-planning": "/ho-tro/chuan-bi-tu-som",
  "/planning-options/funeral-service": "/dich-vu/tang-le",
  "/planning-options/burial": "/dich-vu/phan-mo",
  "/planning-options/cremation": "/dich-vu/luu-tro-cot",
  "/planning-options/others": "/dich-vu/dich-vu-khac",
  "/resources/who-we-are": "/ve-chung-toi",
  "/resources/contact-us-new": "/lien-he",
  "/resources/faq": "/hoi-dap",
  "/resources/article/5-main-advantages-of-pre-planning": "/bai-viet/chuan-bi-hau-su-tu-som",
  "/resources/article": "/bai-viet",
  "/resources/article/:slug": "/bai-viet/:slug",
};

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async redirects() {
    return Object.entries(LEGACY_ROUTES).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
