import Link from "next/link";
import { YouTubeFeature } from "@/components/YouTubeFeature";
import { SITE_VIEW_360 } from "@/lib/content";

export function SiteView360() {
  return (
    <section
      id="tham-quan-360"
      className="scroll-mt-[80px] overflow-hidden bg-[#F7F9FC] px-6 pb-[100px] pt-[82px] md:scroll-mt-[96px] lg:pb-[130px] lg:pt-[108px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_390px] lg:gap-16">
          <div>
            <h2 className="max-w-[720px] font-heading text-[30px] font-semibold leading-[1.2] text-heading md:text-[50px] md:leading-[1.16]">
              {SITE_VIEW_360.title}
            </h2>
          </div>
          <p className="max-w-[52ch] text-[17px] font-medium leading-[1.75] text-[#687184] lg:pb-1">
            {SITE_VIEW_360.description}
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <YouTubeFeature
            videoId={SITE_VIEW_360.videoId}
            title={SITE_VIEW_360.videoTitle}
            poster={SITE_VIEW_360.poster}
            className="shadow-[0_28px_65px_-32px_rgba(35,53,91,0.58)]"
          />
        </div>
        <p className="mt-5 text-right text-[14px] text-[#687184]">
          Không xem được video?{" "}
          <a
            href={`https://www.youtube.com/watch?v=${SITE_VIEW_360.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-link underline underline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Xem trên YouTube
          </a>
        </p>
        <div className="mt-9 flex flex-col items-start justify-between gap-5 border-t border-[#dce3ec] pt-7 sm:flex-row sm:items-center">
          <p className="max-w-[58ch] text-[16px] leading-relaxed text-[#4d596b]">
            Muốn tự mình nhìn quanh từng khu vực? Khám phá tour ảnh 360° được chụp thực tế tại Hoa Viên Bình Dương.
          </p>
          <Link
            href="/tham-quan-360"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-brand px-6 py-3 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#3543ab] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Tham quan 360°
          </Link>
        </div>
      </div>
    </section>
  );
}
