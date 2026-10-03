"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import type { GalleryImage } from "@/content/types";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group border-border relative aspect-square overflow-hidden rounded-2xl border bg-white text-left shadow-sm"
            onClick={() => setActiveImage(image)}
            aria-label={`Bild vergrößern: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-sm font-medium text-white">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="text-foreground absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white focus-visible:outline-white"
            aria-label="Schließen"
            onClick={() => setActiveImage(null)}
          >
            <CloseIcon />
          </button>
          <figure
            className="flex max-h-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="100vw"
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white">
              {activeImage.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
