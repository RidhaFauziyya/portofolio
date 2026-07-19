"use client";

import {
  ExternalLink,
  Eye,
  FileSpreadsheet,
  FileText,
  FileImage,
} from "lucide-react";

import ArtifactCard from "./artifactcard";

interface Artifact {
  title: string;
  description?: string;
  image: string;
  file?: string;
  type?: string;
}

interface ArtifactSectionProps {
  section: {
    title?: string;
    items: Artifact[];
  };
}

export default function ArtifactSection({ section }: ArtifactSectionProps) {
  return (
    <section className="mt-16">
      {section.title && (
        <h2 className="mb-6 text-2xl font-semibold text-white">
          {section.title}
        </h2>
      )}

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {section.items.map((item) => (
          <ArtifactCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
