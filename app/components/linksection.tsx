import {
  ExternalLink,
  Github,
  Figma,
  Award,
  FileSpreadsheet,
} from "lucide-react";
import { title } from "process";

interface LinkSectionProps {
  section: {
    title: string;
    github?: string;
    demo?: string;
    figma?: string;
    certificate?: string;
    testcase?: string;
  };
}

export default function LinkSection({ section }: LinkSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        {section.title}
      </h2>

      <div className="flex flex-wrap gap-4">
        {section.github && (
          <a
            href={section.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#aea2c6]/50 hover:bg-white/[0.08] text-white"
          >
            <Github size={18} />
            GitHub
          </a>
        )}

        {section.demo && (
          <a
            href={section.demo}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#aea2c6]/50 hover:bg-white/[0.08] text-white"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}

        {section.figma && (
          <a
            href={section.figma}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#aea2c6]/50 hover:bg-white/[0.08] text-white"
          >
            <Figma size={18} />
            Figma
          </a>
        )}

        {section.certificate && (
          <a
            href={section.certificate}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#aea2c6]/50 hover:bg-white/[0.08] text-white"
          >
            <Award size={18} />
            Certificate
          </a>
        )}

        {section.testcase && (
          <a
            href={section.testcase}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition hover:border-[#aea2c6]/50 hover:bg-white/[0.08] text-white"
          >
            <FileSpreadsheet size={18} />
            Test Case
          </a>
        )}
      </div>
    </section>
  );
}
