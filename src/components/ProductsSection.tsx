import Image from "next/image";

import { PRODUCTS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProductsSection() {
  return (
    <section className="bg-white lg:min-h-[1018px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-[15px] py-[30px] lg:grid-cols-[45%_55%] lg:gap-12 lg:px-6 lg:py-[115px]">
        <div className="text-center lg:text-left">
          <h2 className="mb-[15px] font-heading text-[30px] font-semibold leading-[1.2] text-heading md:text-[52px] md:leading-[78px]">
            {PRODUCTS.title}
          </h2>
          <ul data-stagger className="inline-block list-disc pl-6 text-left text-[#666]">
            {PRODUCTS.items.map((item) => (
              <li
                key={item.label}
                className="text-[18px] leading-[38px] text-[#666] md:text-[22px] md:leading-[40px]"
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-col gap-4 lg:mx-0">
            <a
              href="/dich-vu/phan-mo"
              className={cn(
                "border border-black/15 px-5 py-[14px] text-center",
                "whitespace-nowrap text-[15px] tracking-[1.5px] text-brand-link sm:px-[30px] sm:text-[18px] sm:tracking-[2px]",
                "transition-colors hover:bg-neutral-100",
              )}
            >
              XEM SẢN PHẨM PHẦN MỘ
            </a>
            <a
              href="#tham-quan-360"
              className={cn(
                "bg-brand px-[30px] py-[15px] text-center",
                "text-[18px] font-extrabold tracking-[2px] text-white",
                "shadow-[0_10px_20px_rgba(65,84,125,0.24)]",
                "transition-transform hover:-translate-y-0.5",
              )}
            >
              XEM TOÀN CẢNH
            </a>
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden lg:h-[620px]">
          <Image
            src={PRODUCTS.image}
            alt={PRODUCTS.imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
