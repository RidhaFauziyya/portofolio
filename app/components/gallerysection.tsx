"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Search } from "lucide-react";

interface GallerySectionProps {
  section: {
    title?: string;
    images: string[];
  };
}

export default function GallerySection({ section }: GallerySectionProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="mt-16">
      {/* Title opsional */}
      {section.title && (
        <h2 className="mb-6 text-2xl font-semibold text-white">
          {section.title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {section.images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="
              group
              relative
              aspect-video
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur
              transition-all
              duration-300
              hover:border-[#aea2c6]/50
              hover:shadow-xl
              hover:shadow-[#aea2c6]/10
            "
          >
            <Image
              src={image}
              alt={`Gallery ${i + 1}`}
              fill
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/0
                opacity-0
                transition-all
                duration-300
                group-hover:bg-black/40
                group-hover:opacity-100
              "
            >
              <div
                className="
                  rounded-full
                  bg-white/10
                  p-3
                  backdrop-blur-md
                "
              >
                <Search size={26} />
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={section.images.map((img) => ({
          src: img,
        }))}
      />
    </section>
  );
}
