import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Backend Developer",
    company: "AWS WebSocket Chat App",
    startDate: "Jul 2025",
    isCurrentJob: true,
    location: "Bihar, India",
    description: [
      "Designed and developed a real-time chat application using Python, API Gateway (WebSocket), and Lambda.",
      "Created bi-directional communication between users and the backend with persistent WebSocket connections.",
      "Focused on scalability, cloud-native design, and serverless architecture.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "Open Source Contributor",
    company: " LibreOffice (The Document Foundation)",
    startDate: "Feb 2025",
    endDate: "May 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Contributing to code quality and feature enhancement across major LibreOffice modules (Writer, Impress, Calc).",
      "Improved accessibility and error reporting within the UNO API.",
      "Gained hands-on experience in navigating and contributing to large-scale C++ codebases.",
      "Resolved 10+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Web Development Lead",
    company: "FINANCE CLUB, NITS",
    startDate: "Nov 2024",
    endDate: "Mar 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Led a team of 5 developers to design, build, and deploy the official website for the Finance Club, significantly improving its online visibility and engagement.",
      "Implemented responsive design and performance optimizations for seamless access across devices.",
    ],
  },
];

export default experiences;
