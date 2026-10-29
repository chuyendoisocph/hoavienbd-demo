import { CultureCarousel } from "@/components/CultureCarousel";
import { StoryBlocks } from "@/components/StoryBlocks";
import { StoryDialog } from "@/components/StoryDialog";
import { CULTURE } from "@/lib/brand-content";

// Dựng trên máy chủ: chỉ thẻ ảnh bên trái cần chạy trên trình duyệt, bài viết thì không.
export function CultureSection() {
  return (
    <section className="print-culture bg-white lg:min-h-[547px]">
      <div className="mx-auto grid max-w-[1282px] items-center gap-8 px-[15px] py-[30px] lg:grid-cols-[42%_1fr] lg:gap-[80px] lg:py-[27px]">
        <CultureCarousel />

        {/* RIGHT: static text */}
        <div className="mx-auto max-w-[640px] text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="text-[15px] font-normal uppercase tracking-[0.12em] text-[#666]">
            {CULTURE.eyebrow}
          </p>
          <h2 className="mt-3 font-accent text-[30px] font-medium leading-[1.2] md:leading-[1.15] text-brand md:text-[52px]">
            {CULTURE.title}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.7] text-[#666]">{CULTURE.body}</p>
          <StoryDialog
            id="culture-story"
            eyebrow={CULTURE.eyebrow}
            title="Một đời người khép lại – Một lời ủy thác bắt đầu"
            lead={CULTURE.body}
            image="/images/hvbd/park-aerial-roundabout.jpg"
          >
            <StoryBlocks blocks={CULTURE.details} />
          </StoryDialog>
        </div>
      </div>
    </section>
  );
}
