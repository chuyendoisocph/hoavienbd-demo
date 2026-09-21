import { TESTIMONIALS, TESTIMONIALS_INTRO } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="min-h-[1619px] bg-white pb-[120px] pt-[54px] md:min-h-[1183px] md:pb-[240px]">
      <h2 className="mb-5 text-center font-heading text-[30px] font-bold leading-[1.2] text-heading md:text-[52px] md:leading-[62px]">
        {TESTIMONIALS_INTRO.title}
      </h2>
      <p className="text-[#666] text-center max-w-[760px] mx-auto mb-[50px] px-6 leading-[1.7]">
        {TESTIMONIALS_INTRO.body}
      </p>

      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.title}
            className="bg-white shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)] p-7"
          >
            <p className="font-bold text-heading text-[17px] mb-3">
              {testimonial.title}
            </p>
            <p className="italic font-serif text-[#555] text-[16px] leading-[1.7]">
              {testimonial.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
