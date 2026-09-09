import { CARING } from "@/lib/content";

export function CaringSection() {
  return (
    <section className="relative mb-[30px] flex h-[864px] items-center justify-center overflow-hidden md:mb-0 md:h-[798px]">
      <img
        src={CARING.background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 max-w-[780px] px-[15px] text-center text-white">
        <h2
          className="font-heading font-bold leading-[1.2] mb-6 text-white"
          style={{ fontSize: "clamp(30px,7vw,60px)" }}
        >
          {CARING.title}
        </h2>
        <p className="text-white text-base leading-relaxed">{CARING.body}</p>
      </div>
    </section>
  );
}
