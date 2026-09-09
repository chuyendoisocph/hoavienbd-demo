import { VideoFeature } from "@/components/VideoFeature";
import { WATCH_VIDEO } from "@/lib/content";

export function WatchVideo() {
  return (
    <section className="bg-white px-[15px] pb-[114px] pt-[30px] text-center md:px-6 md:pb-[90px] md:pt-[60px]">
      <p className="mb-[30px] text-[15px] uppercase tracking-[6px] text-[#999]">
        XEM VIDEO
      </p>
      <VideoFeature
        video={WATCH_VIDEO.video}
        poster={WATCH_VIDEO.poster}
        className="mx-auto max-w-[1180px] aspect-[16/9]"
      />
    </section>
  );
}
