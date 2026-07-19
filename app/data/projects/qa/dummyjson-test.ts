import { Project } from "app/data/types";

export const dummyjsonTest: Project = {
  slug: "dummyjson-test",

  title: "API Testing using DummyJSON",

  subtitle: "API testing using Postman with positive and negative scenarios",

  category: "qa",

  cover: "/projects/qa/dummyjson/cover.png",

  sections: [
    {
      type: "overview",
      title: "Overview",
      content:
        "This project focuses on API testing using Postman to validate authentication, protected endpoints, and API responses through positive and negative test scenarios.",
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
        "To verify API functionality by testing authentication, authorization, and response validation across different request scenarios.",
    },

    {
      type: "overview",
      title: "What I Did",
      items: [
        "Designed API test cases for authentication and protected endpoint scenarios.",
        "Performed API testing using Postman.",
        "Tested positive and negative scenarios, including valid login, invalid credentials, and unauthorized access.",
        "Validated status codes, response data, and authentication tokens.",
        "Verified protected endpoint access using Bearer tokens.",
        "Tested API requests using GET, POST, PUT, and DELETE methods.",
      ],
    },

    {
      type: "tech",

      title: "Tools",

      items: ["Postman", "REST API", "JSON"],
    },

    {
      type: "testing",

      title: "Test Information",

      items: [
        {
          label: "Testing Type",
          value: ["API Testing"],
        },
        { label: "Testing Focus", value: ["Functional Testing"] },
        { label: "Testing Approach", value: ["Black-box Testing"] },
        { label: "Authentication Method", value: ["Bearer Token"] },
        { label: "Request Methods", value: ["GET", "POST", "PUT", "DELETE"] },
      ],
    },

    {
      type: "testing",

      title: "Test Scope",

      items: [
        {
          value: ["Authentication", "User API", "Product API"],
        },
      ],
    },

    {
      type: "metrics",
      title: "Project Outcomes",
      items: [
        {
          value: "15+",
          label:
            "API test cases covering authentication, user and product endpoints",
        },
        {
          value: "100%",
          label:
            "Test cases successfully passed across GET, POST, PUT, and DELETE requests",
        },
        {
          label:
            "Protected endpoint access successfully validated using Bearer tokens.",
        },
        {
          label:
            "API responses successfully validated for different request scenarios.",
        },
      ],
    },

    {
      type: "artifacts",

      title: "QA Documentation",

      items: [
        {
          title: "API Test Cases",

          description:
            "Test cases covering authentication, user and product endpoints.",

          type: "Excel",

          file: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRj3hMz4x6pGzx0j7NhOyPILt3J4-XmasPKsmF4SlF-XZlx4i3eTkY_OYXJYbLH6dZoAIQ3ogXqM6Ga/pubhtml",
        },

        {
          title: "Postman Collection",

          description:
            "Postman collection containing API requests and test scenarios.",

          type: "JSON",

          file: "https://drive.google.com/file/d/1P6ZCWLXdFTOmBOP_8z8zEfxplcJ2SrDO/view?usp=sharing",
        },

        {
          title: "Request & Response",

          description:
            "Examples of API requests, responses, and status code validation.",

          type: "Image",

          images: [
            "/projects/qa/dummyjson/test1.jpg",
            "/projects/qa/dummyjson/test2.jpg",
            "/projects/qa/dummyjson/test3.jpg",
            "/projects/qa/dummyjson/test4.jpg",
            "/projects/qa/dummyjson/test5.jpg",
            "/projects/qa/dummyjson/test6.jpg",
            "/projects/qa/dummyjson/test7.jpg",
          ],
        },
      ],
    },
  ],
};
