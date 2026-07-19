import Image from "next/image";

export default function ProjectHero({ project }: any) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold text-white">{project.title}</h1>
        <p className="mt-2 text-xl text-[#a497b9]">{project.subtitle}</p>
      </div>
      <Image
        src={project.cover}
        width={800}
        height={400}
        alt={project.title}
        className="rounded-2xl"
      />
    </section>
  );
}
