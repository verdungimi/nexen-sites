"use client";

import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Section from "@/components/site/Section";

interface GalleryImage {
  _id: string;
  url: string;
  title: string;
  createdAt: number;
}

// Below this the gallery looks unfinished, so the page simply leaves it out.
const MIN_IMAGES = 3;

/**
 * Admin-uploaded project images (Convex `images` table).
 * Needs a ConvexProvider: only render it when NEXT_PUBLIC_CONVEX_URL is set.
 * Titles are used as alt text only; nothing is captioned, so no client names show on the page.
 */
export default function Gallery() {
  const images = useQuery(api.images.getImages) as GalleryImage[] | undefined;

  if (!images || images.length < MIN_IMAGES) {
    return null;
  }

  return (
    <Section aria-labelledby="galeria">
      <h2 id="galeria" className="sr-only">
        Képek az elkészült munkákból
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {images.map((image) => (
          <li
            key={image._id}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-rule bg-graphite-raised"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
