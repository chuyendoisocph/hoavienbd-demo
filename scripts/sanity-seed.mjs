// Xuất bài viết và sự kiện trong src/lib thành sanity-seed/seed.ndjson để nhập vào Sanity:
//   node scripts/sanity-seed.mjs
//   npx sanity dataset import sanity-seed/seed.ndjson production --replace
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ARTICLE_STORIES } from "../src/lib/article-stories.ts";
import { ARTICLE_BODIES } from "../src/lib/articles-body.ts";
import { ARTICLES } from "../src/lib/articles-content.ts";
import { HOA_VIEN_EVENTS } from "../src/lib/events-content.ts";

const root = path.resolve(import.meta.dirname, "..");
let keyCounter = 0;
const key = () => createHash("sha1").update(String(keyCounter++)).digest("hex").slice(0, 12);

const image = (src) => ({
  _type: "image",
  _sanityAsset: `image@${pathToFileURL(path.join(root, "public", src)).href}`,
});

function assertPlain(text, context) {
  if (/[<&]/.test(text)) throw new Error(`Còn thẻ HTML chưa chuyển trong ${context}: ${text}`);
  return text;
}

function spans(html, context) {
  return html
    .replace(/<br\s*\/?>\s*/g, "\n")
    .split(/(<strong>[\s\S]*?<\/strong>)/g)
    .filter(Boolean)
    .map((part) => {
      const strong = part.match(/^<strong>([\s\S]*)<\/strong>$/);
      return {
        _type: "span",
        _key: key(),
        text: assertPlain(strong ? strong[1] : part, context),
        marks: strong ? ["strong"] : [],
      };
    });
}

const block = (style, html, context, extra = {}) => ({
  _type: "block",
  _key: key(),
  style,
  markDefs: [],
  children: spans(html.trim(), context),
  ...extra,
});

function figure(html, attributes, context) {
  const src = html.match(/src="([^"]+)"/)?.[1];
  const alt = html.match(/alt="([^"]+)"/)?.[1];
  if (!src || !alt) throw new Error(`Ảnh thiếu src hoặc alt trong ${context}`);
  const caption = html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1];
  return {
    _type: "figure",
    _key: key(),
    image: image(src),
    alt,
    ...(caption ? { caption: assertPlain(caption, context) } : {}),
    narrow: attributes.includes("max-w-[520px]"),
  };
}

function htmlToBody(html, slug) {
  const body = [];
  for (const [, tag, attributes, inner] of html.matchAll(/<(h2|p|blockquote|ul|div|figure)\b([^>]*)>([\s\S]*?)<\/\1>/g)) {
    if (tag === "p") body.push(block("normal", inner, slug));
    else if (tag === "h2") body.push(block("h2", inner, slug));
    else if (tag === "blockquote") body.push(block("blockquote", inner, slug));
    else if (tag === "figure") body.push(figure(inner, attributes, slug));
    else if (tag === "ul") {
      for (const [, item] of inner.matchAll(/<li>([\s\S]*?)<\/li>/g)) {
        body.push(block("normal", item, slug, { listItem: "bullet", level: 1 }));
      }
    } else {
      const items = [...inner.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)].map(([, a, f]) => figure(f, a, slug));
      body.push({ _type: "figurePair", _key: key(), items });
    }
  }
  return body;
}

const speech = (line) => ({ who: line.who, ...(line.cue ? { cue: line.cue } : {}), text: line.text });

function storyPart(part) {
  const base = { _key: key() };
  switch (part.kind) {
    case "lead":
    case "chapter":
    case "narration":
    case "moral":
    case "note":
      return { ...base, _type: `story${part.kind[0].toUpperCase()}${part.kind.slice(1)}`, text: part.text };
    case "line":
      return { ...base, _type: "storySpeech", ...speech(part.line) };
    case "highlight":
      return {
        ...base,
        _type: "storyHighlight",
        keyPhrase: part.key,
        lines: part.lines.map((line) => ({ _type: "storyLine", _key: key(), ...speech(line) })),
      };
    case "verse":
      return { ...base, _type: "storyVerse", cue: part.cue, lines: part.lines, ...(part.source ? { source: part.source } : {}) };
    case "image":
      return { ...base, _type: "storyImage", image: image(part.src), alt: part.alt, caption: part.caption };
    default:
      throw new Error(`Không rõ loại nội dung: ${part.kind}`);
  }
}

// _createdAt giảm dần để các bài cùng ngày giữ đúng thứ tự hiện tại.
const createdAt = (index) => new Date(Date.UTC(2026, 0, 1) - index * 60000).toISOString();

const documents = ARTICLES.map((article, index) => {
  const [day, month, year] = article.date.split("/");
  const story = ARTICLE_STORIES[article.slug];
  const html = ARTICLE_BODIES[article.slug];
  if (!story && !html) throw new Error(`Bài không có nội dung: ${article.slug}`);
  return {
    _id: `article-${article.slug}`,
    _type: "article",
    _createdAt: createdAt(index),
    title: article.title,
    slug: { _type: "slug", current: article.slug },
    date: `${year}-${month}-${day}`,
    category: article.category,
    excerpt: article.excerpt,
    image: image(article.image),
    format: story ? "story" : "standard",
    ...(story
      ? { speakers: story.speakers, story: story.parts.map(storyPart) }
      : { body: htmlToBody(html, article.slug) }),
  };
});

HOA_VIEN_EVENTS.forEach((event, index) => {
  documents.push({
    _id: `event-${event.slug}`,
    _type: "event",
    title: event.title,
    slug: { _type: "slug", current: event.slug },
    occasion: event.occasion,
    description: event.description,
    image: image(event.image),
    imageAlt: event.imageAlt,
    featured: Boolean(event.featured),
    order: index + 1,
    introduction: event.introduction,
    paragraphs: event.paragraphs,
    highlights: event.highlights,
  });
});

const output = path.join(root, "sanity-seed", "seed.ndjson");
mkdirSync(path.dirname(output), { recursive: true });
writeFileSync(output, documents.map((document) => JSON.stringify(document)).join("\n") + "\n");
console.log(`Đã ghi ${documents.length} tài liệu vào ${path.relative(root, output)}`);
