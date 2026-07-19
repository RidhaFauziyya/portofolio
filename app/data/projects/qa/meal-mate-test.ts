import { Project } from "app/data/types";

export const mealMateTest: Project = {
  slug: "meal-mate-test",

  title: "Meal Mate Web Application Testing",

  subtitle: "Testing a Food Recommendation System",

  category: "qa",

  cover: "/projects/development/mealmate/cover-mealmate.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "This project focuses on validating the functionality and usability of the Meal Mate web application through functional testing using a black-box approach, followed by User Acceptance Testing (UAT) to ensure the system meets user requirements and expected behavior.",
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
        "The goal of this project is to ensure that all key features of the Meal Mate web application function properly and meet user needs through systematic testing.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Designed test cases based on functional requirements and user workflows using Qase.",
        "Executed functional testing using a black-box approach on key features such as login, meal planning, and data input.",
        "Conducted User Acceptance Testing (UAT) to validate system functionality from the user’s perspective.",
        "Analyzed user feedback using a Likert scale to evaluate the system’s usability and functionality.",
      ],
    },

    {
      type: "tech",

      title: "Tools",

      items: ["Microsoft Excel", "Google Forms", "Qase"],
    },

    {
      type: "testing",

      title: "Test Information",

      items: [
        {
          label: "Testing Type",
          value: ["Functional Testing", "User Acceptance Testing (UAT)"],
        },
        { label: "Testing Approach", value: ["Black-box Testing"] },
        { label: "Testing Techniques", value: [] },
      ],
    },

    {
      type: "testing",

      title: "Test Scope",

      items: [
        {
          value: [
            "User Authentication",
            "Meal Recommendation Generation",
            "Meal Regeneration",
            "Save and Manage Recommendation",
            "BMI Calculator",
          ],
        },
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          value: "95.88%",
          label: "User Acceptance Test Score",
        },
        {
          value: "40",
          label: "Test cases covering core functionalities",
        },
        {
          label:
            "Identified several functional bugs, including input validation issues.",
        },
        {
          label:
            "Conducted UAT with multiple respondents to evaluate system usability.",
        },
        {
          label: "Identified areas for improvement based on user feedback.",
        },
        {
          label:
            "Improved system reliability by ensuring all critical features function as expected.",
        },
      ],
    },

    {
      type: "artifacts",

      title: "QA Documentation",

      items: [
        {
          title: "Black-box Test Cases",

          description:
            "40 test cases covering authentication, meal recommendation, meal regeneration, BMI, and CRUD features.",

          type: "Excel",

          images: [
            "/projects/qa/meal-mate/mealmate-test.png",
            "/projects/qa/meal-mate/mealmate-test2.png",
          ],

          file: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-_1iIlildTZmhZ8k84oqxMyI6LUvhDcT4FFFNd3aJYPFHJNZzLSwVvIgQ-kqDARD0vS0MNZJpFITg/pubhtml",
        },

        {
          title: "Bug Report",

          description:
            "Documented issues discovered during functional testing.",

          type: "Github",

          images: ["/projects/qa/meal-mate/bug-report.png"],

          file: "https://github.com/RidhaFauziyya/meal_planner/issues/1#issue-4906281619",
        },

        {
          title: "UAT Result",

          description: "Summary of questionnaire results with Likert analysis.",

          type: "PDF",

          images: [
            "/projects/qa/meal-mate/highlight.png",
            "/projects/qa/meal-mate/uat-chart.png",
          ],

          file: "https://drive.google.com/file/d/136eiDwkCcPA7dyoQLNstbpnx9snr5ONF/view?usp=sharing",
        },
      ],
    },

    {
      type: "links",
      title: "Project Links",

      github: "https://github.com/RidhaFauziyya/meal_planner",
    },

    {
      type: "video",
      title: "Project Demo Video",

      youtube: "https://youtu.be/2AdI_KccqSo",
    },
  ],
};
