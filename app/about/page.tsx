"use client";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Twitter,
  Sparkles,
  Instagram,
  ShieldCheck,
  Database,
  Code2,
} from "lucide-react";
import {
  SiJavascript,
  SiFigma,
  SiBootstrap,
  SiPython,
  SiPostman,
  SiCypress,
  SiSelenium,
  SiMysql,
  SiLaravel,
  SiDjango,
  SiFlask,
} from "react-icons/si";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import ProjectGallery from "../components/gallerry";
import { Card } from "../components/card";
import SideNavigation from "../components/listcontents";
import ToolBadge from "../components/badge";
import CertificationCard from "../components/certif";

const socials = [
  {
    icon: <Linkedin size={20} color="white" />,
    href: "https://www.linkedin.com/in/ridha-fauziyya-rahma-bb1a49221/",
    label: "Twitter",
  },
  {
    icon: <Mail size={20} color="white" />,
    href: "mailto:ridhafauziyyar123@gmail.com",
    label: "Email",
  },
  {
    icon: <Github size={20} color="white" />,
    href: "https://github.com/RidhaFauziyya",
    label: "Github",
  },
  {
    icon: <Instagram size={20} color="white" />,
    link: "https://www.instagram.com/riidzyy_/",
    label: "Instagram",
  },
];

const sections = [
  {
    id: "introduction",
    label: "Introduction",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "skills",
    label: "Technical Skills",
  },
  {
    id: "certifications",
    label: "Certifications & Training",
  },
];

export default function About() {
  return (
    <div className="mt-40">
      <Navigation />

      <div className="flex flex-col lg:ml-56 px-4 gap-14">
        <SideNavigation items={sections} />

        <section
          className="flex gap-10 flex-col lg:flex-row  bg-[#a497b9]/10 rounded-2xl p-10 scroll-mt-28"
          id="introduction"
        >
          <div className="flex flex-col gap-6">
            <div
              className="
                    relative
                    shrink-0
                    h-40 w-40
                    sm:h-48 sm:w-48
                    md:h-52 md:w-52
                    lg:h-60 lg:w-60
                    overflow-hidden
                    rounded-full
                "
            >
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-[#aea2c6]/50 hover:bg-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display lg:text-4xl md:text-3xl bg-clip-text ">
              Ridha Fauziyya Rahma
            </h1>
            <h3 className="mt-2 text-xl text-transparent duration-1000 bg-[#d1bfda] cursor-default animate-title font-display lg:text-2xl md:text-3xl bg-clip-text ">
              Software Engineering Technology Graduate
            </h3>

            <p className="text-white text-justify mt-8 text-sm">
              I am a graduate in Software Engineering with an interest in
              developing reliable, user-oriented, and high-quality software
              solutions. <br></br>
              <br></br>
              Through my academic and professional experience, I have developed
              web applications using PHP (Laravel) and Python (Django), designed
              and executed software testing activities—including functional
              testing, API testing, test case creation, and debugging—and
              contributed to technical education by teaching programming and
              mentoring students.<br></br>
              <br></br>These experiences have strengthened my analytical
              thinking, attention to detail, problem-solving skills, and
              understanding of software development workflows. I am a quick
              learner and adapt well to new technologies. Additionally, I enjoy
              collaborating with others to helping deliver software that is both
              reliable and maintainable.<br></br>
              <br></br>
              <span className="font-bold">
                I am currently seeking opportunities to grow as a Software
                Quality Assurance Engineer{" "}
              </span>
              while leveraging my background in web development and technical
              education.
            </p>
          </div>
        </section>

        <section
          className="mt-10 flex flex-col gap-4 scroll-mt-28"
          id="experience"
        >
          <h3 className="mt-2 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display lg:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
            Work Experience
          </h3>
          <div className="flex relative flex-col text-white mb-5">
            <div className="flex relative justify-between items-center">
              <h3>Online Python Tutor (Part-time)</h3>
              <h2>Jul 2025 - Present</h2>
            </div>
            <h2 className="text-[#d1bfda]">Kodland</h2>
            <div className="mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>
                  Taught online Python classes for students aged 9–17 by
                  creating an interactive learning environment that supported
                  the learning process.
                </li>
                <li>
                  Guided more than 20 students in completing programming
                  projects in stages to strengthen their understanding of basic
                  Python concepts and problem-solving skills.
                </li>
                <li>
                  Monitored students’ learning progress and provided feedback
                  tailored to each student’s needs to improve their
                  understanding of the material and the quality of their
                  projects.
                </li>
              </ul>
            </div>
            <ProjectGallery
              images={["/works/kodland1.jpg", "/works/kodland2.jpg"]}
            />
          </div>
          <div className="flex relative flex-col text-white mb-5">
            <div className="flex relative justify-between items-center">
              <h3>Developer</h3>
              <h2>Oct 2025 - Jan 2026</h2>
            </div>
            <h2 className="text-[#d1bfda]">PT Onesoft Kreasi Digital</h2>
            <div className="mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>
                  Develop and maintain features in the web application for the
                  Finance, Accounting, User Management, and Reporting modules
                  using Laravel 12, Blade, and AJAX.
                </li>
                <li>
                  Integrate the application interface with a REST API to support
                  data management and business processes across various modules.
                </li>
                <li>
                  Perform debugging and REST API integration testing using
                  Postman to ensure communication between the application
                  interface and the backend functions as required.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex relative flex-col text-white mb-5">
            <div className="flex relative justify-between items-center">
              <h3>Class Practicum Assitant (Part-time)</h3>
              <h2>Feb 2023 - Jun 2023 | Feb 2025 - Jul 2025</h2>
            </div>
            <h2 className="text-[#d1bfda]">
              Sekolah Vokasi - Universitas Gadjah Mada
            </h2>
            <div className="mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>
                  Assist instructors in conducting lab sessions on Web
                  Programming, Databases (MySQL & Oracle), and Data Structures
                  using Python.
                </li>
                <li>
                  Guide students in understanding concepts, completing lab
                  assignments, and provide technical assistance related to web
                  development, databases, algorithms, and data structures.
                </li>
                <li>
                  Support course administration, including managing attendance
                  and coordinating information between lecturer and students.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex relative flex-col text-white mb-5">
            <div className="flex relative justify-between items-center">
              <h3>Web Developer (Intern)</h3>
              <h2>Sep 2024 - Jan 2025</h2>
            </div>
            <h2 className="text-[#d1bfda]">Mafindo</h2>
            <div className="mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>
                  Create flowcharts and UML diagrams to support requirements
                  analysis and feature design, and to facilitate understanding
                  of system workflows.
                </li>
                <li>
                  Implement interface designs using Laravel and Bootstrap by
                  customizing templates for each feature according to the UI/UX
                  design.
                </li>
                <li>
                  Conducted functional testing and assisted with the debugging
                  process to ensure each feature functioned as required before
                  implementation.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex relative flex-col text-white mb-5">
            <div className="flex relative justify-between items-center">
              <h3>Web Developer (Intern)</h3>
              <h2>Jun 2023 - Dec 2023</h2>
            </div>
            <h2 className="text-[#d1bfda]">
              Medify.id - PT. Global Medika Digitama
            </h2>
            <div className="mt-4">
              <ul className="list-disc list-inside text-sm">
                <li>
                  Implemented clinical assessment forms into the system using
                  Laravel’s built-in form generator based on specified
                  requirements and formats.
                </li>
                <li>
                  Developed the company’s landing page using Next.js, Tailwind
                  CSS, and DaisyUI to create a responsive interface consistent
                  with the established design.
                </li>
                <li>
                  Participated in project planning discussions to align
                  functional requirements, interface design, and system
                  implementation with the development team.
                </li>
              </ul>
            </div>
            <ProjectGallery
              images={["/works/medify1.png", "/works/medify3.png"]}
            />
          </div>
        </section>

        <section
          className="mt-10 flex flex-col gap-4 scroll-mt-28"
          id="education"
        >
          <h3 className="mt-2 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display lg:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
            Education
          </h3>
          <div className="flex relative flex-col text-white mb-5">
            <h3 className="text-2xl">Universitas Gadjah Mada</h3>
            <h2 className="text-xl">
              Bachelor of Applied Science in Software Engineering Technology -
              Vocational School
            </h2>
            <h2 className="text-[#d1bfda]">GPA: 3.88/4.00</h2>
          </div>
        </section>

        <section className="mt-10 flex flex-col gap-4 scroll-mt-28" id="skills">
          <h3 className="mt-2 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display lg:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Card>
              <Link
                href="#"
                target="_blank"
                className="flex h-full flex-col p-8"
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="
                    flex h-10 w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#aea2c6]/10
                    border border-[#aea2c6]/20
                    "
                  >
                    <ShieldCheck size={20} color="white" />
                  </div>
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-white
                      "
                  >
                    Software Quality Assurance
                  </h3>
                </div>
                <div className="z-10 flex flex-col items-center">
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Focused on ensuring software quality through structured
                    testing, bug analysis, and continuous improvement.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-white">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Manual Testing
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Functional Testing
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      API Testing
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Test Case Design
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Bug Reporting
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Basic Automation
                    </span>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <ToolBadge
                        icon={<SiPostman size={16} />}
                        label="Postman"
                      />

                      <ToolBadge
                        icon={<SiSelenium size={16} />}
                        label="Selenium"
                      />

                      <ToolBadge
                        icon={<SiCypress size={16} />}
                        label="Cypress"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>

            <Card>
              <Link
                href="#"
                target="_blank"
                className="flex h-full flex-col p-8"
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="
                    flex h-10 w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#aea2c6]/10
                    border border-[#aea2c6]/20
                    "
                  >
                    <Code2 size={20} color="white" />
                  </div>
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-white
                      "
                  >
                    Software Development
                  </h3>
                </div>
                <div className="z-10 flex flex-col items-center">
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Focused on building responsive web applications using PHP
                    and Python, with experience in REST API integration and
                    database-driven development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-white">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Web Development using PHP and Python
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Implementing responsive user interfaces
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      Integrating REST APIs
                    </span>
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <ToolBadge
                        icon={<SiLaravel size={16} />}
                        label="Laravel"
                      />
                      <ToolBadge icon={<SiDjango size={16} />} label="Django" />
                      <ToolBadge icon={<SiPython size={16} />} label="Python" />
                      <ToolBadge icon={<SiFlask size={16} />} label="Flask" />
                      <ToolBadge icon={<SiMysql size={16} />} label="MySql" />
                      <ToolBadge
                        icon={<SiBootstrap size={16} />}
                        label="Bootstrap"
                      />
                      <ToolBadge icon={<SiFigma size={16} />} label="Figma" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </section>

        <section
          className="mt-10 flex flex-col gap-4 scroll-mt-28"
          id="certifications"
        >
          <h3 className="mt-2 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display lg:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
            Certifications & Training
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <CertificationCard
              image="/certificates/Coursera 8US9CPLAGK8P_page-0001.jpg"
              title="QA Process Optimization: Agile & Automated
Testing"
              issuer="Coursera"
              issued="June 2026"
              credential="https://coursera.org/verify/8US9CPLAGK8P"
              skills={[
                "Agile QA",
                "SDLC",
                "QA Strategy",
                "QA Metrics",
                "Definition of Done",
                "Continuous Testing",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
