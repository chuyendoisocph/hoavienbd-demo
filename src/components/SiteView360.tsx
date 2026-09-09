import { VideoFeature } from "@/components/VideoFeature";
import { SITE_VIEW_360 } from "@/lib/content";

export function SiteView360() {
  return (
    <section
      id="tham-quan-360"
      className="overflow-hidden bg-[#F7F9FC] px-6 pb-[100px] pt-[82px] lg:pb-[130px] lg:pt-[108px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_390px] lg:gap-16">
          <div>
            <p className="mb-4 text-[13px] font-semibold tracking-[5px] text-[#7C8BA7]">
              {SITE_VIEW_360.eyebrow}
            </p>
            <h2 className="max-w-[720px] font-heading text-[34px] font-semibold leading-[1.2] tracking-[1px] text-heading md:text-[50px] md:leading-[1.16]">
              {SITE_VIEW_360.title}
            </h2>
          </div>
          <p className="max-w-[52ch] text-[17px] font-medium leading-[1.75] text-[#687184] lg:pb-1">
            {SITE_VIEW_360.description}
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <VideoFeature
            video={SITE_VIEW_360.video}
            poster={SITE_VIEW_360.poster}
            className="aspect-video max-h-none shadow-[0_28px_65px_-32px_rgba(35,53,91,0.58)] [&_button]:bg-[#4453C4]/90 [&_button]:shadow-[0_12px_30px_rgba(24,36,86,0.35)]"
          />
          <div className="absolute -bottom-6 left-5 bg-[#4453C4] px-6 py-4 text-white shadow-[0_14px_30px_rgba(49,65,149,0.3)] md:left-10 md:px-8 md:py-5">
            <span className="text-[26px] font-semibold leading-none md:text-[34px]">
              VIDEO
            </span>
            <span className="ml-3 text-[12px] font-bold tracking-[2.5px] md:text-[13px]">
              TOÀN CẢNH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
