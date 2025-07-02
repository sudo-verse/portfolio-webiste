import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "DSA & Problem Solving",
    icons: [
      "/skills/python.svg",
      "/skills/codeforces.png",
      "/skills/cpp.png",
      "/skills/leetcode.png",
      "/skills/github.svg",
    ],
    shortDescription: "I solve complex algorithmic problems efficiently.",
    description:
      "I have solved hundreds of Data Structures & Algorithms problems across platforms like LeetCode and Codeforces. My strong grasp of concepts like graphs, trees, dynamic programming, and advanced algorithms empowers me to approach real-world software challenges with optimized and scalable solutions. This forms a strong foundation for my backend and system design work.",
  },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex portals, I build responsive, SEO-optimized websites using modern frontend frameworks and tools. Whether personal or production-level, my web projects are built with performance and accessibility in mind.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I develop scalable and secure backend systems using Node.js, Express, and AWS services. From REST APIs to real-time WebSocket applications, I ensure clean architecture, secure endpoints, and efficient database interactions to support complex logic and high traffic with ease.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I define goals, target audiences, and a roadmap for success.",
    description:
      "I help shape product direction by aligning technical feasibility with user needs and business goals. From ideation to roadmap planning, I combine logical thinking and engineering discipline to ensure your product is impactful and scalable from day one.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I implement DevOps practices to automate and scale development workflows. With experience in CI/CD pipelines, cloud provisioning via Terraform, containerization using Docker/Kubernetes, and monitoring, I enable faster delivery and higher reliability in cloud-native applications.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I design and optimize both SQL and NoSQL databases for performance, consistency, and scalability. From schema design to query optimization and caching strategies, I ensure data-driven applications run smoothly and handle scale with confidence.",
  },
];

export default services;
