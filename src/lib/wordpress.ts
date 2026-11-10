/**
 * Bài viết lấy thẳng từ WordPress của cphaco.vn (REST API công khai, không cần tài khoản).
 * Đội nội dung đăng bài bên cphaco.vn vào chuyên mục Blog hoặc Cộng đồng là trang Bài Viết tự có bài.
 */

import type { Article } from "./articles-content";

const WP_ORIGIN = "https://cphaco.vn";
const WP_API = `${WP_ORIGIN}/wp-json/wp/v2`;

/** Chuyên mục bên cphaco.vn được đưa sang trang Bài Viết: Blog (3880) và Cộng đồng (31). */
const CATEGORIES: Record<number, string> = { 3880: "Blog", 31: "Cộng đồng" };

/** Chỉ lấy bài đăng từ ngày này trở đi: bài cũ hơn (2015–2021) không còn hợp với web. */
const PUBLISHED_AFTER = "2024-01-01T00:00:00";

/** Hỏi lại cphaco.vn tối đa 10 phút một lần: bài mới hiện bên này trong khoảng thời gian đó. */
const REVALIDATE_SECONDS = 600;
export const WORDPRESS_CACHE_TAG = "wordpress";

const FALLBACK_IMAGE = "/images/hvbd/park-aerial-roundabout.jpg";

interface WpPost {
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string; media_details?: { width?: number; height?: number } }[];
  };
}

export interface WordPressArticle {
  article: Article;
  bodyHtml: string;
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

function decodeEntities(text: string) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const value = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(value) ? String.fromCodePoint(value) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

function plainText(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Tên riêng giữ viết hoa khi đổi tiêu đề về dạng câu. Thêm tên mới vào đây khi cần. */
const PROPER_NOUNS = [
  "Hoa Viên Nghĩa Trang Bình Dương",
  "Hoa Viên Bình Dương",
  "Hoa Viên",
  "Linh Hoa Tuệ Đàn",
  "Đường Thiên Thai",
  "Thiên Thai",
  "Vu Lan",
  "Đền Hùng",
  "Hùng Vương",
  "Giỗ Tổ",
  "Thanh Minh",
  "Ông Táo",
  "Việt Nam",
  "Kiên Giang",
  "Bình Dương",
  "Corel",
  "Thế Hiển",
  "TP.HCM",
];

/** Tiêu đề bên cphaco.vn thường viết hoa toàn bộ: đổi về dạng câu cho hợp kiểu chữ của web này. */
function sentenceCase(title: string) {
  const letters = title.replace(/[^\p{L}]/gu, "");
  if (!letters || letters !== letters.toLocaleUpperCase("vi-VN")) return title;
  let text = title.toLocaleLowerCase("vi-VN");
  for (const noun of PROPER_NOUNS) {
    text = text.split(noun.toLocaleLowerCase("vi-VN")).join(noun);
  }
  return text.charAt(0).toLocaleUpperCase("vi-VN") + text.slice(1);
}

/**
 * Bỏ phần định dạng riêng của từng bài bên WordPress (thẻ style, font, màu, script),
 * giữ lại chữ, tiêu đề, danh sách, ảnh và trích dẫn để hiện theo kiểu chữ của web này.
 */
function cleanBody(html: string) {
  return html
    .replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\[\/?[a-z_][^\]]*\]/gi, "")
    .replace(/\s(?:style|class|id|on\w+|data-[\w-]+)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/<\/?(?:span|font|header|article|section)\b[^>]*>/gi, "")
    // Ảnh và đường dẫn bên WordPress hay viết dạng "/wp-content/...": thêm tên miền cphaco.vn cho đúng.
    .replace(/\s(src|href)="\/(?!\/)/gi, ` $1="${WP_ORIGIN}/`)
    .replace(/\ssrcset="([^"]*)"/gi, (_, list: string) => ` srcset="${list.replace(/(^|,\s*)\/(?!\/)/g, `$1${WP_ORIGIN}/`)}"`)
    .replace(/\s(?:loading|decoding|aria-describedby|title)\s*=\s*("[^"]*"|'[^']*')/gi, "")
    .replace(/<img\b([^>]*?)\s*\/?>/gi, '<img$1 loading="lazy" decoding="async">')
    .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<div>\s*<\/div>/gi, "")
    .trim();
}

function firstImage(html: string) {
  const src = html.match(/<img[^>]+src="([^"]+)"/i)?.[1];
  return src?.startsWith("/") && !src.startsWith("//") ? `${WP_ORIGIN}${src}` : src;
}

function toDate(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
}

function toWordPressArticle(post: WpPost): WordPressArticle | null {
  const bodyHtml = cleanBody(post.content.rendered);
  // Bài chỉ có khung nhúng (như bản tin lật trang) thì không còn nội dung để hiện: bỏ qua.
  if (plainText(bodyHtml).length < 80 && !firstImage(bodyHtml)) return null;

  const excerpt = plainText(post.excerpt.rendered).replace(/\s*\[…\]$|\s*\[\.\.\.\]$/, "…");
  const category = post.categories.map((id) => CATEGORIES[id]).find(Boolean) ?? "Bài viết";
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const image = media?.source_url ?? firstImage(post.content.rendered) ?? FALLBACK_IMAGE;
  const width = media?.media_details?.width;
  const height = media?.media_details?.height;

  return {
    article: {
      title: sentenceCase(plainText(post.title.rendered)),
      date: toDate(post.date),
      category,
      excerpt: excerpt.length > 220 ? `${excerpt.slice(0, 217).replace(/\s+\S*$/, "")}…` : excerpt,
      slug: post.slug,
      href: `/bai-viet/${post.slug}`,
      image,
      cover: width && height ? { width, height } : undefined,
    },
    bodyHtml,
  };
}

async function fetchPosts(params: Record<string, string>): Promise<WpPost[]> {
  const search = new URLSearchParams({
    categories: Object.keys(CATEGORIES).join(","),
    per_page: "100",
    after: PUBLISHED_AFTER,
    _embed: "wp:featuredmedia",
    _fields: "slug,date,title,excerpt,content,categories,_links,_embedded",
    ...params,
  });
  try {
    const response = await fetch(`${WP_API}/posts?${search}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [WORDPRESS_CACHE_TAG] },
    });
    if (!response.ok) return [];
    return (await response.json()) as WpPost[];
  } catch {
    // cphaco.vn tạm lỗi thì trang vẫn hiện các bài viết sẵn có của web này.
    return [];
  }
}

export async function getWordPressArticles(): Promise<WordPressArticle[]> {
  return (await fetchPosts({})).map(toWordPressArticle).filter((item): item is WordPressArticle => item !== null);
}

export async function getWordPressArticle(slug: string): Promise<WordPressArticle | null> {
  const [post] = await fetchPosts({ slug });
  return post ? toWordPressArticle(post) : null;
}
