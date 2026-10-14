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
      </div>
    </section>
  );
}
