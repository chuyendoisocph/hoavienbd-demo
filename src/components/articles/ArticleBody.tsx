import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { BodyBlock, BodyFigure, BodyFigurePair } from "@/lib/cms";
import { cn } from "@/lib/utils";

function Figure({ figure, className, imageClassName }: { figure: BodyFigure; className?: string; imageClassName?: string }) {
  return (
    <figure className={cn(figure.narrow && "mx-auto max-w-[520px]", className)}>
      <Image
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        sizes="(max-width: 820px) 100vw, 772px"
        className={imageClassName}
      />
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}

const components: PortableTextComponents = {
  types: {
    figure: ({ value }: { value: BodyFigure }) => <Figure figure={value} />,
    figurePair: ({ value }: { value: BodyFigurePair }) => (
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {value.items.map((item) => (
          <Figure key={item._key} figure={item} className="!my-0" imageClassName="aspect-[3/4] object-cover" />
        ))}
      </div>
    ),
  },
};

/** Thân bài soạn trên Sanity, dùng chung kiểu chữ `article-prose` với bài HTML. */
export function ArticleBody({ body }: { body: BodyBlock[] }) {
  return (
    <div className="article-prose">
      <PortableText value={body} components={components} />
    </div>
  );
}
