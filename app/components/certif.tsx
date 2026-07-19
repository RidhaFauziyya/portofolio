import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  image: string;
  title: string;
  issuer: string;
  issued: string;
  credential: string;
  skills?: string[];
}

export default function CertificationCard({
  image,
  title,
  issuer,
  issued,
  credential,
  skills = [],
}: CertificationCardProps) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-gradient-to-br
      from-[#2b3f57]/80
      to-[#3b3552]/70
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#aea2c6]/40
      hover:shadow-[0_0_30px_rgba(174,162,198,.15)]
    "
    >
      {/* IMAGE */}

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent" />
      </div>

      {/* CONTENT */}

      <div className="flex h-full flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm text-[#d8c9e8]">{issuer}</p>

        <p className="mt-1 text-xs text-zinc-400">Issued {issued}</p>

        {/* SKILLS */}

        {skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  bg-white/5
                  px-3
                  py-1
                  text-xs
                  text-zinc-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Link
            href={credential}
            target="_blank"
            className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            transition
            text-white
            hover:border-[#aea2c6]/40
            hover:bg-[#aea2c6]/10
          "
          >
            View Credential
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
