"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject } from "app/lib/project";
import ProjectHero from "app/components/projecthero";
import ProjectRenderer from "app/components/projectrender";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  const router = useRouter();

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-40 w-full lg:w-4/5 mx-auto overflow-hidden">
      <button
        onClick={() => router.back()}
        className="
        mb-8
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        text-zinc-300
        backdrop-blur
        transition
        hover:border-[#aea2c6]/50
        hover:text-white
      "
      >
        <ArrowLeft size={16} />
        Back
      </button>
      <ProjectHero project={project} />

      <ProjectRenderer project={project} />
    </div>
  );
}
