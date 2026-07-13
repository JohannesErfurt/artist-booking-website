"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/content/types";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group border-border relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white text-left"
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="text-foreground absolute top-4 right-4 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-medium"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="p-4 text-sm text-white">{activeImage.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
