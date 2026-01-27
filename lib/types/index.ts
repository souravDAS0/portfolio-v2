/**
 * Global Type Definitions
 *
 * Centralized TypeScript types and interfaces for the portfolio
 * Organized by domain for better maintainability
 */

import { LucideIcon } from "lucide-react";

/**
 * ============================================
 * Common / Shared Types
 * ============================================
 */

/**
 * Base entity with common fields
 */
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Generic API Response
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

/**
 * ============================================
 * Navigation Types
 * ============================================
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  external?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

/**
 * ============================================
 * Social Media Types
 * ============================================
 */

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  label: string;
}

/**
 * ============================================
 * Project Types
 * ============================================
 */

export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription?: string;
  slug: string;
  category: string;
  tags: string[];
  images: ProjectImage[];
  thumbnail: string;
  featured: boolean;
  links: ProjectLinks;
  technologies: Technology[];
  startDate: Date;
  endDate?: Date;
  status: ProjectStatus;
  metrics?: ProjectMetrics;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
  article?: string;
  figma?: string;
}

export interface ProjectMetrics {
  stars?: number;
  forks?: number;
  downloads?: number;
  users?: number;
  performance?: number;
}

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned"
  | "archived";

/**
 * ============================================
 * Skills & Technology Types
 * ============================================
 */

export interface Technology {
  name: string;
  category: TechnologyCategory;
  icon?: string;
  proficiency?: number; // 0-100
  yearsOfExperience?: number;
}

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "tools"
  | "design"
  | "cloud"
  | "database"
  | "other";

export interface SkillGroup {
  category: TechnologyCategory;
  title: string;
  skills: Technology[];
}

/**
 * ============================================
 * Experience Types
 * ============================================
 */

export interface Experience extends BaseEntity {
  company: string;
  position: string;
  location: string;
  locationType: LocationType;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  companyLogo?: string;
}

export type LocationType = "remote" | "hybrid" | "onsite";

/**
 * ============================================
 * Education Types
 * ============================================
 */

export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  gpa?: number;
  achievements?: string[];
  description?: string;
}

/**
 * ============================================
 * Blog Types (Optional)
 * ============================================
 */

export interface BlogPost extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  featured: boolean;
  published: boolean;
  tags: string[];
  category: string;
  coverImage?: string;
  readingTime: number; // in minutes
  views?: number;
  likes?: number;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  social?: SocialLink[];
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
  count: number;
}

/**
 * ============================================
 * Contact Form Types
 * ============================================
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string; // Bot detection
  turnstileToken?: string; // Cloudflare Turnstile
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
}

/**
 * ============================================
 * GitHub Types
 * ============================================
 */

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

/**
 * ============================================
 * Analytics Types
 * ============================================
 */

export interface PageView {
  page: string;
  timestamp: Date;
  referrer?: string;
  userAgent?: string;
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

/**
 * ============================================
 * SEO Types
 * ============================================
 */

export interface SeoData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: OpenGraphData;
  twitter?: TwitterCardData;
  jsonLd?: Record<string, unknown>;
}

export interface OpenGraphData {
  title: string;
  description: string;
  url: string;
  type: string;
  images: OpenGraphImage[];
  siteName?: string;
  locale?: string;
}

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface TwitterCardData {
  card: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  images?: string[];
}

/**
 * ============================================
 * Component Props Types
 * ============================================
 */

/**
 * Common props for components that need className
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common props for components that need children
 */
export interface WithChildren {
  children: React.ReactNode;
}

/**
 * Common props for components with both
 */
export interface ComponentProps extends WithClassName, WithChildren {}

/**
 * Props for components that can be disabled
 */
export interface Disableable {
  disabled?: boolean;
}

/**
 * Props for components with loading state
 */
export interface Loadable {
  loading?: boolean;
}

/**
 * ============================================
 * Form Types
 * ============================================
 */

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  validation?: ValidationRule[];
}

export type FormFieldType =
  | "text"
  | "email"
  | "textarea"
  | "number"
  | "tel"
  | "url"
  | "select"
  | "checkbox"
  | "radio";

export interface ValidationRule {
  type: ValidationType;
  value?: unknown;
  message: string;
}

export type ValidationType =
  | "required"
  | "email"
  | "minLength"
  | "maxLength"
  | "pattern"
  | "custom";

/**
 * ============================================
 * Utility Types
 * ============================================
 */

/**
 * Make all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Make all properties required recursively
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Extract keys from object where value is of type T
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Ensure at least one property is defined
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

/**
 * Ensure exactly one property is defined
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
