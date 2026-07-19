"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import { Search } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <div className="mt-4 flex flex-wrap gap-5">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => {
            setIndex(index);
            setOpen(true);
          }}
          className="
            group
            relative
            h-32
            w-full
            sm:w-[18rem]
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/5
            transition-all
            duration-300
            hover:border-[#aea2c6]/50
            hover:shadow-xl
            hover:shadow-[#aea2c6]/10
          "
        >
          <Image
            src={image}
            alt={`Screenshot ${index + 1}`}
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
            transition
            group-hover:bg-black/40
            group-hover:opacity-100
            "
          >
            <Search size={28} />
          </div>
        </button>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </div>
  );
}
