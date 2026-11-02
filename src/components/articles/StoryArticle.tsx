import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import type { ArticleStory, Speaker, StoryLine } from "@/lib/article-stories";
import { cn } from "@/lib/utils";

/** Câu trích trong ngoặc kép “…” (lời Khổng Tử) được in nghiêng, màu thương hiệu. */
function withQuotes(text: string) {
  return text.split(/(“[^”]+”)/g).map((part, index) =>
    part.startsWith("“") ? (
      <em key={index} className="font-serif not-italic text-brand">
        {part}
      </em>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function Line({ line, speakers, emphasis }: { line: StoryLine; speakers: Record<Speaker, string>; emphasis?: string }) {
  const isTeacher = line.who === "thay";
  const [before, after] = emphasis && line.text.includes(emphasis) ? line.text.split(emphasis) : [line.text, undefined];
  return (
    <div className="grid gap-1 py-3 md:grid-cols-[88px_1fr] md:gap-6">
      <p
        className={cn(
          "pt-[3px] text-[12px] font-semibold uppercase tracking-[0.16em]",
          isTeacher ? "text-brand" : "text-[#8a93a8]",
        )}
      >
        {speakers[line.who]}
      </p>
      <div>
        {line.cue && <p className="mb-1 text-[14px] text-[#8a8f99]">{line.cue}</p>}
        {/* Lời thầy dùng chữ có chân, giọng chậm rãi; lời trò dùng chữ thường, giọng trẻ. */}
        <p
          className={cn(
            isTeacher
              ? "font-serif text-[19px] leading-[1.7] text-heading md:text-[20px]"
              : "text-[16px] leading-[1.8] text-[#555] md:text-[17px]",
          )}
        >
          {withQuotes(before)}
          {after !== undefined && (
            <>
              <strong className="font-semibold text-brand">{emphasis}</strong>
              {after}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

/** Truyện đối thoại: lời dẫn, lời từng nhân vật, đoạn then chốt và lời kết được trình bày riêng. */
export function StoryArticle({ story }: { story: ArticleStory }) {
  return (
    <div className="mx-auto max-w-[760px]">
      {story.parts.map((part, index) => {
        switch (part.kind) {
          case "lead":
            return (
              <p
                key={index}
                className="mb-10 text-center font-serif text-[24px] font-medium leading-[1.45] text-heading [text-wrap:balance] md:text-[30px]"
              >
                {part.text}
              </p>
            );
          case "chapter":
            return (
              <h2 key={index} className="mb-6 mt-14 font-serif text-[25px] font-medium leading-[1.3] text-brand md:mt-16 md:pl-[112px] md:text-[30px]">
                {part.text}
              </h2>
            );
          case "narration":
            return (
              <p key={index} className="my-6 font-serif text-[18px] leading-[1.75] text-[#6b6f78] md:pl-[112px] md:text-[19px]">
                {part.text}
              </p>
            );
          case "image":
            return (
              <figure key={index} className="my-12 md:my-16">
                <Image
                  src={part.src}
                  alt={part.alt}
                  width={part.width}
                  height={part.height}
                  sizes="(min-width: 768px) 760px, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-[#777]">
                  {part.caption}
                </figcaption>
              </figure>
            );
          case "line":
            return <Line key={index} line={part.line} speakers={story.speakers} />;
          case "highlight":
            return (
              <div key={index} className="my-8 bg-[#eef1fb] px-5 py-4 md:-mx-8 md:px-8 md:py-6">
                {part.lines.map((item, i) => (
                  <Line key={i} line={item} speakers={story.speakers} emphasis={part.key} />
                ))}
              </div>
            );
          case "verse":
            return (
              <figure key={index} className="my-12 bg-[#F7F9FC] px-6 py-10 text-center md:-mx-8 md:py-14">
                <figcaption className="text-[14px] text-[#8a8f99]">{part.cue}</figcaption>
                <blockquote className="mt-5 font-serif text-[23px] font-medium leading-[1.6] text-heading md:text-[30px]">
                  {part.lines.map((verse) => (
                    <p key={verse}>{verse}</p>
                  ))}
                </blockquote>
                {part.source && <p className="mx-auto mt-6 max-w-[520px] text-[13px] leading-relaxed text-[#777]">{part.source}</p>}
              </figure>
            );
          case "moral":
            return (
              <p
                key={index}
                className="mx-auto my-10 max-w-[620px] text-center font-serif text-[23px] font-medium leading-[1.5] text-brand [text-wrap:balance] md:text-[28px]"
              >
                {part.text}
              </p>
            );
          case "note":
            return (
              <div key={index} className="mt-14 border-t border-[#e3e7f0] pt-10 text-center">
                <p className="mx-auto max-w-[600px] text-[16px] leading-[1.8] text-[#666]">{part.text}</p>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-heading">
                  Hoa Viên Bình Dương – Nơi cuộc sống vĩnh hằng
                </p>
                <Link
                  href="/ho-tro/chuan-bi-tu-som"
                  className="mt-8 inline-block bg-[#4453C4] px-[30px] py-[16px] text-[15px] font-extrabold tracking-[2px] text-white shadow-[0_10px_20px_rgba(65,84,125,0.24)] transition-transform hover:-translate-y-0.5"
                >
                  TÌM HIỂU CHUẨN BỊ TỪ SỚM
                </Link>
              </div>
            );
        }
      })}
    </div>
  );
}
