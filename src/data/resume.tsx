import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "AIT-TALB YOUNES",
  initials: "YAT",
  url: "https://www.linkedin.com/in/at-1-younes/",
  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/casablanca",
  description:
    "Full Stack R&D Developer specializing in Next.js and Java. I focus on designing scalable, high-performance web applications and exploring efficient architectural solutions to solve complex real-world business problems.",
  summary:
    "Full Stack Developer with 2 years of professional experience in designing and engineering enterprise-grade web applications. Currently working as a full-stack R&D developer at Neonovia, contributing to the complete redesign of the Visiativ Process platform.Specialized in Next.js, TypeScript, and REST API architecture, with a strong focus on performance optimization, and scalable frontend-backend integration. I enjoy working in research-oriented engineering environments where I can analyze trade-offs, improve system design, and turn complex business requirements into clean, maintainable solutions .",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },

    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },

    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },

    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },

    { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic" },
    { name: "Jira", icon: "https://cdn.simpleicons.org/jira" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "itsyounesaittalb@gmail.com",
    tel: "+212664344200",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/YounesAT1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/at-1-younes/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:itsyounesaittalb@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neonovia",
      href: "https://neonovia.com/",
      badges: ["R&D"],
      location: "Casablanca",
      title: "Développeur R&D",
      logoUrl: "/neonovia.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Led the complete redesign of the Visiativ Process interface with Next.js, TypeScript and Tailwind CSS. Defined the frontend architecture from scratch — project structure, state management patterns (Redux / Context API / Zustand) and code conventions adopted by the entire team. Built a library of 20+ reusable components, reducing code redundancy and accelerating new feature delivery by ~30%. Developed custom business APIs via the Moovapps SDK (Java) and implemented real-time frontend/backend communication (SSE / WebSocket), improving data synchronization and reducing user friction under heavy load.",
    },
    {
      company: "Euryops",
      href: "https://www.euryops.ma/",
      badges: [],
      location: "Casablanca",
      title: "Développeur Full Stack",
      logoUrl: "/euryops.png",
      start: "Sep 2024",
      end: "May 2025",
      description:
        "Designed and developed a modular ERP from scratch using Next.js, Tailwind CSS and MySQL, now used daily by internal teams. Modeled and optimized the relational database schema through indexing and SQL query optimization, reducing average API response time by 30%+. Built 10+ RESTful APIs covering authentication (JWT), role management (RBAC) and business workflows with a focus on security and scalability. Delivered responsive, intuitive interfaces — real-time dashboards, multi-step forms and filterable data tables.",
    },
    {
      company: "Euryops (Stage)",
      href: "https://www.euryops.ma/",
      badges: ["Internship"],
      location: "Casablanca",
      title: "Développeur BPM (Stage de fin d'études)",
      logoUrl: "/euryops.png",
      start: "Apr 2024",
      end: "May 2024",
      description:
        "Digitized 5+ key business processes on the Visiativ platform, fully replacing paper and Excel workflows and eliminating manual data entry errors. Automated repetitive approval and notification workflows, reducing manual processing time by approximately 50–60%. Managed the client backlog, prioritized requests based on business impact and delivered key features within each sprint.",
    },
  ],

  education: [
    {
      school: "EST Casablanca",
      href: "https://www.est-uh2c.ac.ma/",
      degree: "Licence — Développement Web & Mobile",
      logoUrl: "/est.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "OFPPT NTIC 2 Casablanca",
      href: "https://www.ofppt.ma/",
      degree: "Technicien Spécialisé Full Stack",
      logoUrl: "/OFPPT.png",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Pulse — Social Media Platform",
      href: "https://pulse-weld-sigma.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A Facebook-like full stack social media platform featuring posts, likes, follows, real-time notifications and media uploads. Built with JWT authentication, server-side rendering via Next.js and optimized database queries through Prisma ORM.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YounesAT1/pulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pulse.png",
      video: "",
    },
    {
      title: "Travely — Travel Booking App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A full-featured booking application for flights, hotels and taxi transfers. Includes a dynamic search engine, automatic email confirmations and an admin dashboard. Powered by a Laravel REST API with JWT authentication and an optimized SSR frontend built with Next.js.",
      technologies: [
        "Next.js",
        "Laravel",
        "TypeScript",
        "MySQL",
        "TailwindCSS",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YounesAT1/EFF",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travelyLogo.svg",
      video: "",
    },

    {
      title: "EduManage — School Management System",
      href: "",
      dates: "2024",
      active: true,
      description:
        "A full-stack school management system built with Laravel that supports multi-role authentication (student, professor, director, and super admin). The platform allows complete management of schools, users, groups, modules, options, and exams with role-based access control and relational database design.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade",
        "Bootstrap",
        "Eloquent ORM",
        "MVC Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/YounesAT1/school-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/edumanage.png",
      video: "",
    },
    {
      title: "ERP System — Business Management Software",
      href: "",
      dates: "2025",
      active: true,
      description:
        "A comprehensive ERP system designed to streamline business operations, including inventory management, sales tracking, and customer relationship management. Built with Next.js, TypeScript, MySQL. it features a modular architecture, role-based access control, and an intuitive user interface for efficient business process management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "MySQL",
        "Prisma ORM",
      ],
      links: [],
      image: "/erp.png",
      video: "",
    },
  ],

  hackathons: [],

  certifications: [
    {
      title: "CS50 — Introduction to Computer Science",
      issuer: "Harvard University",
      logoUrl: "/Harvard.png",
      url: "https://certificates.cs50.io/55906636-ea66-4d18-abd8-05d8ef5b687c.pdf?size=letter",
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      logoUrl: "/microsoft.png",
      url: "https://www.linkedin.com/learning/certificates/bf3394d400542f704bfd934354b340dbb7ab224fea40e0faac8af9fde2237f93",
    },
    {
      title: "Atlassian Agile Project Management Professional Certificate",
      issuer: "Atlassian",
      logoUrl: "/atlassian.png",
      url: "https://www.linkedin.com/learning/certificates/a3dc4c7f90c157326d5ba3d6664ab63c7db9b05df42ae3be1ec2d6859a7d774c?trk=share_certificate",
    },
    {
      title: "Scrum Fundamentals — The Basics",
      issuer: "LinkedIn Learning",
      logoUrl: "/linkedin-learning.png",
      url: "https://www.linkedin.com/learning/certificates/db4cbddf21b699d5a440bdb403dbae9961986eb9532a55c00b2b77f1bf6403c7?trk=share_certificate",
    },
    {
      title: "Learning Kubernetes",
      issuer: "LinkedIn Learning",
      logoUrl: "/linkedin-learning.png",
      url: "https://www.linkedin.com/learning/certificates/6f6dcebaa8c5646d61b8af24c35bc7be2f298a340bd49cf757e347f24d2f5181?trk=share_certificate",
    },
    {
      title: "English Certificate — C1 Level",
      issuer: "EF International",
      logoUrl: "/ef.png",
      url: "https://cert.efset.org/BEuzJV",
    },
  ],

  languages: [
    { name: "Arabic", level: "Native", flag: "🇲🇦" },
    { name: "English", level: "Fluent", flag: "🇬🇧" },
    { name: "French", level: "Intermediate", flag: "🇫🇷" },
  ],
} as const;
