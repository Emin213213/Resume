import portraitImage from "./assets/photo-portfolio.png";
import bookAppImage from "./assets/book-app.jpg";
import urbanSneaksImage from "./assets/urban-sneakers.jpg";
import bStroyImage from "./assets/b-stroy.jpg";

/**
 * Single source of truth for all portfolio content.
 * Edit the arrays/objects below — no component changes required.
 */

export const profile = {
  name: "Emin Bashyrov",
  initials: "EB.",
  role: "Full-Stack Developer",
  roleVariants: [
    "Full-Stack Developer",
    "React & TypeScript Engineer",
    "Node.js / NestJS Developer",
  ],
  location: "Kharkiv, Ukraine",
  availability: "Open to work",
  intro:
    "I build modern, scalable web applications with React, Next.js, TypeScript and Node.js — from responsive interfaces to backend APIs and databases.",
  locationLine: "Based in Kharkiv, Ukraine · Open to remote, hybrid and freelance opportunities.",
  portrait: portraitImage,
  portraitAlt: "Portrait of Emin Bashyrov, Full-Stack developer",
};

export const links = {
  github: "https://github.com/Emin213213",
  linkedin: "https://www.linkedin.com/in/emin-bashyrov/",
  djinni: "https://djinni.co/q/35318f227f/",
  // TODO: replace with your real contact email
  email: "",
  cv: "https://drive.google.com/file/d/1GToY_sArSPWq7MAYtQ6Yvoapee4wUPDm/view?usp=sharing",
  githubUsername: "Emin213213",
};

export const aboutBlocks = [
  {
    icon: "sparkles",
    title: "Around 1.5 years of hands-on experience",
    text: "I have around 1.5 years of hands-on experience in web development, working both independently and as part of a team — building websites and web applications from scratch, contributing to team projects and gaining practical experience through internships.",
  },
  {
    icon: "layers",
    title: "Frontend and backend",
    text: "My work covers responsive UI implementation and state management, REST API design and integration, backend services, validation, databases, testing, optimization and deployment.",
  },
  {
    icon: "compass",
    title: "How I work",
    text: "I focus on maintainable structure, typed code and clear communication. I'm looking for a Front-End or Full-Stack role where I can contribute to real products and keep growing as an engineer.",
  },
] as const;

export const stats = [
  { value: "2", label: "Years building for the web" },
  { value: "3", label: "Full-stack products shipped" },
  { value: "30+", label: "Technologies in daily use" },
] as const;

export type ExperienceItem = {
  role: string;
  company?: string;
  period?: string;
  location?: string;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "",
    period: "",
    location: "Kharkiv, Ukraine",
    description:
      "Hands-on experience building full-featured web applications through personal projects, internships and team-based development. Responsible for responsive interfaces, application logic, API integrations, data management, validation, testing and optimization.",
    highlights: [
      "Responsive interfaces and application logic",
      "REST API design, integration and data management",
      "Validation, testing and performance optimization",
    ],
  },
  // TODO: add further roles here — { role, company, period, location, description, highlights }
];

export type SkillCategory = {
  title: string;
  hint: string;
  skills: { name: string; duration?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    hint: "Interfaces & component architecture",
    skills: [
      { name: "HTML" },
      { name: "CSS / SCSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "React Router" },
    ],
  },
  {
    title: "State & data",
    hint: "Application state and API layers",
    skills: [
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Context API" },
    ],
  },
  {
    title: "UI & styling",
    hint: "Design systems and components",
    skills: [
      { name: "Tailwind CSS" },
      { name: "ShadCN UI" },
      { name: "Material UI" },
      { name: "Radix UI" },
    ],
  },
  {
    title: "Backend",
    hint: "Server-side applications",
    skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "NestJS" }, { name: "REST API" }],
  },
  {
    title: "Database & ORM",
    hint: "Persistence and data modelling",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Prisma ORM" },
      { name: "TypeORM" },
    ],
  },
  {
    title: "Auth & validation",
    hint: "Sessions, access and safety",
    skills: [{ name: "JWT" }, { name: "OAuth / Google OAuth" }, { name: "Zod" }],
  },
  {
    title: "Testing",
    hint: "Confidence in changes",
    skills: [{ name: "Jest" }, { name: "React Testing Library" }],
  },
  {
    title: "Tools",
    hint: "Daily workflow",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "npm" },
      { name: "Axios" },
      { name: "Figma" },
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  features: string[];
  /** TODO: replace "#" with the real repository URL */
  repo: string;
  /** TODO: replace "#" with the real live demo URL */
  demo: string;
  /** Screenshot URL resolved by Vite from an imported image. */
  image?: string | null;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "BookApp",
    tag: "Full-stack · Books",
    description:
      "A full-stack book management application with a typed NestJS API, secure authentication and a polished React client.",
    tech: [
      "React",
      "TypeScript",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Redux Toolkit",
      "Axios",
      "Zod",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    features: [
      "REST API with JWT authentication",
      "Google OAuth and email verification",
      "Password recovery and session management",
      "User profiles and authorization rules",
    ],
    repo: "#", // TODO: real repository URL
    demo: "#", // TODO: real live demo URL
    image: bookAppImage,
  },
  {
    title: "UrbanSneaks",
    tag: "Full-stack · E-commerce",
    description:
      "A full-stack e-commerce platform for premium sneakers, built pixel-perfect from a Figma design with a persistent cart and product catalogue.",
    tech: [
      "React",
      "Redux Toolkit",
      "React Query",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    features: [
      "Responsive pixel-perfect UI from Figma",
      "Catalogue with brand, size, colour and price filters",
      "Shopping cart with backend persistence",
      "REST API integration and full CRUD",
    ],
    repo: "#", // TODO: real repository URL
    demo: "#", // TODO: real live demo URL
    image: urbanSneaksImage,
  },
  {
    title: "B-Stroy",
    tag: "Full-stack · Construction · Active since July 2026",
    description:
      "A full-stack web application for managing construction materials, products, categories, suppliers, orders and inventory. Development began in July 2026 and is actively ongoing.",
    tech: [
      "React",
      "TypeScript",
      "NestJS",
      "MySQL",
      "Prisma ORM",
      "Tailwind CSS",
      "React Query",
      "Zod",
    ],
    features: [
      "Product and category management",
      "Orders, inventory and supplier management",
      "User authentication and authorization",
      "File and image uploads",
      "REST API with database integration",
      "Structured backend architecture",
    ],
    repo: "#", // TODO: real repository URL
    demo: "#", // TODO: real live demo URL
    image: bStroyImage,
  },
];

export const approach = [
  {
    step: "01",
    title: "Understand",
    text: "I clarify the task, user flow and technical constraints.",
  },
  {
    step: "02",
    title: "Structure",
    text: "I divide the feature into maintainable components and clear responsibilities.",
  },
  {
    step: "03",
    title: "Build",
    text: "I implement responsive interfaces, application logic and integrations.",
  },
  {
    step: "04",
    title: "Improve",
    text: "I test, refactor and optimize the result for usability and performance.",
  },
] as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
