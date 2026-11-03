import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AnnualEventsGrid, FeaturedEvent } from "@/components/events/EventSections";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsInvitation, EventsVideo } from "@/components/events/EventsInvitation";
import { getEvents } from "@/lib/cms";
import { pageMetadata } from "@/lib/seo";
import { EVENTS_HERO } from "@/lib/events-content";

export const revalidate = 3600;

const title = "Sự Kiện Hoa Viên | Hoa Viên Bình Dương";
const description =
  "Cập nhật các hoạt động văn hóa thường niên tại Hoa Viên Bình Dương: Lễ Cầu Siêu – Cầu An Tiết Thanh Minh, Giỗ Tổ Hùng Vương, Vu Lan và Tảo Mộ Cuối Năm.";

export const metadata: Metadata = pageMetadata("/su-kien", {
  title,
  description,
  image: {
    url: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg",
    width: 1448,
    height: 1086,
    alt: "Đại lễ Cầu Siêu – Cầu An tại Hoa Viên Bình Dương",
  },
});

export default async function EventsPage() {
  const events = await getEvents();
  const featured = events.find((event) => event.featured) ?? events[0];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <EventsHero {...EVENTS_HERO} />
        {featured && <FeaturedEvent event={featured} />}
        <AnnualEventsGrid events={events.filter((event) => event !== featured)} />
        <EventsInvitation
          image="/images/hvbd/dai-le-vu-lan.jpg"
          imageAlt="Gia đình tham dự Đại lễ Vu Lan tại Hoa Viên Bình Dương"
        />
        <EventsVideo
          title="Một không gian xanh cho những dịp sum vầy"
          video="/videos/toan-canh-dji0304-1080.mp4"
          poster="/images/hvbd/linh-hoa-tue-dan-2.jpg"
        />
      </main>
      <SiteFooter />
    </>
  );
}
