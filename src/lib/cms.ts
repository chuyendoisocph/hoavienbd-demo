/** Nguồn nội dung bài viết và sự kiện: Sanity nếu đã cấu hình, nếu không thì dữ liệu trong `src/lib`. */

import { sanityClient } from "@/sanity/client";
import { ARTICLE_STORIES, type ArticleStory, type StoryLine, type StoryPart } from "./article-stories";
import { ARTICLE_BODIES } from "./articles-body";
import { ARTICLES, type Article } from "./articles-content";
import { HOA_VIEN_EVENTS, type HoaVienEvent } from "./events-content";

/**
 * Website hỏi lại Sanity tối đa 1 giờ một lần cho mỗi trang, để không vượt hạn mức gói miễn phí.
 * Khi có webhook (xem src/app/api/revalidate), bài mới hiện ngay lúc bấm Publish.
 */
const REVALIDATE_SECONDS = 3600;
export const SANITY_CACHE_TAG = "sanity";

export interface BodyFigure {
  _type: "figure";
  _key: string;
  src: string;
  alt: string;
  caption?: string;
  narrow?: boolean;
  width: number;
  height: number;
}

export interface BodyFigurePair {
  _type: "figurePair";
  _key: string;
  items: BodyFigure[];
}

export type BodyBlock = BodyFigure | BodyFigurePair | { _type: string; _key: string };

export interface ArticleContent {
  article: Article;
  bodyHtml?: string;
  body?: BodyBlock[];
  story?: ArticleStory;
}

type SanityArticle = Omit<Article, "href">;

type SanityStoryPart =
  | { _type: "storyLead" | "storyChapter" | "storyNarration" | "storyMoral" | "storyNote"; text: string }
  | ({ _type: "storySpeech" } & StoryLine)
  | { _type: "storyHighlight"; lines: StoryLine[]; keyPhrase: string }
  | { _type: "storyVerse"; cue: string; lines: string[]; source?: string }
  | { _type: "storyImage"; src: string; alt: string; caption: string; width: number; height: number };

interface SanityArticleDetail extends SanityArticle {
  format: "standard" | "story";
  body?: BodyBlock[];
  speakers?: ArticleStory["speakers"];
  story?: SanityStoryPart[];
}

const IMAGE_FIELDS = `"alt": coalesce(alt, caption, ""), "src": image.asset->url, "width": image.asset->metadata.dimensions.width, "height": image.asset->metadata.dimensions.height`;
const ARTICLE_FIELDS = `title, "slug": slug.current, date, category, excerpt, "image": image.asset->url`;
const ARTICLE_FILTER = `_type == "article" && defined(slug.current) && defined(image.asset)`;
const EVENT_FILTER = `_type == "event" && defined(slug.current) && defined(image.asset)`;
const EVENT_FIELDS = `"slug": slug.current, title, occasion, description, "image": image.asset->url, "imageAlt": coalesce(imageAlt, title), featured, introduction, paragraphs, "highlights": coalesce(highlights, [])`;

const ARTICLES_QUERY = `*[${ARTICLE_FILTER}] | order(date desc, _createdAt desc) { ${ARTICLE_FIELDS} }`;
const ARTICLE_QUERY = `*[${ARTICLE_FILTER} && slug.current == $slug][0] {
  ${ARTICLE_FIELDS}, "format": coalesce(format, "standard"), speakers,
  body[] {
    ...,
    _type == "figure" => { ${IMAGE_FIELDS} },
    _type == "figurePair" => { items[] { ..., ${IMAGE_FIELDS} } }
  },
  story[] { ..., _type == "storyImage" => { ${IMAGE_FIELDS} } }
}`;
const EVENTS_QUERY = `*[${EVENT_FILTER}] | order(coalesce(order, 10) asc, _createdAt desc) { ${EVENT_FIELDS} }`;
const EVENT_QUERY = `*[${EVENT_FILTER} && slug.current == $slug][0] { ${EVENT_FIELDS} }`;

async function query<T>(groq: string, params: Record<string, string> = {}) {
  return sanityClient!.fetch<T>(groq, params, { next: { revalidate: REVALIDATE_SECONDS, tags: [SANITY_CACHE_TAG] } });
}

function toArticle(item: SanityArticle): Article {
  const [year, month, day] = item.date.split("-");
  return { ...item, date: `${day}/${month}/${year}`, href: `/bai-viet/${item.slug}` };
}

function toStoryPart(part: SanityStoryPart): StoryPart {
  switch (part._type) {
    case "storyLead":
      return { kind: "lead", text: part.text };
    case "storyChapter":
      return { kind: "chapter", text: part.text };
    case "storyNarration":
      return { kind: "narration", text: part.text };
    case "storyMoral":
      return { kind: "moral", text: part.text };
    case "storyNote":
      return { kind: "note", text: part.text };
    case "storySpeech":
      return { kind: "line", line: { who: part.who, cue: part.cue, text: part.text } };
    case "storyHighlight":
      return { kind: "highlight", lines: part.lines, key: part.keyPhrase };
    case "storyVerse":
      return { kind: "verse", cue: part.cue, lines: part.lines, source: part.source };
    case "storyImage":
      return { kind: "image", src: part.src, alt: part.alt, caption: part.caption, width: part.width, height: part.height };
  }
}

export async function getArticles(): Promise<Article[]> {
  if (!sanityClient) return ARTICLES;
  return (await query<SanityArticle[]>(ARTICLES_QUERY)).map(toArticle);
}

export async function getArticleContent(slug: string): Promise<ArticleContent | null> {
  if (!sanityClient) {
    const article = ARTICLES.find((item) => item.slug === slug);
    const bodyHtml = ARTICLE_BODIES[slug];
    const story = ARTICLE_STORIES[slug];
    return article && (bodyHtml || story) ? { article, bodyHtml, story } : null;
  }

  const item = await query<SanityArticleDetail | null>(ARTICLE_QUERY, { slug });
  if (!item) return null;
  const article = toArticle(item);
  if (item.format === "story" && item.speakers && item.story) {
    return { article, story: { speakers: item.speakers, parts: item.story.map(toStoryPart) } };
  }
  return { article, body: item.body ?? [] };
}

export async function getEvents(): Promise<HoaVienEvent[]> {
  if (!sanityClient) return HOA_VIEN_EVENTS;
  return query<HoaVienEvent[]>(EVENTS_QUERY);
}

export async function getEvent(slug: string): Promise<HoaVienEvent | null> {
  if (!sanityClient) return HOA_VIEN_EVENTS.find((event) => event.slug === slug) ?? null;
  return query<HoaVienEvent | null>(EVENT_QUERY, { slug });
}
