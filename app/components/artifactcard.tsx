"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ExternalLink,
  Eye,
  FileSpreadsheet,
  FileText,
  FileImage,
  Github,
  Video,
} from "lucide-react";

import Lightbox from "yet-another-react-lightbox";

import ProjectGallery from "./gallerry";

interface Artifact {
  title: string;
  description?: string;
  images?: string[];
  file?: string;
  type?: string;
}

export default function ArtifactCard({ item }: { item: Artifact }) {
  const [open, setOpen] = useState(false);
  function getIcon() {
    switch (item.type) {
      case "Excel":
        return <FileSpreadsheet size={15} color="white" />;
      case "PDF":
        return <FileText size={15} color="white" />;
      case "Github":
        return <Github size={15} color="white" />;
      case "Video":
        return <Video size={15} color="white" />;
      default:
        return <FileImage size={15} color="white" />;
    }
  }

  return (
    <div
      className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            overflow-hidden
            "
    >
      <div className="p-5">
        <div className="flex items-center gap-1">
          {getIcon()}

          <h3 className="font-semibold text-white text-sm">{item.title}</h3>
        </div>

        {item.description && (
          <p className="mt-3 text-xs text-zinc-400">{item.description}</p>
        )}

        <div className="mt-4 flex gap-3">
          {item.images && item.images.length > 0 && (
            <button
              onClick={() => setOpen(true)}
              className="
        inline-flex
        h-min
        items-center
        gap-1
        rounded-lg
        bg-white/5
        px-1
        py-1
        text-xs
        text-white
        transition
        hover:bg-[#aea2c6]/20
      "
            >
              <Eye size={10} />
              Preview
            </button>
          )}

          {item.file && (
            <Link
              href={item.file}
              target="_blank"
              className="
        inline-flex
        h-min
        items-center
        gap-1
        rounded-lg
        bg-white/5
        px-1
        py-1
        text-xs
        text-white
        transition
        hover:bg-[#aea2c6]/20
      "
            >
              <ExternalLink size={16} />
              Open File
            </Link>
          )}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={
          item.images?.map((image) => ({
            src: image,
          })) ?? []
        }
      />
    </div>
  );
}
