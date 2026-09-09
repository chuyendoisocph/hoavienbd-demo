"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface VideoFeatureProps {
  video: string;
  poster: string;
  className?: string;
}

export function VideoFeature({ video, poster, className }: VideoFeatureProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden cursor-pointer shadow-[0_30px_40px_-20px_rgba(0,0,0,0.35)]",
        className,
      )}
      onClick={() => {
        if (!playing) setPlaying(true);
      }}
    >
      {playing ? (
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          <img src={poster} alt="" className="w-full h-full object-cover" />
          <button
            type="button"
            aria-label="Phát video"
            className="group absolute left-1/2 top-1/2 grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-transparent transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:h-[80px] sm:w-[80px]"
          >
            <PlayIcon className="translate-x-[2px] text-white" style={{ fontSize: "28px" }} />
          </button>
        </>
      )}
    </div>
  );
}
