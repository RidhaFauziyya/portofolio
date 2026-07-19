export default function OverviewSection({ section }: any) {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-2xl font-semibold text-white">
        {section.title}
      </h2>

      {section.content && (
        <p className="leading-8 text-zinc-300 whitespace-pre-line">
          {section.content}
        </p>
      )}

      {section.items && (
        <ul className="mt-5 space-y-3">
          {section.items.map((item: string, i: number) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#aea2c6]" />

              <span className="text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
