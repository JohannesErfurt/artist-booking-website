"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "@/components/ui/Icons";

type LiteYouTubeProps = {
  youtubeId: string;
  title: string;
};

// Shows only a preview image until the visitor presses play, so the page
// loads fast and nothing is requested from the YouTube player beforehand.
export function LiteYouTube({ youtubeId, title }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="group relative block aspect-video w-full overflow-hidden bg-black"
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 640px"
        className="object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="bg-brand-600 group-hover:bg-brand-700 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition group-hover:scale-110">
          <PlayIcon className="ml-1 h-7 w-7" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-3 text-left text-xs text-white/90">
        Beim Abspielen wird das Video von YouTube geladen.
      </span>
    </button>
  );
}
