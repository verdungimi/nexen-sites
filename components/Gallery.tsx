"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";

export default function Gallery() {
  // useQuery must always be called (React hook rules)
  // It will return undefined if Convex is not configured or not available
  const images = useQuery(api.images.getImages) as { _id: string; url: string; title: string; createdAt: number }[] | undefined;

  if (images === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#A8B3C7]">Betöltés...</div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-[#A8B3C7]">Még nincsenek képek a galériában.</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {images.map((img: { _id: string; url: string; title: string; createdAt: number }) => (
        <div key={img._id} className="group relative overflow-hidden rounded-lg bg-[#0F1620] border border-[rgba(255,255,255,0.1)] hover:border-[#50AEDF]/50 transition-all duration-300">
          <div className="relative aspect-square w-full">
            <Image
              src={img.url}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </div>
          <div className="p-4">
            <p className="text-[#EAF0FF] font-semibold text-center">{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
