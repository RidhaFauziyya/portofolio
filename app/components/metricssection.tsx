interface MetricItem {
  label: string;
  value?: string;
  description?: string;
}

interface MetricsSectionProps {
  section: {
    title: string;
    items: MetricItem[];
  };
}

export default function MetricsSection({ section }: MetricsSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        {section.title}
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-md
              transition
              hover:border-[#aea2c6]/40
              hover:bg-white/[0.06]
            "
          >
            {/* Kalau ada value */}
            {item.value && (
              <h3 className="text-3xl font-bold text-[#2e3148]">
                {item.value}
              </h3>
            )}

            {/* Kalau ada value, label dibuat kecil */}
            <p
              className={`${
                item.value
                  ? "mt-2 text-sm text-zinc-200"
                  : "text-base font-medium text-zinc-200"
              }`}
            >
              {item.label}
            </p>

            {/* Description opsional */}
            {item.description && (
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
