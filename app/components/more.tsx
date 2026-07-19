import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface MoreProps {
  href: string;
  title: string;
  subtitle?: string;

  imageSrc?: string;
  icon?: ReactNode;

  bgColor?: string;
  borderColor?: string;
}

export default function MoreButton({
  href,
  title,
  subtitle,
  imageSrc,
  icon,
  bgColor = "bg-white/5",
  borderColor = "border-white/10",
}: MoreProps) {
  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        items-center
        gap-4
        rounded-full
        border
        ${borderColor}
        ${bgColor}
        backdrop-blur-xl
        px-3
        py-1
        transition-all
        duration-300
        hover:scale-[1.02]
      `}
    >
      {/* Avatar / Icon */}
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/10">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={40}
            height={40}
            className="object-cover"
          />
        ) : (
          icon
        )}
      </div>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>

        {subtitle && <p className="text-xs text-zinc-400">{subtitle}</p>}
      </div>

      <ArrowRight
        className="
          ml-3
          text-zinc-400
          transition
          group-hover:translate-x-1
        "
        size={18}
      />
    </Link>
  );
}
