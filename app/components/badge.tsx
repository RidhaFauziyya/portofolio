import { ReactNode } from "react";

interface ToolBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function ToolBadge({ icon, label }: ToolBadgeProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-3
        py-2
        text-xs
        text-zinc-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#aea2c6]/40
        hover:bg-[#aea2c6]/10
        hover:text-white
      "
    >
      <span className="text-[#d7c6e4] transition group-hover:scale-110">
        {icon}
      </span>

      <span className="font-medium">{label}</span>
    </div>
  );
}
