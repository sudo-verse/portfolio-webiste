import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "esports-club-website",
    title: "NIT SILCHAR eSports Club",
    description:
      "Official esports management platform for NIT Silchar for 1000+ students. Features real-time data, Cashfree payment integration, and responsive UI.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/nitsesports/nitsesports",
    url: "https://www.nitsesports.in/",
    tags: ["React", "NodeJS", "ExpressJS", "Supabase", "Cashfree"],
  },
  {
    id: "finverse",
    title: "Finverse — AI Stock Research",
    description:
      "AI-powered equity research assistant using Google Gemini API and RAG. Features hybrid search pipeline, real-time sentiment analysis, and responsive dashboard.",
    icon: "/skills/python.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/finverse",
    url: "https://finverse-henna.vercel.app/",
    tags: ["Google Gemini API", "RAG", "ChromaDB", "React", "Recharts"],
  },
  {
    id: "campusverse",
    title: "CampusVerse",
    description:
      "Scalable full-stack social networking platform with real-time chat, AWS EC2 deployment, and CI/CD via GitHub Actions.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/campus_verse_backend",
    url: "https://13.201.97.80/",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "AWS"],
  },
  {
    id: "skycast-weather-app",
    title: "SkyCast",
    description:
      "At SkyCast, we bring the sky closer to you. Our mission is to provide accurate, real-time weather updates and forecasts powered by cutting-edge technology and intuitive design.",
    icon: "/skills/cloudy.svg", 
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/SkyCast",
    url: "https://skycast-eq5q.onrender.com/", 
    tags: ["JavaScript", "EJS", "Weather API", "Express.js"],
  },
  {
    id: "link-shortener",
    title: "Link Shortener",
    description:
      "A simple and efficient URL shortener built using Node.js and Express.js. It generates unique short links for long URLs, stores them in a database, and handles redirections.",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/link-shortener",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
    {
    id: "serverless-chat-app",
    title: "Serverless Chat App",
    description:
      "A real-time chat application built using AWS API Gateway (WebSocket), Lambda, and DynamoDB. Integrated with Amazon Cognito for user authentication.",
    icon: "/skills/aws.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/serverless-chat-app",
    url: "https://sudo-verse.github.io/serverless-chat-app/",
    tags: ["AWS", "WebSocket", "Lambda", "DynamoDB", "Cognito"],
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    description:
      "A web application to browse and organize recipes. Designed with a clean UI for easy discovery and navigation of different meal types.",
    icon: "/skills/recipe.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/recipe-app",
    url: "https://sudo-verse.github.io/recipe-app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game with an intuitive interface for two players. Built using JavaScript and designed for seamless gameplay.",
    icon: "/skills/tic-tac-toe.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/tic-tac-toe",
    tags: ["JavaScript", "Game", "Web"],
  },
  {
    id: "sudoku",
    title: "Sudoku Solver",
    description:
      "A console-based Sudoku solver built using C++. Implements backtracking to efficiently solve any valid Sudoku puzzle.",
    icon: "/skills/sudoku.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/sudoku",
    tags: ["C++", "Backtracking", "Puzzle", "OOP"],
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/portfolio-website",
    url: "https://portfolio-webiste-gilt.vercel.app/",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/sudo-verse/bus-reservation-system",
    tags: ["C++", "OOP", "File Handling"],
  },
];

export default projects;
