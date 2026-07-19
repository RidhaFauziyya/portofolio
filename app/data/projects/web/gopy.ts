import { Project } from "app/data/types";

export const gopyTask: Project = {
  slug: "gopy-task",

  title: "GoPy",

  subtitle: "Weather Forecast & Quiz Website",

  category: "development",

  cover: "/projects/development/gopytask/cover-gopytask.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "Gopy Weather is a web-based weather information platform developed using Flask. The application integrates the OpenWeather API to provide real-time weather information based on the user's selected location, including detailed current conditions and a three-day weather forecast. In addition to weather services, the platform includes a Python quiz system with authentication, score tracking, and a leaderboard to create a more interactive learning experience.",
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
        "The goal of this project is to develop a web application that demonstrates the integration of third-party APIs within a Flask application while providing users with accurate weather information and an interactive Python quiz experience.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Designed the database schema for user accounts, quiz data, and leaderboard records.",
        "Developed user authentication and session management for secure access to quiz features.",
        "Integrated the OpenWeather API to retrieve real-time weather data and forecasts.",
        "Built a weather dashboard displaying current conditions and a 3-day weather forecast based on user-selected locations.",
        "Developed a Python quiz module with score calculation and leaderboard functionality.",
        "Designed and implemented a responsive user interface using Flask templates and Bootstrap.",
      ],
    },

    {
      type: "tech",

      title: "Tech Stack",

      items: ["Python", "Flask", "SQLite", "Bootstrap", "Postman"],
    },

    {
      type: "testing",

      title: "Features",

      items: [
        {
          value: [
            "Real-time weather information",
            "Search weather information by location",
            "3-day weather forecast",
            "User authentication",
            "Quizzes with points",
            "Leaderboard",
            "Responsive Design",
          ],
        },
      ],
    },

    {
      type: "gallery",
      title: "Gallery",
      images: [
        "/projects/development/gopytask/gopytask.png",
        "/projects/development/gopytask/gopytask1.png",
        "/projects/development/gopytask/gopytask2.png",
        "/projects/development/gopytask/gopytask3.png",
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          label:
            "Successfully integrated the OpenWeather API into a Flask web application.",
        },
        {
          label:
            "Delivered real-time weather information with a 3-day forecast based on user-selected locations.",
        },
        {
          label:
            "Implemented a secure authentication system to restrict access to quiz features.",
        },
        {
          label:
            "Developed an interactive Python quiz with score tracking and a leaderboard.",
        },
        {
          label:
            "Built a responsive web application for desktop and mobile devices.",
        },
      ],
    },

    {
      type: "links",

      title: "Project Links",
      github: "https://github.com/RidhaFauziyya/GOPy_task.git",

      demo: "https://riidzy.pythonanywhere.com/",
    },

    {
      type: "video",
      title: "Project Demo Video",
      youtube: "https://youtu.be/hh8zUEqSkpY",
    },
  ],
};
