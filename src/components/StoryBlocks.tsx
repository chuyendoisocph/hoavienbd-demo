import { Fragment, type ReactNode } from "react";

import type { StoryBlock } from "@/lib/brand-content";

type LeadBlock = { lead: string; text: string };

/** Đổi "**chữ**" trong nội dung thành chữ in đậm. */
function withBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-heading">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

/** Khẩu hiệu, câu chốt: không đóng khung, chữ lớn giữa hai vạch vàng ngắn. */
function Quote({ lines }: { lines: string[] }) {
  return (
    <figure className="my-12 text-center md:my-14">
      <span aria-hidden="true" className="mx-auto block h-px w-12 bg-[#c9a24a]" />
      <blockquote className="mx-auto mt-6 max-w-[34rem] font-serif text-[19px] font-medium leading-[1.55] text-heading [text-wrap:balance] md:text-[26px]">
        {lines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </blockquote>
      <span aria-hidden="true" className="mx-auto mt-6 block h-px w-12 bg-[#c9a24a]" />
    </figure>
  );
}

/**
 * Câu thơ có tên tác giả: trình bày như một trang thơ. Thơ lục bát nên câu sáu chữ thụt vào,
 * câu tám chữ thẳng hàng; dấu ngoặc lớn mờ phía sau làm nền, tên tác giả ký bên dưới.
 */
function Poem({ lines, cite }: { lines: string[]; cite: string }) {
  return (
    <figure className="relative -mx-5 my-12 overflow-hidden bg-[linear-gradient(180deg,#fbf9f4_0%,#f6f1e6_100%)] px-5 py-10 md:mx-0 md:my-14 md:rounded-[4px] md:px-12 md:py-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-3 select-none font-serif text-[110px] leading-none text-[#c9a24a]/20 md:left-6 md:top-0 md:text-[150px]"
      >
        “
      </span>
      <span aria-hidden="true" className="mx-auto block h-px w-12 bg-[#c9a24a]" />
      <blockquote className="relative mx-auto mt-6 w-fit font-serif text-[17.5px] font-medium leading-[1.9] text-heading md:text-[25px] md:leading-[1.8]">
        {lines.map((line, index) => (
          <p key={line} className={index % 2 === 0 ? "pl-[1.6em]" : undefined}>
            {line}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-6 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b08a35]">
        — {cite}
      </figcaption>
    </figure>
  );
}

/** Câu khép lại bài: không đóng khung, chữ lớn màu thương hiệu, để khác với các câu trích phía trên. */
function Finale({ lines }: { lines: string[] }) {
  return (
    <p className="mb-2 mt-12 text-center font-serif text-[24px] font-medium leading-[1.45] text-brand [text-wrap:balance] md:text-[30px]">
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </p>
  );
}

function Heading({ text, index }: { text: string; index: number }) {
  return (
    <div className="mb-5 mt-14 first:mt-0">
      <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#b08a35]">
        <span>Phần {String(index).padStart(2, "0")}</span>
        <span aria-hidden="true" className="h-px w-10 bg-[#d9c79c]" />
      </p>
      <h2 className="mt-2 font-serif text-[25px] font-medium leading-[1.3] !text-brand md:text-[30px]">{text}</h2>
    </div>
  );
}

/** Các giá trị cốt lõi (TÂM – Thấu hiểu và tận tâm. …) xếp thành ô, chữ cái đầu làm điểm nhấn. */
function LeadGrid({ items }: { items: LeadBlock[] }) {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const [name, ...rest] = item.lead.split(" – ");
        return (
          <div key={item.lead} className="border border-[#e8ecf4] bg-white p-5 shadow-[0_10px_30px_-24px_rgba(24,39,87,0.5)] last:md:col-span-2">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-[30px] font-medium leading-none text-brand">{name}</span>
              <span className="h-px flex-1 bg-[#e6dcc4]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-[15px] font-semibold text-heading">{rest.join(" – ").replace(/\.$/, "")}</p>
            <p className="mt-2 text-[15px] leading-[1.75] text-[#666]">{withBold(item.text)}</p>
          </div>
        );
      })}
    </div>
  );
}

/** Hiển thị bài viết dài trong cửa sổ "Đọc thêm". */
export function StoryBlocks({ blocks }: { blocks: StoryBlock[] }) {
  const nodes: ReactNode[] = [];
  let section = 0;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (typeof block === "string") {
      nodes.push(<p key={i} className="mb-5">{withBold(block)}</p>);
    } else if ("heading" in block) {
      section += 1;
      nodes.push(<Heading key={i} text={block.heading} index={section} />);
    } else if ("quote" in block) {
      const isLast = i === blocks.length - 1;
      nodes.push(
        block.cite ? (
          <Poem key={i} lines={block.quote} cite={block.cite} />
        ) : isLast ? (
          <Finale key={i} lines={block.quote} />
        ) : (
          <Quote key={i} lines={block.quote} />
        ),
      );
    } else {
      // Gom các khối có nhãn liền nhau thành một lưới ô.
      const items: LeadBlock[] = [];
      let j = i;
      for (; j < blocks.length; j++) {
        const next = blocks[j];
        if (typeof next === "string" || !("lead" in next)) break;
        items.push(next);
      }
      nodes.push(<LeadGrid key={i} items={items} />);
      i = j - 1;
    }
  }
  return nodes;
}
