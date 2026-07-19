"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import ProjectCard from "app/components/project";
import Pagination from "app/components/paginator";

const projects = [
  {
    id: 0,
    title: "Meal Mate Web Application Testing",
    category: "Software Quality Assurance",
    image: "/projects/development/mealmate/mealmate.png",
    description: "Recommendation System Testing portfolio.",
    technologies: [
      "Manual Testing",
      "Blac-box Testing",
      "Bug Reporting",
      "UAT",
    ],
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-_1iIlildTZmhZ8k84oqxMyI6LUvhDcT4FFFNd3aJYPFHJNZzLSwVvIgQ-kqDARD0vS0MNZJpFITg/pubhtml",
    label: "Test Cases",
    detail: "/projects/meal-mate-test",
  },
  {
    id: 1,
    title: "TPAccess Web Application Testing",
    category: "Software Quality Assurance",
    image: "/projects/development/tpaccess/tpaccess.png",
    description:
      "Functional Testing Portfolio for the Al-Quran Educational Park (TPA) Management System.",
    technologies: ["Automation Testing", "Functional Testing", "Bug Reporting"],
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvShHTAnLicDmqQKGoteUFXTazJsV5CZJQSqfdtxkCbYJ02njzkCoqYvoFpsN4cAqWyMSZYbOnknI1/pubhtml?gid=12577841&single=true",
    label: "Test Cases",
    detail: "/projects/tpaccess-test",
  },
  {
    id: 2,
    title: "Exploratory Testing on Web Application",
    category: "Software Quality Assurance",
    image: "/projects/qa/phptravels/phptravels.jpg",
    description:
      "Exploratory Testing Portfolio for Features in the PHPTravels Web Application.",
    technologies: [
      "Manual Testing",
      "Functional Testing",
      "Bug Reporting",
      "Exploratory Testing",
    ],
    url: "https://github.com/RidhaFauziyya/meal_planner",
    label: "Github",
    detail: "/projects/phptravels-test",
  },
  {
    id: 3,
    title: "API Testing with using DummyJSON",
    category: "Software Quality Assurance",
    image: "/projects/qa/dummyjson/cover.png",
    description:
      "API Testing Portfolio using both positive and negative test scenarios on the DummyJSON web application.",
    technologies: [
      "Manual Testing",
      "Functional Testing",
      "API Testing",
      "Postman",
    ],
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj3hMz4x6pGzx0j7NhOyPILt3J4-XmasPKsmF4SlF-XZlx4i3eTkY_OYXJYbLH6dZoAIQ3ogXqM6Ga/pubhtml",
    label: "Test Cases",
    detail: "/projects/dummyjson-test",
  },
  // {
  //   id: 4,
  //   title: "Web Authentication Automation Testing",
  //   category: "Software Quality Assurance",
  //   image: "/projects/development/tpaccess/tpaccess.png",
  //   description:
  //     "Automated Testing Portfolio for the authentication features of the DemoSaas web application using Selenium and PyTest.",
  //   technologies: [
  //     "Automation Testing",
  //     "Functional Testing",
  //     "Selenium",
  //     "PyTest",
  //   ],
  //   url: "https://github.com/RidhaFauziyya/meal_planner",
  //   label: "Github",
  //   detail: "/projects/demosaas-test",
  // },
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
          Projects Software Quality Assurance
        </h1>

        <div className="mt-10 text-center animate-fade-in w-9/12">
          <h2 className="text-sm text-white ">
            These projects reflect my journey in Software Quality Assurance,
            where I focus on understanding system requirements, designing
            effective test cases, validating application behavior, and ensuring
            software quality through functional, API, and user acceptance
            testing. I continuously explore Agile QA practices and test
            automation to strengthen my testing skills.
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
        basePath="/projects/qa"
      />
    </div>
  );
}
