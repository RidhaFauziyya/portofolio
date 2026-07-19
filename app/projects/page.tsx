import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "Software Quality Assurance",
    href: "/projects/qa",
    description:
      "Manual Testing, API Testing, Test Case Design, Bug Reporting.",
  },
  {
    title: "Web Development",
    href: "/projects/development",
    description: "Laravel, PHP, MySQL, Bootstrap, responsive web applications.",
  },
  {
    title: "Technical Education",
    href: "/projects/education",
    description:
      "Python teaching materials, mentoring, and educational resources.",
  },
];

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col items-center mt-40 w-full lg:w-4/5 mx-auto overflow-hidden">
      <div className="flex flex-col items-center" id="hero">
        <h1 className="text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display lg:text-4xl md:text-3xl whitespace-nowrap bg-clip-text ">
          Projects
        </h1>

        <div className="mt-10 text-center animate-fade-in w-9/12">
          <h2 className="text-lg text-white ">
            A collection of projects showcasing my experience in Software
            Quality Assurance, Web Development, and Technical Education.
          </h2>
        </div>
        <div className="my-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#aea2c6]/40 hover:bg-white/[0.05]"
            >
              <h2 className="text-xl font-semibold text-white">
                {category.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-400">
                {category.description}
              </p>

              <span className="mt-8 inline-block text-[#aea2c6]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
