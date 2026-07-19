import Image from "next/image";
import Link from "next/link";
import { Github, List } from "lucide-react";

interface Props {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  label: string;
  url: string;
  detail: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  description,
  technologies,
  label,
  url,
  detail,
}: Props) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-5">
      <div className="relative lg:col-span-2">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col p-4 lg:col-span-3">
        <span className="text-[#aea2c6]">{category}</span>

        <h2 className="mt-2 text-lg lg:text-2xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-4 text-zinc-400 text-sm">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-white">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-6 pt-8 text-white items-center text-sm">
          <Link
            href={url}
            target="_blank"
            className="flex bg-white text-[#2e3148] items-center justify-center gap-1 p-2 rounded-3xl"
          >
            {(() => {
              if (label === "Github") return <Github size={15} />;
              if (label === "Test Cases") return <List size={15} />;
            })()}

            {label}
          </Link>

          <Link href={detail}>View Project →</Link>
        </div>
      </div>
    </div>
  );
}
