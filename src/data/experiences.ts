import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Founding Member & General Secretary",
    company: "NIT Silchar Esports Club",
    startDate: "Sep 2025",
    isCurrentJob: true,
    location: "Onsite",
    description: [
      "Spearheaded the official esports management platform for NIT Silchar, serving over 1,000 students and faculty.",
      "Organized and managed tournaments, facilitating registration and event scheduling.",
    ],
  },
  {
    designation: "Open Source Contributor",
    company: "LibreOffice (The Document Foundation)",
    startDate: "Feb 2025",
    endDate: "May 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Contributed to code quality and feature enhancement across major LibreOffice modules (Writer, Impress, Calc).",
      "Improved accessibility and error reporting within the UNO API.",
      "Gained hands-on experience in navigating and contributing to large-scale C++ codebases.",
      "Resolved 10+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Executive, Technical Team (formerly Web Development Lead)",
    company: "Finance & Investment Club, NIT Silchar",
    startDate: "Aug 2024",
    isCurrentJob: true,
    location: "Onsite",
    description: [
      "Led a team of 5 developers to design, build, and deploy the official website for the Finance Club, significantly improving its online visibility and engagement.",
      "Implemented responsive design and performance optimizations for seamless access across devices.",
    ],
  },
  {
    designation: "Achievements & Certifications",
    company: "Independent Milestones",
    startDate: "2024",
    isCurrentJob: true,
    location: "Global",
    description: [
      "Solved 500+ algorithm problems on LeetCode and GeeksforGeeks (350+ medium, 250+ hard).",
      "Ranked in top 1.1% globally on LeetCode (327/30,708) in a Weekly Contest, attaining Knight rating.",
      "Finalist in TechM Code 2026, demonstrating problem-solving in a national-level hackathon.",
      "AWS Certified Cloud Practitioner (CLF-C02).",
      "Kaggle Certifications: Machine Learning Specialization, Pandas, Feature Engineering.",
    ],
  },
];

export default experiences;
