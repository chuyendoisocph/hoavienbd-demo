import Image from "next/image";
import { WWA_INTRO } from "@/lib/wwa-content";

export function WwaIntro() {
  return (
    <section className="bg-white pt-[70px]">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <p className="mb-3 text-[15px] uppercase tracking-[0.12em] text-[#999]">
          {WWA_INTRO.eyebrow}
        </p>
        <h2
          className="mb-10 font-heading font-medium leading-[1.2] text-brand"
          style={{ fontSize: "clamp(30px, 4vw, 40px)" }}
        >
          {WWA_INTRO.title}
        </h2>
        {WWA_INTRO.body.map((para) => (
          <p key={para.slice(0, 24)} className="mt-5 text-left text-[16px] leading-[1.9] text-[#666]">
            {para}
          </p>
        ))}
      </div>

      <div className="relative mx-auto mt-12 aspect-[16/9] max-w-[1200px] px-6">
        <Image
          src={WWA_INTRO.map}
          alt="Sơ đồ Hoa Viên Nghĩa Trang Bình Dương"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-contain px-6"
        />
      </div>
    </section>
  );
}
