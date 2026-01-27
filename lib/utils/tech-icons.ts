import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "tools"
  | "design";

export interface TechIconConfig {
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  darkTextColor: string;
}

export const TECH_CATEGORY_ICONS: Record<TechCategory, TechIconConfig> = {
  frontend: {
    icon: Code2,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-700",
    darkTextColor: "dark:text-blue-300",
  },
  backend: {
    icon: Server,
    bgColor: "bg-green-500/10",
    textColor: "text-green-700",
    darkTextColor: "dark:text-green-300",
  },
  database: {
    icon: Database,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-700",
    darkTextColor: "dark:text-purple-300",
  },
  cloud: {
    icon: Cloud,
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-700",
    darkTextColor: "dark:text-cyan-300",
  },
  tools: {
    icon: Wrench,
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-700",
    darkTextColor: "dark:text-orange-300",
  },
  design: {
    icon: Palette,
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-700",
    darkTextColor: "dark:text-pink-300",
  },
};

/**
 * Maps technology names to their categories
 * This can be extended as more technologies are added
 */
export const TECH_TO_CATEGORY: Record<string, TechCategory> = {
  // Frontend
  react: "frontend",
  nextjs: "frontend",
  "next.js": "frontend",
  vue: "frontend",
  angular: "frontend",
  svelte: "frontend",
  typescript: "frontend",
  javascript: "frontend",
  tailwind: "frontend",
  "tailwind css": "frontend",
  css: "frontend",
  html: "frontend",
  sass: "frontend",

  // Backend
  nodejs: "backend",
  "node.js": "backend",
  express: "backend",
  fastapi: "backend",
  django: "backend",
  flask: "backend",
  nestjs: "backend",
  python: "backend",
  java: "backend",
  "spring boot": "backend",
  go: "backend",
  rust: "backend",

  // Database
  postgresql: "database",
  postgres: "database",
  mysql: "database",
  mongodb: "database",
  redis: "database",
  sqlite: "database",
  prisma: "database",
  supabase: "database",
  firebase: "database",

  // Cloud
  aws: "cloud",
  azure: "cloud",
  gcp: "cloud",
  "google cloud": "cloud",
  vercel: "cloud",
  netlify: "cloud",
  heroku: "cloud",
  docker: "cloud",
  kubernetes: "cloud",

  // Tools
  git: "tools",
  github: "tools",
  gitlab: "tools",
  webpack: "tools",
  vite: "tools",
  jest: "tools",
  vitest: "tools",
  cypress: "tools",
  playwright: "tools",

  // Design
  figma: "design",
  sketch: "design",
  "adobe xd": "design",
  framer: "design",
};

/**
 * Get the icon configuration for a technology
 * Falls back to "tools" category if technology is not found
 */
export function getTechIconConfig(technology: string): TechIconConfig {
  const normalizedTech = technology.toLowerCase();
  const category = TECH_TO_CATEGORY[normalizedTech] || "tools";
  return TECH_CATEGORY_ICONS[category];
}
