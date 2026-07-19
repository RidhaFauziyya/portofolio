"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import ProjectCard from "app/components/project";
import Pagination from "app/components/paginator";

const projects = [
  {
    id: 0,
    title: "Meal Mate",
    category: "Web Development",
    image: "/projects/development/mealmate/mealmate.png",
    description: "Recommendation System portfolio.",
    technologies: ["Postman", "Python", "Django", "MySQL"],
    url: "https://github.com/RidhaFauziyya/meal_planner",
    label: "Github",
    detail: "/projects/meal-mate",
  },
  {
    id: 1,
    title: "TPAccess",
    category: "Web Development",
    image: "/projects/development/tpaccess/tpaccess.png",
    description:
      "Al-Quran Education Park (TPA) Management System Website portfolio.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    url: "https://github.com/RidhaFauziyya/daq-tpaccess",
    label: "Github",
    detail: "/projects/tpaccsess",
  },
  {
    id: 3,
    title: "UMKMAja!",
    category: "Web Development",
    image: "/projects/development/umkmaja/umkmaja.png",
    description: "UMKM Marketplace Prototype portfolio.",
    technologies: ["Postman", "PHP", "Laravel", "MySQL", "Bootstrap"],
    url: "https://github.com/Ninissdyah/backend_umkmajapad2.git",
    label: "Github",
    detail: "/projects/umkmaja",
  },
  {
    id: 4,
    title: "GOPy Task",
    category: "Web Development",
    image: "/projects/development/gopytask/gopytask.png",
    description: "Weather Forecast & Quiz website portfolio.",
    technologies: ["Python", "Flask", "SQLite", "Open API"],
    url: "https://github.com/RidhaFauziyya/GOPy_task.git",
    label: "Github",
    detail: "/projects/gopy-task",
  },
];

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function DevProjectsPage({ searchParams }: Props) {
  const page = Number(searchParams.page ?? "1");
  const PER_PAGE = 4;

  const totalPages = Math.ceil(projects.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const currentProjects = projects.slice(start, end);

  return (
    <div className="flex flex-col items-center my-40 w-full mx-auto overflow-hidden">
      <div className="flex flex-col items-center" id="hero">
        <h1 className="text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display lg:text-4xl md:text-3xl whitespace-nowrap bg-clip-text ">
          Projects Web Development
        </h1>

        <div className="mt-10 text-center animate-fade-in w-9/12">
          <h2 className="text-sm text-white  ">
            I have experience developing web applications using PHP (Laravel)
            and Python (Flask), focusing on responsive user interfaces,
            authentication systems, REST API integration, and dashboard-based
            applications. My projects range from educational management systems
            to weather information platforms and UMKM management solutions.
          </h2>
        </div>
      </div>
      <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
            "
      >
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
            label={project.label}
            detail={project.detail}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/projects/development"
      />
    </div>
  );
}
