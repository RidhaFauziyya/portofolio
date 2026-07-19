import { Sparkles } from "lucide-react";

interface TestingItem {
  label?: string;
  value: string[];
}

interface TestingsSectionProps {
  section: {
    title: string;
    items: TestingItem[];
  };
}

export default function TechStackSection({ section }: TestingsSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold text-white">
        {section.title}
      </h2>
      {section.items.map((item) => (
        <div className="flex flex-col mb-8">
          {item.label && (
            <h3 className="text-lg leading-6 text-[#a497b9]">{item.label}</h3>
          )}
          <ul className="space-y-2 text-white">
            {item.value.map((val) => (
              <li key={item.label} className="flex gap-4 items-center">
                <Sparkles size={14} />
                {val}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
