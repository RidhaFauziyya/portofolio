import { Project } from "app/data/types";

export const mealMate: Project = {
  slug: "meal-mate",

  title: "Meal Mate",

  subtitle: "Food Recommendation System",

  category: "development",

  cover: "/projects/development/mealmate/cover-mealmate.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "Meal Mate is a website designed using the Django framework to help users lead a healthy lifestyle by providing meal recommendations tailored to their caloric needs (TDEE) and personal preferences. This recommendation model was developed using a Content-Based Filtering (CBF) approach, K-Medoids clustering, and Integer Linear Programming (ILP) optimization. This website also offers features that allow users to calculate their BMI and create daily meal plans easily and conveniently.",
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
        "The goal of this project is to create a website that can provide meal recommendations tailored to users' daily calorie needs and preferences",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Collected food and nutritional data using web scraping techniques.",
        "Processed and cleaned the collected dataset before model development.",
        "Developed a meal recommendation model using Clustering, Content-Based Filtering (CBF), and Integer Linear Programming (ILP).",
        "Designed the database schema.",
        "Developed an user authentication module",
        "Implemented CRUD functionalities for application data management.",
        "Built a responsive user interface.",
        "Conducted functional testing and User Acceptance Testing (UAT).",
      ],
    },

    {
      type: "tech",

      title: "Tech Stack",

      items: ["Python", "Django", "MySQL", "Bootstrap"],
    },

    {
      type: "testing",

      title: "Features",

      items: [
        {
          value: [
            "User Authentication",
            "Food Recommendation",
            "Individual meal regeneration",
            "Save and manage recommendation history",
            "BMI Calculator",
            "CRUD for User Profiles",
            "Responsive Design",
          ],
        },
      ],
    },

    {
      type: "gallery",
      title: "Gallery",
      images: [
        "/projects/development/mealmate/mealmate.png",
        "/projects/development/mealmate/mealmate2.png",
        "/projects/development/mealmate/mealmate3.png",
        "/projects/development/mealmate/mealmate4.png",
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          label:
            "Successfully developed a personalized meal recommendation web application.",
        },
        {
          label:
            "Integrated content-based filtering and Integer Linear Programming (ILP) to optimize meal recommendations.",
        },
        {
          label:
            "Provided users with flexible meal regeneration and recommendation history management.",
        },
        {
          label:
            "Achieved high user satisfaction through User Acceptance Testing.",
        },
      ],
    },

    {
      type: "metrics",
      title: "Project Metrics",
      items: [
        {
          value: "95.88%",
          label: "User Acceptance Test",
        },
        {
          value: "3",
          label: "Meal Categories",
        },
        {
          value: "1",
          label: "BMI Calculator",
        },
        {
          value: "100%",
          label: "Responsive Pages",
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
