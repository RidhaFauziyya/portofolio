import { Project } from "app/data/types";

export const tpAccess: Project = {
  slug: "tpaccsess",

  title: "TPAccess",

  subtitle: "TPA Management System Website ",

  category: "development",

  cover: "/projects/development/tpaccess/cover_tpaccess.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "TPAccess is a web-based management platform designed for TPA (Qur'anic Learning Center). It provides educators with a centralized system to manage curriculum records, student learning progress, attendance, and academic information, while allowing parents to monitor their children's development through a dedicated parent dashboard. The platform consists of three main modules: a public landing page, an educator dashboard, and a parent dashboard.",
    },

    {
      type: "overview",
      title: "My Role",
      content: "Full Stack Developer",
    },

    {
      type: "overview",
      title: "Project Goals",
      content:
        "The goal of this project is to digitize TPA administration by providing educators with an efficient system to manage students' learning records and enabling parents to monitor their children's learning progress through an integrated web platform.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Brainstormed application ideas with the team.",
        "Designed the database schema.",
        "Developed the authentication module for teachers and parents.",
        "Built dashboards for teachers and parents.",
        "Implemented CRUD features for classes, students, course materials, and teacher data.",
        "Built a responsive user interface.",
      ],
    },

    {
      type: "tech",

      title: "Tech Stack",

      items: ["PHP", "Laravel", "MySQL", "Tailwind", "Figma"],
    },

    {
      type: "testing",

      title: "Features",

      items: [
        {
          value: [
            "Teacher and Parent Authentication",
            "CRUD for Class Data",
            "CRUD for Course Material Data",
            "CRUD for Student Data",
            "CRUD for Teacher Data",
            "TPA Profile Editing Feature",
            "Responsive Design",
          ],
        },
      ],
    },

    {
      type: "gallery",
      title: "Gallery",
      images: [
        "/projects/development/tpaccess/tpaccess.png",
        "/projects/development/tpaccess/tpaccess2.jpg",
        "/projects/development/tpaccess/tpaccess3.png",
        "/projects/development/tpaccess/tpaccess4.jpg",
        "/projects/development/tpaccess/tpaccess5.jpg",
      ],
    },

    {
      type: "metrics",

      title: "Project Outcomes",

      items: [
        {
          label:
            "Completed a fully functional web-based TPA management system.",
        },
        {
          label:
            "Successfully implemented role-based authentication for educators and parents.",
        },
        {
          label:
            "Digitalized student learning records and curriculum management.",
        },
        {
          label:
            "Provided parents with real-time access to students' learning progress.",
        },
        {
          label:
            "Delivered a responsive interface compatible with desktop and mobile devices.",
        },
      ],
    },

    {
      type: "links",

      title: "Project Links",
      github: "https://github.com/RidhaFauziyya/daq-tpaccess",
      figma:
        "https://www.figma.com/proto/CRcNjVMWdCgbrCzGOCCHpd/DAQ?node-id=180-3078&p=f&t=jtd7QFBKVIIak7kF-1&scaling=scale-down-width&content-scaling=fixed&page-id=180%3A2507&starting-point-node-id=180%3A2512&show-proto-sidebar=1",
      demo: "https://tpaaccsess.ifree.page",
    },

    {
      type: "video",
      title: "Project Demo Video",
      youtube: "https://youtu.be/84-7uj-ruOk",
    },
  ],
};
