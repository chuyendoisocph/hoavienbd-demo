import { PREPLAN_INTRO } from "@/lib/preplanning-content";
import { PlusIcon } from "@/components/icons";

export function PreplanIntro() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-[60px] px-6">
        {PREPLAN_INTRO.blocks.map((block) => (
          <div key={block.title}>
            <h2
              className="text-center font-heading font-medium leading-[1.2] text-brand"
              style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
            >
              {block.title}
            </h2>
            <p className="mt-8 text-[16px] leading-[1.9] text-[#666]">{block.body}</p>
            <div className="mt-[30px] flex justify-end">
              <a
                href={block.cta.href}
                className="inline-flex items-center gap-3 text-[18px] font-medium tracking-[2px] text-brand-link"
              >
                {block.cta.label}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                  <PlusIcon className="h-[14px] w-[14px]" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
