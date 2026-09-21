import { CAREER } from "@/lib/contact-content";

export function ContactCareer() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Image left */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CAREER.image}
            alt={CAREER.title}
            className="w-full rounded-sm object-cover shadow-[0_24px_50px_-28px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Text right */}
        <div>
          <p className="text-[15px] uppercase tracking-[0.12em] text-[#999]">{CAREER.eyebrow}</p>
          <h2 className="mt-3 font-heading text-[30px] font-medium text-brand md:text-[38px]">
            {CAREER.title}
          </h2>
          {CAREER.body.map((para) => (
            <p key={para.slice(0, 24)} className="mt-5 text-[16px] leading-[1.9] text-[#666]">
              {para}
            </p>
          ))}
          <a
            href={CAREER.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-none bg-brand px-9 py-3 text-[14px] uppercase tracking-[2px] text-white transition-colors hover:bg-brand/90"
          >
            {CAREER.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
