import { Project } from "@/lib/types/project";

export const sampleProjects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Modern shopping experience with real-time inventory",
    description:
      "A full-stack e-commerce platform built with Next.js and PostgreSQL, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    status: "live",
    featured: true,
    thumbnail: "/images/projects/ecommerce-thumb.jpg",
    thumbnailAlt: "E-Commerce Platform Dashboard",
    heroImage: "/images/projects/ecommerce-hero.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "Prisma",
    ],
    links: [
      { type: "live", url: "https://example.com", label: "View Live" },
      { type: "github", url: "https://github.com/username/repo" },
    ],
    githubRepo: "username/ecommerce-platform",
    githubStats: {
      stars: 1234,
      forks: 234,
      watchers: 89,
      language: "TypeScript",
      lastUpdated: "2 days ago",
    },
    problem:
      "Small businesses struggle with expensive e-commerce solutions that lack flexibility and real-time inventory management.",
    solution:
      "Built a lightweight, modern platform with real-time features and an intuitive interface, reducing operational costs by 40%.",
    features: [
      "Real-time inventory sync across multiple locations",
      "Secure payment processing with Stripe integration",
      "Responsive admin dashboard with analytics",
      "SEO-optimized product pages",
      "Multi-currency support",
    ],
    outcomes: [
      "Processed $500K+ in transactions in first 6 months",
      "40% reduction in cart abandonment rate",
      "95% customer satisfaction score",
    ],
    metrics: {
      teamSize: 3,
      duration: "6 months",
      role: "Lead Frontend Developer",
    },
    gallery: [
      {
        url: "/images/projects/ecommerce-1.jpg",
        alt: "Product listing page",
      },
      {
        url: "/images/projects/ecommerce-2.jpg",
        alt: "Shopping cart interface",
      },
      {
        url: "/images/projects/ecommerce-3.jpg",
        alt: "Admin dashboard",
      },
    ],
    startDate: "2024-01",
    endDate: "2024-06",
    category: "Web Application",
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    tagline: "Collaborative task tracking with AI-powered insights",
    description:
      "A modern task management application with AI-powered task suggestions, team collaboration features, and beautiful visualizations.",
    status: "live",
    featured: true,
    thumbnail: "/images/projects/taskapp-thumb.jpg",
    thumbnailAlt: "Task Management Dashboard",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "OpenAI",
    ],
    links: [
      { type: "live", url: "https://taskapp.example.com" },
      { type: "github", url: "https://github.com/username/task-app" },
      { type: "case-study", url: "/projects/task-management-app" },
    ],
    problem:
      "Teams waste time organizing tasks and struggle with prioritization across multiple projects.",
    solution:
      "Created an intelligent task manager that uses AI to suggest priorities and automate routine organization.",
    features: [
      "AI-powered task prioritization",
      "Real-time team collaboration",
      "Customizable kanban boards",
      "Time tracking and reporting",
      "Integration with popular tools (Slack, GitHub)",
    ],
    outcomes: [
      "2,000+ active users within 3 months",
      "30% improvement in team productivity",
      "Featured on Product Hunt",
    ],
    metrics: {
      teamSize: 2,
      duration: "4 months",
      role: "Full Stack Developer",
    },
    startDate: "2024-03",
    category: "Web Application",
  },
  {
    id: "3",
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    tagline: "Headless CMS for creative professionals",
    description:
      "A headless CMS tailored for designers and developers to showcase their work with beautiful templates and easy customization.",
    status: "in-progress",
    thumbnail: "/images/projects/cms-thumb.jpg",
    thumbnailAlt: "Portfolio CMS Interface",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "MDX"],
    links: [
      { type: "github", url: "https://github.com/username/portfolio-cms" },
    ],
    problem:
      "Creatives need an easy way to showcase work without dealing with complex CMS platforms.",
    solution:
      "Built a focused, user-friendly CMS with beautiful templates and MDX support for rich content.",
    features: [
      "Drag-and-drop page builder",
      "MDX support for rich content",
      "Built-in analytics dashboard",
      "Custom domain support",
      "SEO optimization tools",
    ],
    metrics: {
      teamSize: 1,
      duration: "Ongoing",
      role: "Solo Developer",
    },
    startDate: "2024-08",
    category: "Web Application",
  },
  {
    id: "4",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    tagline: "Real-time weather data visualization",
    description:
      "An interactive weather dashboard with beautiful data visualizations, forecasts, and location-based alerts.",
    status: "live",
    thumbnail: "/images/projects/weather-thumb.jpg",
    thumbnailAlt: "Weather Dashboard",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    links: [
      { type: "live", url: "https://weather.example.com" },
      { type: "github", url: "https://github.com/username/weather-dashboard" },
    ],
    features: [
      "Real-time weather updates",
      "7-day forecast visualization",
      "Location-based alerts",
      "Historical data charts",
      "PWA support for offline access",
    ],
    metrics: {
      teamSize: 1,
      duration: "2 months",
      role: "Frontend Developer",
    },
    startDate: "2024-05",
    endDate: "2024-07",
    category: "Data Visualization",
  },
  {
    id: "5",
    slug: "design-system",
    title: "Design System",
    tagline: "Component library for enterprise applications",
    description:
      "A comprehensive design system with accessible components, documentation, and theming capabilities.",
    status: "live",
    featured: true,
    thumbnail: "/images/projects/design-system-thumb.jpg",
    thumbnailAlt: "Design System Components",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Tailwind CSS",
      "Radix UI",
    ],
    links: [
      { type: "live", url: "https://design.example.com" },
      { type: "github", url: "https://github.com/username/design-system" },
    ],
    features: [
      "50+ accessible components",
      "Dark mode support",
      "Comprehensive documentation",
      "Interactive playground",
      "Figma integration",
    ],
    outcomes: [
      "Adopted by 10+ internal teams",
      "50% faster development time",
      "WCAG 2.1 AA compliant",
    ],
    metrics: {
      teamSize: 4,
      duration: "8 months",
      role: "Design System Lead",
    },
    startDate: "2023-10",
    endDate: "2024-06",
    category: "Design System",
  },
  {
    id: "6",
    slug: "analytics-platform",
    title: "Analytics Platform",
    tagline: "Privacy-first analytics for modern websites",
    description:
      "A lightweight analytics platform that respects user privacy while providing actionable insights.",
    status: "archived",
    thumbnail: "/images/projects/analytics-thumb.jpg",
    thumbnailAlt: "Analytics Dashboard",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Tailwind CSS", "Vercel"],
    links: [{ type: "github", url: "https://github.com/username/analytics" }],
    features: [
      "GDPR-compliant tracking",
      "Real-time visitor data",
      "Custom event tracking",
      "A/B testing support",
      "Lightweight script (< 1KB)",
    ],
    metrics: {
      teamSize: 2,
      duration: "3 months",
      role: "Backend Developer",
    },
    startDate: "2023-06",
    endDate: "2023-09",
    category: "Analytics",
  },
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return sampleProjects;
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return sampleProjects.filter((project) => project.featured);
}

/**
 * Get a project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return sampleProjects.find((project) => project.slug === slug);
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(
  status: "live" | "in-progress" | "archived"
): Project[] {
  return sampleProjects.filter((project) => project.status === status);
}

/**
 * Get related projects (excluding current project)
 */
export function getRelatedProjects(
  currentProjectId: string,
  limit: number = 3
): Project[] {
  return sampleProjects
    .filter((project) => project.id !== currentProjectId)
    .slice(0, limit);
}
