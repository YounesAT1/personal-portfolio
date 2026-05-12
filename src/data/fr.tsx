import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const FR_DATA = {
  name: "AIT-TALB YOUNES",
  initials: "YAT",
  url: "https://www.linkedin.com/in/at-1-younes/",
  location: "Casablanca, Maroc",
  locationLink: "https://www.google.com/maps/place/casablanca",
  description:
    "Développeur Full Stack R&D spécialisé en Next.js / React.js et Java. Je me concentre sur la conception d'applications web scalables et haute performance, ainsi que sur l'élaboration de solutions architecturales efficaces pour des problématiques métier complexes en entreprise.",

  summary:
    "Développeur Full Stack avec 2 ans d'expérience professionnelle dans la conception et le développement d'applications web d'entreprise modernes. Spécialisé en Next.js, TypeScript et architecture frontend scalable, avec une solide expérience en développement d'API Java et en intégration backend. À l'aise pour travailler en autonomie sur des produits complexes — des décisions d'architecture et de planification technique jusqu'à l'implémentation et l'optimisation des performances.",
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
    { href: "/", icon: HomeIcon, label: "Accueil" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "itsyounesaittalb@gmail.com",
    tel: "+212664344200",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/at-1-younes/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Envoyer un e-mail",
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
      title: "Développeur Full Stack R&D (Next.js/React.js – Java)",
      logoUrl: "/neonovia.png",
      start: "Juin 2025",
      end: "Présent",
      description:
        "Pilotage du développement frontend au sein d'une petite équipe R&D, en concevant une plateforme web moderne avec Next.js, TypeScript et Tailwind CSS. Mise en place de l'architecture frontend, du système de composants et des standards de développement. Livraison d'interfaces métier complexes incluant des tableaux de bord analytiques, des formulaires dynamiques, des workflows en temps réel et des visualisations de données avancées. Contribution au développement backend via l'intégration d'API Java et mise en œuvre de la communication en temps réel grâce aux Server-Sent Events et WebSockets pour la synchronisation instantanée des données, tout en améliorant les performances globales du frontend.",
    },
    {
      company: "Euryops",
      href: "https://www.euryops.ma/",
      badges: [],
      location: "Casablanca",
      title: "Développeur Full Stack (Next.js/React.js)",
      logoUrl: "/euryops.png",
      start: "Sep 2024",
      end: "Mai 2025",
      description:
        "Conception et développement from scratch d'un ERP modulaire pour la gestion des opérations internes avec Next.js, Tailwind CSS et MySQL. Modélisation et optimisation de la base de données relationnelle via l'indexation et l'amélioration des requêtes SQL, réduisant significativement les temps de réponse des API. Développement d'API REST sécurisées couvrant l'authentification JWT, le contrôle d'accès basé sur les rôles (RBAC) et les workflows métier. Livraison d'interfaces métier avancées incluant des tableaux de bord en temps réel, des formulaires dynamiques multi-étapes et des tableaux de données filtrables. Collaboration avec les équipes métier sur l'évolution du produit dans un environnement Agile.",
    },
    {
      company: "Euryops (Stage)",
      href: "https://www.euryops.ma/",
      badges: ["Stage"],
      location: "Casablanca",
      title: "Développeur BPM (Plateforme Visiativ)",
      logoUrl: "/euryops.png",
      start: "Avr 2024",
      end: "Mai 2024",
      description:
        "Digitalisation de plusieurs processus métier clés sur la plateforme Visiativ, en remplaçant entièrement les workflows manuels basés sur Excel et le papier. Développement et automatisation des workflows de validation, d'approbation et de notification pour améliorer l'efficacité opérationnelle. Participation à l'analyse des besoins métier et mise en œuvre de fonctionnalités adaptées aux processus internes. Contribution à la gestion du backlog produit et à la priorisation des tâches dans un environnement Agile/Scrum, en livrant les fonctionnalités dans les délais tout en garantissant qualité et stabilité.",
    },
  ],

  education: [
    {
      school: "EST Casablanca",
      href: "https://www.est-uh2c.ac.ma/",
      degree: "Licence Professionnelle — Développement Web & Mobile",
      logoUrl: "/est.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "OFPPT NTIC 2 Casablanca",
      href: "https://www.ofppt.ma/",
      degree: "Technicien Spécialisé — Développement Full Stack",
      logoUrl: "/OFPPT.png",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Pulse — Plateforme de Réseau Social",
      href: "https://pulse-weld-sigma.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Une plateforme de réseau social full stack inspirée de Facebook, avec publications, likes, abonnements, notifications en temps réel et uploads de médias. Construite avec une authentification JWT, le rendu côté serveur via Next.js et des requêtes de base de données optimisées grâce à Prisma ORM.",
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
      title: "Travely — Application de Réservation de Voyages",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Une application de réservation complète pour les vols, hôtels et transferts en taxi. Comprend un moteur de recherche dynamique, des confirmations automatiques par e-mail et un tableau de bord administrateur. Alimentée par une API REST Laravel avec authentification JWT et un frontend SSR optimisé construit avec Next.js.",
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
      title: "EduManage — Système de Gestion Scolaire",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Un système de gestion scolaire full stack développé avec Laravel, supportant une authentification multi-rôles (étudiant, professeur, directeur et super admin). La plateforme permet la gestion complète des établissements, utilisateurs, groupes, modules, filières et examens, avec un contrôle d'accès basé sur les rôles et une conception de base de données relationnelle.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade",
        "Bootstrap",
        "Eloquent ORM",
        "Architecture MVC",
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
      title: "ERP — Logiciel de Gestion d'Entreprise",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Un système ERP complet conçu pour optimiser les opérations d'entreprise, incluant la gestion des stocks, le suivi des ventes et la gestion de la relation client. Développé avec Next.js, TypeScript et MySQL, il propose une architecture modulaire, un contrôle d'accès basé sur les rôles et une interface utilisateur intuitive pour une gestion efficace des processus métier.",
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
      title: "CS50 — Introduction à l'Informatique",
      issuer: "Université Harvard",
      logoUrl: "/Harvard.png",
      url: "https://certificates.cs50.io/55906636-ea66-4d18-abd8-05d8ef5b687c.pdf?size=letter",
    },
    {
      title: "Certificat Professionnel Microsoft Azure AI Essentials",
      issuer: "Microsoft",
      logoUrl: "/microsoft.png",
      url: "https://www.linkedin.com/learning/certificates/bf3394d400542f704bfd934354b340dbb7ab224fea40e0faac8af9fde2237f93",
    },
    {
      title: "Certificat Professionnel Atlassian Agile Project Management",
      issuer: "Atlassian",
      logoUrl: "/atlassian.png",
      url: "https://www.linkedin.com/learning/certificates/a3dc4c7f90c157326d5ba3d6664ab63c7db9b05df42ae3be1ec2d6859a7d774c?trk=share_certificate",
    },
    {
      title: "Les Fondamentaux du Scrum",
      issuer: "LinkedIn Learning",
      logoUrl: "/linkedin-learning.png",
      url: "https://www.linkedin.com/learning/certificates/db4cbddf21b699d5a440bdb403dbae9961986eb9532a55c00b2b77f1bf6403c7?trk=share_certificate",
    },
    {
      title: "Apprendre Kubernetes",
      issuer: "LinkedIn Learning",
      logoUrl: "/linkedin-learning.png",
      url: "https://www.linkedin.com/learning/certificates/6f6dcebaa8c5646d61b8af24c35bc7be2f298a340bd49cf757e347f24d2f5181?trk=share_certificate",
    },
    {
      title: "Certificat d'Anglais — Niveau C1",
      issuer: "EF International",
      logoUrl: "/ef.png",
      url: "https://cert.efset.org/BEuzJV",
    },
  ],

  languages: [
    { name: "Arabe", level: "Langue maternelle", flag: "🇲🇦" },
    { name: "Anglais", level: "Courant", flag: "🇬🇧" },
    { name: "Français", level: "Intermédiaire", flag: "🇫🇷" },
  ],
} as const;
