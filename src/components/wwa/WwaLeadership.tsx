import { WWA_LEADERS } from "@/lib/wwa-content";
import { cn } from "@/lib/utils";

export function WwaLeadership() {
  return (
    <section className="bg-white pb-[40px]">
      {WWA_LEADERS.map((leader) => {
        const image = (
          <div className={cn("flex justify-center", leader.imageLeft ? "lg:order-1" : "lg:order-2")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full max-w-[420px] rounded-sm object-cover shadow-[0_24px_50px_-28px_rgba(0,0,0,0.5)]"
            />
          </div>
        );
        const text = (
          <div className={leader.imageLeft ? "lg:order-2" : "lg:order-1"}>
            {leader.eyebrow && (
              <p className="text-[14px] uppercase tracking-[0.12em] text-[#888]">{leader.eyebrow}</p>
            )}
            <h3 className="mt-3 font-heading text-[20px] font-bold text-brand md:text-[32px]">
              {leader.name}
            </h3>
            {leader.role && <p className="mt-1 text-[16px] text-[#666]">{leader.role}</p>}
            <p className="mt-6 text-[16px] leading-[1.9] text-[#666]">{leader.bio}</p>
            {leader.quote && (
              <blockquote className="mt-6 border-l-4 border-brand pl-5 text-[16px] italic leading-[1.9] text-[#555]">
                “{leader.quote}”
              </blockquote>
            )}
          </div>
        );
        return (
          <div
            key={leader.name}
            className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2"
          >
            {image}
            {text}
          </div>
        );
      })}
    </section>
  );
}
