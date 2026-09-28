import Image from "next/image";

export type EventItem = {
  slug: string;
  title: string;
  occasion: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

type FeaturedEventProps = {
  event: EventItem;
};

type AnnualEventsGridProps = {
  events: EventItem[];
};

export function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <section className="bg-brand px-6 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <header className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
            Sự kiện nổi bật
          </p>
          <h2 className="mt-3 font-display text-[34px] font-semibold leading-[1.18] text-white sm:text-[42px] lg:text-[52px]">
            Những dịp sum vầy đầy ý nghĩa
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-7 text-white/80 sm:text-[18px] sm:leading-8">
            Cùng Hoa Viên Bình Dương gìn giữ truyền thống, tưởng nhớ nguồn cội
            và trao gửi bình an qua những hoạt động văn hóa thường niên.
          </p>
        </header>

        <article id={event.slug} className="scroll-mt-28">
          <a
            href={`#${event.slug}`}
            aria-label={`Xem sự kiện ${event.title}`}
            className="group relative mt-10 block aspect-[16/9] min-h-[390px] overflow-hidden rounded-[2px] bg-footer-navy shadow-[0_24px_70px_rgba(20,23,54,0.34)] outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand sm:min-h-0 lg:mt-12 lg:aspect-[2/1]"
          >
            <Image
              src={event.image}
              alt={event.imageAlt}
              fill
              sizes="(max-width: 1199px) 100vw, 1180px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111326]/95 via-[#111326]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 max-w-[780px] p-6 sm:p-9 lg:p-12">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/75 sm:text-[13px]">
                {event.occasion}
              </p>
              <h3 className="mt-2 font-display text-[28px] font-semibold leading-tight text-white sm:text-[36px] lg:text-[44px]">
                {event.title}
              </h3>
              <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-white/80 sm:text-[17px]">
                {event.description}
              </p>
              <span className="mt-5 inline-flex border-b border-white/50 pb-1 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors group-hover:border-white sm:text-sm">
                Xem sự kiện →
              </span>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}

export function AnnualEventsGrid({ events }: AnnualEventsGridProps) {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-link sm:text-sm">
            Dấu ấn văn hóa
          </p>
          <h2 className="mt-3 font-display text-[34px] font-semibold leading-[1.18] text-heading sm:text-[42px] lg:text-[52px]">
            Hoạt động thường niên
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#666] sm:text-[18px] sm:leading-8">
            Mỗi sự kiện là một dịp để gia đình sum họp, tri ân tổ tiên và cùng
            nhau tiếp nối những giá trị tốt đẹp của người Việt.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {events.map((event) => (
            <article
              key={event.slug}
              id={event.slug}
              className="group scroll-mt-28 border border-[#e4e7ef] bg-white shadow-[0_12px_34px_rgba(28,38,75,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(28,38,75,0.13)]"
            >
              <a
                href={`#${event.slug}`}
                aria-label={`Xem sự kiện ${event.title}`}
                className="block h-full outline-none focus-visible:ring-4 focus-visible:ring-brand focus-visible:ring-inset"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-section-light">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 574px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 lg:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.17em] text-brand-link sm:text-[13px]">
                    {event.occasion}
                  </p>
                  <h3 className="mt-2 font-display text-[26px] font-semibold leading-[1.25] text-heading transition-colors group-hover:text-brand sm:text-[30px]">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#666] sm:text-[16px]">
                    {event.description}
                  </p>
                  <span className="mt-5 inline-flex text-[13px] font-bold uppercase tracking-[0.15em] text-brand-link">
                    Xem sự kiện →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
