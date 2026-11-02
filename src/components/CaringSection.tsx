import Image from "next/image";
import { CARING } from "@/lib/brand-content";
import { StoryBlocks } from "@/components/StoryBlocks";
import { StoryDialog } from "@/components/StoryDialog";

export function CaringSection() {
  return (
    <section className="print-caring relative overflow-hidden bg-[#242d73] md:flex md:min-h-[798px] md:items-center md:py-20">
      {/* Điện thoại: ảnh ở trên, chữ trên nền xanh ở dưới để không đè lên người trong ảnh. Máy tính: chữ phủ lên ảnh. */}
      <div className="relative aspect-[4/3] overflow-hidden md:absolute md:inset-0 md:aspect-auto">
        <Image
          src={CARING.background}
          alt=""
          fill
          sizes="100vw"
          data-parallax
          className="absolute inset-0 h-full w-full object-cover object-right md:scale-[1.15] md:object-center"
        />
      </div>
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(8,14,20,0.68)_0%,rgba(8,14,20,0.46)_45%,rgba(8,14,20,0.16)_100%)] md:block" />
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 py-10 text-white md:py-0 lg:px-8">
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
