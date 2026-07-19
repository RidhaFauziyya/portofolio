import { Project } from "app/data/types";

export const tpaccessTest: Project = {
  slug: "tpaccess-test",

  title: "TPAccess Web Application Testing with Cypress",

  subtitle: "Automated Functional Testing for a TPA Management System",

  category: "qa",

  cover: "/projects/development/tpaccess/cover_tpaccess.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "This project focuses on developing automated functional test scenarios using Cypress to validate the core functionality of the TPAccess web application. The automated tests cover authentication, dashboard management, and profile features through positive, negative, and edge-case scenarios to ensure consistent system behavior.",
    },

    {
      type: "overview",
      title: "Project Type",
      content: "Academic Project",
    },

    {
      type: "overview",
      title: "Project Goals",
      content:
        "To enhance testing efficiency and reliability by automating critical user workflows and validating system behavior through the execution of repeatable functional tests.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Analyzed application workflows and identified automation candidates.",
        "Designed automated test scenarios covering positive, negative, and edge cases.",
        "Developed functional test scripts using Cypress.",
        "Implemented reusable custom commands and fixtures for test data management.",
        "Generated automated HTML test reports using Mochawesome",
      ],
    },

    {
      type: "tech",

      title: "Tools",

      items: ["Cypress", "JavaScript", "Mochawesome", "Github"],
    },

    {
      type: "testing",

      title: "Test Information",

      items: [
        {
          label: "Testing Type",
          value: ["Functional Testing"],
        },
        { label: "Testing Metod", value: ["Automation Testing"] },
        {
          label: "Automation Framework",
          value: ["Cypress"],
        },
        {
          label: "Test Design",
          value: ["Positive Testing", "Negative Testing", "Edge Case Testing"],
        },
      ],
    },

    {
      type: "testing",

      title: "Test Scope",

      items: [
        {
          value: [
            "TPA Authentication",
            "Class Management",
            "Student Management",
            "Course Material Management",
            "Student Progress Management",
            "TPA Profile",
            "Teacher Contact Management",
          ],
        },
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          value: "50+",
          label: "Automated test cases executed cover core functionality.",
        },
        {
          value: "51",
          label: "Automated test cases were successfully executed and passed.",
        },
        {
          value: "96.23%",
          label: "Pass rate obtained.",
        },
        {
          label:
            "Reduced repetitive manual testing by automating core user workflows.",
        },
        {
          label:
            "Built reusable Cypress commands and fixtures to simplify test maintenance.",
        },
        {
          label:
            "Generate detailed HTML test reports using Mochawesome for each module.",
        },
      ],
    },

    {
      type: "artifacts",

      title: "QA Documentation",

      items: [
        {
          title: "Test Cases",

          description:
            "50+ test scenarios covering positive, negative, and edge cases.",

          type: "Excel",

          images: [
            "/projects/qa/tpaccess/testcase.png",
            "/projects/qa/tpaccess/testcase1.png",
            "/projects/qa/tpaccess/testcase2.png",
          ],

          file: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvShHTAnLicDmqQKGoteUFXTazJsV5CZJQSqfdtxkCbYJ02njzkCoqYvoFpsN4cAqWyMSZYbOnknI1/pubhtml?gid=12577841&single=true",
        },

        {
          title: "Bug Report",

          description: "List of bugs identified during testing.",

          type: "Github",

          images: [
            "/projects/qa/tpaccess/bug1.png",
            "/projects/qa/tpaccess/bug2.png",
          ],

          file: "https://github.com/RidhaFauziyya/daq-tpaccess/issues",
        },

        {
          title: "Test Execution Report",

          description: "Summary of automation execution results.",

          type: "PDF",

          file: "https://drive.google.com/file/d/1c1VaX-V8G8gVvn4aeHqvPehb6ctfqHXE/view?usp=sharing",
        },

        {
          title: "Mochawesome Report",

          description:
            "Detailed execution report generated automatically by Cypress.",

          type: "PDF",

          images: [
            "/projects/qa/tpaccess/mochawesome-report.png",
            "/projects/qa/tpaccess/mochawesome-report1.png",
          ],

          file: "https://drive.google.com/file/d/1tg-nyHFmoCk2JUNeES68iIrWs0cr7ZJp/view?usp=sharing",
        },

        {
          title: "Demo Video",

          description: "Running Cypress tests for each sub-module.",

          type: "Video",

          file: "https://drive.google.com/drive/folders/1HB_TTWV62caH6-bJWWmtdjsRiNWDdXo_?usp=sharing",
        },
        {
          title: "GitHub Repository",

          description: "Functional automation source code using Cypress.",

          type: "Github",

          file: "https://github.com/RidhaFauziyya/TPAccess-Automation.git",
        },
      ],
    },
  ],
};
