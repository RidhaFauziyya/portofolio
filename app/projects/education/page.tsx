"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import ProjectCard from "app/components/project";
import Pagination from "app/components/paginator";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  url: string;
  label: string;
  detail: string;
}

const projects: Project[] = [];

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
          Projects Technical Education
        </h1>

        <div className="mt-10 text-center animate-fade-in w-9/12">
          <h2 className="text-sm text-white ">
            These projects showcase learning applications, teaching materials,
            and programming exercises that I created during my teaching and
            learning journey. They focus on Python programming, web development,
            and simple educational tools.
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
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-xl font-semibold text-white">Coming Soon</h3>

            <p className="mt-3 text-zinc-400">
              New educational projects will be added soon.
            </p>
          </div>
        )}
      </div>
      {projects.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/projects/education"
        />
      )}
    </div>
  );
}
