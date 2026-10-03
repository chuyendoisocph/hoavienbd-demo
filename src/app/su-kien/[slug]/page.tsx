import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { HOA_VIEN_EVENTS, getEventBySlug } from "@/lib/events-content";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return HOA_VIEN_EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const event = getEventBySlug((await params).slug);

  if (!event) return {};

  return {
    title: `${event.title} | Hoa Viên Bình Dương`,
    description: event.description,
    alternates: { canonical: `/su-kien/${event.slug}` },
    openGraph: {
      title: `${event.title} | Hoa Viên Bình Dương`,
      description: event.description,
      url: `/su-kien/${event.slug}`,
      images: [{ url: event.image, alt: event.imageAlt }],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const event = getEventBySlug((await params).slug);

  if (!event) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16 min-[980px]:pt-[75px]">
        <section className="relative min-h-[440px] overflow-hidden bg-[#171728] md:min-h-[560px]">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/90 via-[#151937]/45 to-black/20" />
          <div className="relative mx-auto flex min-h-[440px] max-w-5xl flex-col items-center justify-end px-5 pb-14 text-center text-white md:min-h-[560px] md:pb-20">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80 md:text-[13px]">
              {event.occasion}
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-[42px] font-medium leading-[1.08] text-white md:text-[66px]">
              {event.title}
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/su-kien"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand transition-colors hover:text-[#3544b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <span aria-hidden="true">←</span> Tất cả sự kiện
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div>
              <p className="font-heading text-[24px] leading-[1.65] text-[#40445a] md:text-[28px]">
                {event.introduction}
              </p>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-[#626675]">
                {event.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="h-fit border-t-4 border-brand bg-section-light px-7 py-8">
              <h2 className="font-heading text-[26px] font-medium text-heading">
                Điểm chính
              </h2>
              <ul className="mt-5 space-y-4">
                {event.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[15px] leading-[1.7] text-[#626675]">
                    <span className="mt-[10px] size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <ConsultationDialog
                title="Liên hệ lịch sự kiện"
                interest={event.title}
                description="Quý khách vui lòng liên hệ để được cập nhật thời gian, hướng dẫn tham dự và các thông tin mới nhất của sự kiện."
                triggerClassName="mt-7 inline-flex min-h-12 w-full items-center justify-center bg-brand px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#3544b8]"
              >
                Liên hệ lịch sự kiện
              </ConsultationDialog>
            </aside>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

