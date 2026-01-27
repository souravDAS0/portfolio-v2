export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectLink {
  type: "live" | "github" | "case-study" | "demo";
  url: string;
  label?: string;
}

export interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  language: string;
  lastUpdated: string;
}

export interface ProjectMetrics {
  teamSize?: number;
  duration?: string;
  role?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  // Basic Info
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;

  // Status & Featured
  status: ProjectStatus;
  featured?: boolean;

  // Media
  thumbnail: string;
  thumbnailAlt: string;
  heroImage?: string;
  gallery?: ProjectImage[];

  // Technologies
  technologies: string[];

  // Links
  links: ProjectLink[];

  // GitHub Integration
  githubRepo?: string;
  githubStats?: GitHubStats;

  // Detailed Content (for detail page)
  problem?: string;
  solution?: string;
  features?: string[];
  outcomes?: string[];
  metrics?: ProjectMetrics;

  // Related Projects
  relatedProjects?: string[];

  // Metadata
  startDate?: string;
  endDate?: string;
  category?: string;
}

export interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  className?: string;
}

export interface ProjectGridProps {
  projects: Project[];
  className?: string;
}
