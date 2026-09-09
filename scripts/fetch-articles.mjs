import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT_IMG = path.resolve("public/images/articles");
await mkdir(OUT_IMG, { recursive: true });

// Exact 33 article slugs in the order shown on /resources/article/
const SLUGS = [
  "the-traditional-custom-of-bringing-the-deceased-home-as-a-living-person-and-the-modern-way-of-a-complete-farewell",
  "returning-to-roots-leaving-an-eternal-legacy-understanding-the-4-common-types-of-burial-blankets-and-their-profound-meanings",
  "an-eco-friendly-escort-a-gentle-farewell",
  "nirvana-center-ipoh-a-jewel-upon-the-crown-of-the-tin-capital",
  "bidding-farewell-without-a-heavy-burden-navigating-the-beam-over-the-coffin-taboo-in-home-funerals-and-its-solutions",
  "funeral-planning-is-one-of-lifes-most-important-ritual",
  "the-farewell-ceremony-every-step-is-part-of-saying-goodbye",
  "when-this-moment-arrives-love-takes-a-different-form-to-endure",
  "bereavement-services",
  "are-you-afraid-of-death-2",
  "can-time-truly-heal-all-wounds",
  "unveiling-the-veil-of-death",
  "grief-counselling-accompanying-through-grief-and-loss",
  "can-grieving-with-restraint-truly-bring-smooth-acceptance-to-change",
  "can-anyone-become-a-counsellor",
  "not-superstition-just-love-with-somewhere-to-go-what-i-want-to-say-about-honoring-our-ancestors",
  "%e9%bc%bb%e5%92%bd%e7%99%8c%e6%82%a3%e8%80%85%e6%a5%8a%e5%90%89%e7%a5%a5%e7%95%99%e7%88%b1%e4%b8%8d%e7%95%99%e5%80%ba-2",
  "qing-ming-festival",
  "%e8%84%91%e9%ba%bb%e5%84%bf%e5%a6%88%e5%a6%88%e8%ae%b8%e6%84%bf%e7%8f%8a",
  "mds%e6%82%a3%e8%80%85%e9%99%88%e8%8e%89%e7%8f%8d-%e7%85%a7%e7%89%87%e6%98%af%e6%9c%80%e7%8f%8d%e8%b4%b5%e7%9a%84%e9%81%97%e7%89%a9",
  "rhyme-of-life-articles-%e8%97%8f%e6%81%a9%e9%96%a3%e5%85%a8%e9%a6%ac%e9%a6%96%e5%89%b5%e5%9c%96%e6%9b%b8%e9%a4%a8%e8%a8%ad%e8%a8%88-2",
  "nirvanacenteripoh",
  "tibetan-buddhist-spiritual-leaders-grace-nirvana-memorial-park-klang",
  "over-3000-gathered-at-nirvana-memorial-park-klang-for-chap-goh-mei",
  "his-holiness-the-41st-sakya-trizin-%c2%b7-interpreting-tibetan-buddhism-with-modern-wisdom",
  "2026-qing-ming-festival-announcement-in-remembrance-together-again-where-memories-meet",
  "for-consumers-flexible-financial-planning-poised-to-face-the-unknown",
  "does-coffin-sealing-bring-bad-omens",
  "the-filial-lion-the-funeral-guardian-spirit",
  "can-ancestors-really-receive-paper-offerings",
  "taoist-ceremonial-blanket",
  "are-longevity-garments-really-only-for-the-dead",
  "accumulating-intercalary-months-for-longevity-how-many-years-should-be-added-after-death",
];

function decode(s = "") {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&hellip;|&#8230;/g, "…").replace(/&#8217;/g, "’").replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“").replace(/&#8221;/g, "”").replace(/&#8211;/g, "–").replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#039;|&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/\[…\]|\[\.\.\.\]/g, "").replace(/\s+/g, " ").trim();
}
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmtDate = (iso) => { const d = new Date(iso); return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; };
const norm = (s) => decodeURIComponent(s).replace(/\/$/, "").replace(/^\//, "").toLowerCase();
const safe = (url) => decodeURIComponent(url.split("/").pop().split("?")[0]).replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_");

// Fetch a big batch + index by slug
const res = await fetch(
  "https://www.nirvana.com.my/wp-json/wp/v2/posts?per_page=100&_embed=wp:featuredmedia,wp:term&_fields=slug,title,excerpt,date,link,_links,_embedded",
  { headers: { "User-Agent": "Mozilla/5.0" } },
);
const all = await res.json();
const bySlug = new Map();
for (const p of all) bySlug.set(norm(p.slug || new URL(p.link).pathname), p);

async function getPost(slug) {
  const key = norm(slug);
  if (bySlug.has(key)) return bySlug.get(key);
  // fallback: fetch by slug directly
  const r = await fetch(
    `https://www.nirvana.com.my/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term&_fields=slug,title,excerpt,date,link,_links,_embedded`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  );
  const arr = await r.json();
  return arr[0] || null;
}

const articles = [];
const downloads = [];
for (const slug of SLUGS) {
  const p = await getPost(slug);
  if (!p) { console.log("MISSING", slug); continue; }
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes;
  const thumbUrl = sizes?.["et-pb-post-main-image"]?.source_url || sizes?.medium?.source_url || media?.source_url || "";
  const imgName = thumbUrl ? safe(thumbUrl) : "";
  const terms = p._embedded?.["wp:term"]?.flat?.() || [];
  const cat = terms.find((t) => t.taxonomy === "category")?.name || "";
  articles.push({
    title: decode(p.title?.rendered),
    date: fmtDate(p.date),
    category: cat,
    excerpt: decode(p.excerpt?.rendered),
    href: new URL(p.link).pathname,
    image: imgName ? `/images/articles/${imgName}` : "",
  });
  if (thumbUrl) downloads.push({ url: thumbUrl, name: imgName });
}

async function dl({ url, name }) {
  const dest = path.join(OUT_IMG, name);
  if (existsSync(dest)) return `skip ${name}`;
  const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!r.ok) return `FAIL ${name} ${r.status}`;
  await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  return `ok ${name}`;
}
for (let i = 0; i < downloads.length; i += 4) {
  (await Promise.all(downloads.slice(i, i + 4).map(dl))).forEach((x) => console.log(x));
}

const file = `/** Real content extracted from nirvana.com.my/resources/article/ (via WP REST API) */

export interface Article {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href: string;
  image: string;
}

export const ARTICLES_HERO = {
  video: "/videos/articles-hero.mp4",
  title: "ARTICLES",
};

export const ARTICLES: Article[] = ${JSON.stringify(articles, null, 2)};
`;
await writeFile(path.resolve("src/lib/articles-content.ts"), file);
console.log(`\nGenerated ${articles.length} articles -> src/lib/articles-content.ts`);
