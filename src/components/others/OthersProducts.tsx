"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, type OtherProduct } from "@/lib/others-content";
import { cn } from "@/lib/utils";

function Carousel({
  images,
  title,
  active,
  onSelect,
}: {
  images: string[];
  title: string;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Hiển thị hình ${i + 1}`}
              aria-current={i === active}
              onClick={() => onSelect(i)}
              className="grid h-6 w-6 place-items-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === active ? "bg-brand" : "bg-black/20",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function OthersProductBlock({ product }: { product: OtherProduct }) {
  const [active, setActive] = useState(0);

  const carousel = (
    <div className={product.imageLeft ? "lg:order-1" : "lg:order-2"}>
      <Carousel
        images={product.images}
        title={product.title}
        active={active}
        onSelect={setActive}
      />
    </div>
  );

  const text = (
    <div className={product.imageLeft ? "lg:order-2" : "lg:order-1"}>
      <p className="text-[15px] uppercase tracking-[0.12em] text-[#888]">{product.eyebrow}</p>
      <h2 className="font-heading mt-4 text-[30px] font-medium text-brand md:text-[40px]">
        {product.title}
      </h2>
      {product.body.map((para) => (
        <p key={para.slice(0, 24)} className="mt-5 text-[16px] leading-[1.9] text-[#666]">
          {para}
        </p>
      ))}
    </div>
  );

  return (
    <div className={cn(product.gray && "bg-[#d6d6d6]")}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {carousel}
        {text}
      </div>
    </div>
  );
}

export function OthersProducts() {
  return (
    <section className="bg-white">
      {PRODUCTS.map((product) => (
        <OthersProductBlock key={product.title} product={product} />
      ))}
    </section>
  );
}
