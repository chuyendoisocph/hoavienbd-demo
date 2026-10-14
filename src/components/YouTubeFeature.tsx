"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface YouTubeFeatureProps {
  videoId: string;
  title: string;
  poster: string;
  className?: string;
}

export function YouTubeFeature({ videoId, title, poster, className }: YouTubeFeatureProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-black", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 1180px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Phát ${title}`}
            className="group absolute inset-0 grid place-items-center bg-black/20 transition-colors hover:bg-black/30 focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-white bg-brand/90 text-white shadow-[0_12px_30px_rgba(24,36,86,0.35)] transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
              <PlayIcon className="translate-x-[2px] text-[28px]" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
