import ToolBadge from "./badge";
import { TechIcons } from "../lib/techicon";

export default function TechStackSection({ section }: any) {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold text-white">
        {section.title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {section.items.map((item: string) => {
          const Icon = TechIcons[item];

          return (
            <ToolBadge
              key={item}
              icon={Icon ? <Icon size={16} /> : null}
              label={item}
            />
          );
        })}
      </div>
    </section>
  );
}
