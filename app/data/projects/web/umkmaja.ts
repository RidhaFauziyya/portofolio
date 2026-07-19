import { Project } from "app/data/types";

export const umkmAja: Project = {
  slug: "umkmaja",

  title: "UMKMAja!",

  subtitle: "UMKM Marketplace Prototype",

  category: "development",

  cover: "/projects/development/umkmaja/cover-umkmaja.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "UMKMAJA! is a website that serves as a platform for UMKMK owners to promote their businesses to a wider audience. In addition, UMKMAJA! provides information on seminars and fairs as a form of support for UMKM development. This website can be used by UMKM owners to manage their business profiles, as well as by the general public to discover various UMKMs in their area based on available categories. This project  developed over two academic semesters. The project evolved from a monolithic Laravel application into a REST API-based architecture while introducing a redesigned and more responsive user interface.",
    },

    {
      type: "overview",
      title: "My Role",
      content:
        "Contributed to the project across two development phases. In the first phase, I primarily worked as a Backend Developer, focusing on core system functionalities. In the second phase, my role shifted to Frontend Developer, where I redesigned the user interface and collaborated on integrating the updated REST API architecture.",
    },

    {
      type: "overview",
      title: "Project Goals",
      content:
        "The goal of this project is to develop a prototype web platform that helps UMKM owners promote and manage their businesses digitally while making local products and business information more accessible to the public.",
    },

    {
      type: "overview",
      title: "What I Did (Phase 1)",
      items: [
        "Collaborated on application planning and database design.",
        "Developed backend modules for store and product management.",
        "Implemented CRUD functionalities.",
        "Assisted with frontend implementation and UI adjustments.",
      ],
    },

    {
      type: "overview",
      title: "What I Did (Phase 2)",
      items: [
        "Redesigned the user interface and improved responsiveness.",
        "Developed frontend pages based on the updated design using the Laravel framework",
        "Collaborated during the migration to a REST API architecture.",
        "Conducted functional testing on the completed website",
      ],
    },

    {
      type: "tech",

      title: "Tech Stack",

      items: ["PHP", "Laravel", "JavaScript", "MySql", "Bootstrap", "Figma"],
    },

    {
      type: "testing",

      title: "Features",

      items: [
        {
          value: [
            "User Authentication",
            "CRUD Product Data",
            "CRUD Store Data",
            "CRUD Blog Data",
            "Responsive Design",
          ],
        },
      ],
    },

    {
      type: "gallery",
      title: "Gallery",
      images: [
        "/projects/development/umkmaja/umkmaja.png",
        "/projects/development/umkmaja/umkmaja1.png",
        "/projects/development/umkmaja/umkmaja2.png",
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          label:
            "Successfully developed a multi-vendor web platform for UMKM promotion.",
        },
        {
          label:
            "Enabled UMKM owners to manage store profiles and product information independently.",
        },
        {
          label:
            "Provided a categorized business directory to help users discover local UMKM.",
        },
        {
          label:
            "Integrated blog content to support information sharing and community engagement.",
        },
        {
          label:
            "Delivered a responsive web application for desktop and mobile devices.",
        },
      ],
    },

    {
      type: "links",
      title: "Project Links",
      github: "https://github.com/Ninissdyah/backend_umkmajapad2.git",
    },

    {
      type: "video",
      title: "Project Demo Video",
      youtube: "https://youtu.be/qd5JXWGkiKs?si=UxV49MyU-q9sbRkj",
    },
  ],
};
