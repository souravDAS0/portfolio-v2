/**
 * Site Constants and Configuration
 *
 * Centralized configuration for the portfolio site
 * All constants are strongly typed for type safety
 */

/**
 * Site Metadata
 */
export const SITE_CONFIG = {
  name: "Sourav Das",
  title: "Sourav Das - Full Stack Developer",
  description:
    "Portfolio of Sourav Das - A passionate full-stack developer specializing in modern web technologies, React, Next.js, and TypeScript.",
  url: "https://yourdomain.com", // Update with actual domain
  ogImage: "https://yourdomain.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com",
  },
} as const;

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    description: "Back to homepage",
  },
  {
    label: "About",
    href: "#about",
    description: "Learn more about me",
  },
  {
    label: "Skills",
    href: "#skills",
    description: "Technical expertise",
  },
  {
    label: "Projects",
    href: "#projects",
    description: "Portfolio showcase",
  },
  {
    label: "Experience",
    href: "#experience",
    description: "Work history",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Get in touch",
  },
] as const;

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: "github",
    label: "View GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: "twitter",
    label: "Follow on Twitter",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: "mail",
    label: "Send an email",
  },
] as const;

/**
 * Skills Categories
 */
export const SKILLS_CATEGORIES = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Tools & Technologies",
  design: "Design & UI/UX",
  other: "Other Skills",
} as const;

/**
 * Project Categories/Tags
 */
export const PROJECT_CATEGORIES = [
  "Web Development",
  "Mobile App",
  "API Development",
  "Design System",
  "Open Source",
  "Client Work",
  "Personal Project",
] as const;

/**
 * Technology Stack
 */
export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "VS Code", "Figma", "Postman"],
  cloud: ["Vercel", "AWS", "Netlify", "Heroku"],
} as const;

/**
 * Contact Form Configuration
 */
export const CONTACT_FORM_CONFIG = {
  maxMessageLength: 1000,
  maxSubjectLength: 100,
  requiredFields: ["name", "email", "message"] as const,
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  turnstileEnabled: false, // Enable when Cloudflare Turnstile is configured
} as const;

/**
 * Animation Configuration
 */
export const ANIMATION_CONFIG = {
  // Duration in seconds
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  // Easing functions
  easing: {
    ease: "easeInOut",
    easeIn: "easeIn",
    easeOut: "easeOut",
  },
  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

/**
 * Breakpoints (matches Tailwind defaults)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Z-Index Scale
 * Centralized z-index values for consistent layering
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  max: 9999,
} as const;

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  contact: "/api/contact",
  subscribe: "/api/subscribe",
  github: "/api/github",
} as const;

/**
 * Feature Flags
 */
export const FEATURES = {
  blog: false, // Enable blog section
  resume_download: true, // Allow resume downloads
  contact_form: true, // Show contact form
  analytics: false, // Enable analytics (configure in production)
  newsletter: false, // Newsletter subscription
} as const;

/**
 * SEO Configuration
 */
export const SEO_CONFIG = {
  defaultTitle: SITE_CONFIG.title,
  titleTemplate: "%s | Sourav Das",
  defaultDescription: SITE_CONFIG.description,
  siteName: SITE_CONFIG.name,
  twitterHandle: "@yourusername",
  locale: "en_US",
} as const;

/**
 * Date Formatting
 */
export const DATE_FORMATS = {
  short: "MMM YYYY", // Jan 2024
  long: "MMMM DD, YYYY", // January 01, 2024
  full: "EEEE, MMMM DD, YYYY", // Monday, January 01, 2024
} as const;

/**
 * Regex Patterns
 */
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  github: /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+$/,
} as const;

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  invalidUrl: "Please enter a valid URL",
  messageTooLong: `Message must be less than ${CONTACT_FORM_CONFIG.maxMessageLength} characters`,
  subjectTooLong: `Subject must be less than ${CONTACT_FORM_CONFIG.maxSubjectLength} characters`,
  genericError: "Something went wrong. Please try again later.",
  networkError: "Network error. Please check your connection.",
} as const;

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  contactFormSubmitted:
    "Thank you for your message! I'll get back to you soon.",
  subscribed: "Successfully subscribed to the newsletter!",
  copied: "Copied to clipboard!",
} as const;
