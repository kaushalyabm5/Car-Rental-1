"use client";

import { useState } from "react";
import img1 from "@/assets/gallery/1.jpg";
import img2 from "@/assets/gallery/2.jpg";
import img3 from "@/assets/gallery/3.jpg";
import img4 from "@/assets/gallery/4.jpg";
import img5 from "@/assets/gallery/5.jpg";
import img6 from "@/assets/gallery/6.jpg";
import img7 from "@/assets/gallery/7.jpg";
import img8 from "@/assets/gallery/8.jpg";
import img9 from "@/assets/gallery/9.jpg";

interface GalleryPhoto {
  src: string;
  alt: string;
  ratio: "16:9" | "1:1";
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { src: img1.src, alt: "Master Car Rental gallery photo 01", ratio: "16:9" },
  { src: img2.src, alt: "Master Car Rental gallery photo 02", ratio: "16:9" },
  {
    src: img3.src,
    alt: "Master Car Rental gallery photo 03 (combined 3rd & 6th slot)",
    ratio: "1:1",
  },
  { src: img4.src, alt: "Master Car Rental gallery photo 04", ratio: "16:9" },
  { src: img5.src, alt: "Master Car Rental gallery photo 05", ratio: "16:9" },
  { src: img6.src, alt: "Master Car Rental gallery photo 06", ratio: "16:9" },
  { src: img7.src, alt: "Master Car Rental gallery photo 07", ratio: "1:1" },
  { src: img8.src, alt: "Master Car Rental gallery photo 08", ratio: "1:1" },
  { src: img9.src, alt: "Master Car Rental gallery photo 09", ratio: "1:1" },
];

function CollageCard({
  photo,
  className = "",
}: {
  photo: GalleryPhoto;
  className?: string;
}) {
  const baseRatio = photo.ratio === "1:1" ? "aspect-square" : "aspect-video";

  return (
    <div
      className={`group relative w-full ${baseRatio} ${className} rounded-xl overflow-hidden bg-neutral-100 shadow-[0_4px_18px_rgba(0,0,0,0.06)]`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}

export default function GallerySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="gallery"
      className="pt-30 pb-20 px-6 bg-white text-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[42px] font-normal tracking-tight leading-[1.15] text-[#0A0A0A]">
            Real Cars, Real Experiences
          </h2>
          <p className="mt-3 text-xs md:text-sm text-neutral-500 leading-relaxed">
            See real photos of our fleet, deliveries, events, and customer
            experiences across Sri Lanka.
          </p>
        </div>

        {/* 3-Column Collage Box (max-w-7xl, Level Bottom, Strictly 16:9 & 1:1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Column 1: 16:9 (1st) + 16:9 (4th) + 1:1 Bottom (7th) */}
          <div className="flex flex-col gap-4">
            <CollageCard photo={GALLERY_PHOTOS[0]} />
            <CollageCard photo={GALLERY_PHOTOS[3]} />
            <CollageCard photo={GALLERY_PHOTOS[6]} className="md:flex-1" />
          </div>

          {/* Column 2: 16:9 (2nd) + 16:9 (5th) + 16:9 (6th) + 1:1 Bottom (8th) */}
          <div className="flex flex-col gap-4">
            <CollageCard photo={GALLERY_PHOTOS[1]} />
            <CollageCard photo={GALLERY_PHOTOS[4]} />
            <CollageCard photo={GALLERY_PHOTOS[5]} />
            <CollageCard photo={GALLERY_PHOTOS[7]} className="md:flex-1" />
          </div>

          {/* Column 3: Single 1:1 Image (Combined 3rd & 6th Slot) + 1:1 Bottom (9th) */}
          <div className="flex flex-col gap-4">
            <CollageCard photo={GALLERY_PHOTOS[2]} />
            <CollageCard photo={GALLERY_PHOTOS[8]} className="md:flex-1" />
          </div>
        </div>

        {/* Centered Pill Button at the End */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] hover:bg-black text-white text-xs md:text-sm font-medium px-6 py-2.5 transition-colors duration-300 cursor-pointer"
          >
            {expanded ? "Viewing Full Gallery" : "View Full Gallery"}
          </button>
        </div>
      </div>
    </section>
  );
}