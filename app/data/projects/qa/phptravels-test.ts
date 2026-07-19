import { Project } from "app/data/types";

export const phptravelsTest: Project = {
  slug: "phptravels-test",

  title: "Exploratory Testing on Web Application (PHPTravels)",

  subtitle:
    "Exploratory Testing Portfolio for Features in the PHPTravels Web Application",

  category: "qa",

  cover: "/projects/qa/phptravels/phptravels.jpg",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "This project focuses on conducting exploratory testing on the PHPTravels admin web application to identify bugs, validation issues, and usability problems through unscripted testing sessions.",
    },

    {
      type: "overview",
      title: "Project Type",
      content: "Self-initiated Project",
    },

    {
      type: "overview",
      title: "Project Goals",
      content:
        "To identify unexpected bugs, usability issues, and system behavior by exploring the application without predefined test cases.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Planned the testing mission and scope.",
        "Performed exploratory testing on the authentication, dashboard, user management, and hotel management features.",
        "Explored different user actions, navigation flows, and input variations without predefined test cases.",
        "Recorded observations during each testing session.",
        "Identified and documented bugs based on the testing results.",
      ],
    },

    {
      type: "tech",

      title: "Tools",

      items: ["Google Chrome", "Microsoft Excel"],
    },

    {
      type: "testing",

      title: "Test Information",

      items: [
        {
          label: "Testing Type",
          value: ["Exploratory Testing"],
        },
        {
          label: "Testing Approach",
          value: ["Free Exploration"],
        },
        {
          label: "Platform",
          value: ["Web Application (Admin Panel)"],
        },
        {
          label: "Environment",
          value: ["Demo Environment"],
        },
        {
          label: "Browser",
          value: ["Google Chrome"],
        },
      ],
    },

    {
      type: "testing",

      title: "Test Scope",

      items: [
        {
          value: [
            "Admin Login",
            "Dashboard",
            "User Management",
            "Hotel Management",
            "Form Validation",
            "Navigation Between Pages",
          ],
        },
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          value: "10+",
          label: "Test scenarios have been explored across various features.",
        },
        {
          label: "Found several functional, validation, and navigation issues.",
        },
        {
          label: "Created exploratory testing notes and bug reports.",
        },
        {
          label:
            "Improved testing coverage by exploring different user behaviors and input variations.",
        },
      ],
    },

    {
      type: "artifacts",

      title: "QA Documentation",

      items: [
        {
          title: "Exploratory Test Charter",

          description: "Mission, scope, risks, and exploration objectives.",

          type: "PDF",

          file: "https://drive.google.com/file/d/17qsXX4EpQlFrw0jm2hffhNmiZbSfugkv/view?usp=sharing",
        },

        {
          title: "Exploration Session Notes",

          description:
            "Testing observations and findings recorded during each exploration session.",

          type: "Excel",

          file: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9K4Xoblx2Rhe7Bb3ccEFsxRzKoFQObGjR1Dr7wzJ3qaZZ5LTcSTw_1O2tNYALvUxPtwxn4IcVsIWF/pubhtml?gid=1827265617&single=true",
        },

        {
          title: "Bug Report",

          description:
            "Documented defects with reproduction steps, expected results, actual results, and severity.",

          type: "Excel",

          file: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9K4Xoblx2Rhe7Bb3ccEFsxRzKoFQObGjR1Dr7wzJ3qaZZ5LTcSTw_1O2tNYALvUxPtwxn4IcVsIWF/pubhtml?gid=131702307&single=true",
        },

        {
          title: "Bug Evidence",

          description: "Screenshots demonstrating identified issues.",

          type: "Image",
          images: [
            "/projects/qa/phptravels/bug.jpg",
            "/projects/qa/phptravels/bug1.jpg",
            "/projects/qa/phptravels/bug2.jpg",
          ],

          file: "https://drive.google.com/drive/folders/1Vd8NS1oeWOMRFJlHFM30_71n7p0hRiP6?usp=sharing",
        },
      ],
    },
  ],
};
