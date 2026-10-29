import Image from "next/image";
import { CARING } from "@/lib/brand-content";
import { StoryBlocks } from "@/components/StoryBlocks";
import { StoryDialog } from "@/components/StoryDialog";

export function CaringSection() {
  return (
    <section className="print-caring relative mb-[30px] flex min-h-[864px] items-center overflow-hidden py-20 md:mb-0 md:min-h-[798px]">
      <Image
        src={CARING.background}
        alt=""
        fill
        sizes="100vw"
        data-parallax
        className="absolute inset-0 h-full w-full scale-[1.15] object-cover object-[68%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-black/45 md:bg-[linear-gradient(90deg,rgba(8,14,20,0.68)_0%,rgba(8,14,20,0.46)_45%,rgba(8,14,20,0.16)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 text-white lg:px-8">
        <div className="mx-auto max-w-[680px] text-center md:mx-0 md:text-left">
          <h2
            className="mb-6 font-accent font-medium leading-[1.15] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)]"
            style={{ fontSize: "clamp(34px,8vw,60px)" }}
          >
            {CARING.title}
          </h2>
          <p className="text-base leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">{CARING.body}</p>
          <StoryDialog
            id="caring-story"
            eyebrow="Hoa Viên Bình Dương"
            title={CARING.title}
            lead={CARING.body}
            image={CARING.background}
            imagePosition="62% 28%"
            theme="dark"
            align="md"
          >
            <StoryBlocks blocks={CARING.details} />
          </StoryDialog>
        </div>
      </div>
    </section>
  );
}
