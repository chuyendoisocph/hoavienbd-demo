import Image from "next/image";
import { CARING } from "@/lib/content";

export function CaringSection() {
  return (
    <section className="relative mb-[30px] flex h-[864px] items-center overflow-hidden md:mb-0 md:h-[798px]">
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
            className="mb-6 font-heading font-bold leading-[1.2] text-white"
            style={{ fontSize: "clamp(30px,7vw,60px)" }}
          >
            {CARING.title}
          </h2>
          <p className="text-base leading-relaxed text-white">{CARING.body}</p>
        </div>
      </div>
    </section>
  );
}
