"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

interface SideNavigationProps {
  items: NavItem[];
}

export default function SideNavigation({ items }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="fixed left-8 top-1/2 hidden -translate-y-1/2 lg:block">
      <nav>
        <ul className="space-y-5">
          {items.map((item) => {
            const active = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center gap-3"
                >
                  <Sparkles
                    size={14}
                    className={`transition-all duration-300
                      ${
                        active
                          ? "text-[#aea2c6] drop-shadow-[0_0_8px_rgba(174,162,198,.5)]"
                          : "text-white/30"
                      }`}
                  />

                  <span
                    className={`text-sm transition-all duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
