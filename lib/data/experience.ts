import type {
  ExperienceEntry,
  EducationEntry,
  Certification,
  AchievementStat,
} from "@/lib/types/experience";

/**
 * Work Experience Data
 * Ordered from most recent to oldest
 */
export const experiences: ExperienceEntry[] = [
  {
    id: "exp-01",
    company: "Tech Innovations Inc",
    companyUrl: "https://example.com",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    locationType: "hybrid",
    employmentType: "full-time",
    startDate: "2022-03",
    current: true,
    description:
      "Leading frontend architecture and development of enterprise-grade web applications serving 100K+ users.",
    responsibilities: [
      "Lead a team of 4 frontend developers across multiple product lines",
      "Architect and implement scalable React applications with Next.js",
      "Drive adoption of TypeScript and modern testing practices",
      "Collaborate with designers and product managers on feature roadmaps",
      "Conduct code reviews and mentor junior developers",
    ],
    achievements: [
      "Reduced page load time by 40% through performance optimization",
      "Increased test coverage from 30% to 85% across the frontend codebase",
      "Migrated legacy jQuery codebase to React, improving developer velocity by 3x",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "exp-02",
    company: "Digital Solutions Ltd",
    companyUrl: "https://example.com",
    position: "Full Stack Developer",
    location: "New York, NY",
    locationType: "remote",
    employmentType: "full-time",
    startDate: "2020-01",
    endDate: "2022-02",
    current: false,
    description:
      "Developed and maintained multiple client-facing web applications with a focus on responsive design and API development.",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs with Express and MongoDB",
      "Integrated third-party services including payment gateways and analytics",
      "Participated in agile ceremonies and sprint planning",
    ],
    achievements: [
      "Delivered 12+ client projects on time and within budget",
      "Built a reusable component library reducing development time by 25%",
      "Implemented real-time features using WebSockets for 3 client applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "SCSS",
      "Redis",
      "Docker",
    ],
  },
  {
    id: "exp-03",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    position: "Frontend Developer",
    location: "Austin, TX",
    locationType: "onsite",
    employmentType: "full-time",
    startDate: "2018-06",
    endDate: "2019-12",
    current: false,
    description:
      "First engineering hire at an early-stage startup, responsible for building the entire frontend from scratch.",
    responsibilities: [
      "Built the company's web application from the ground up using React",
      "Implemented responsive designs from Figma mockups with pixel-perfect accuracy",
      "Set up frontend tooling including Webpack, ESLint, and Prettier",
      "Worked directly with the CTO to define technical direction",
    ],
    achievements: [
      "Launched the MVP in 3 months, contributing to a $2M seed funding round",
      "Achieved a Lighthouse performance score of 95+ on all pages",
      "Built an accessible UI earning WCAG 2.1 AA compliance",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Webpack",
      "CSS Modules",
      "Firebase",
      "Figma",
    ],
  },
];

/**
 * Education Data
 */
export const education: EducationEntry[] = [
  {
    id: "edu-01",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Boston, MA",
    startDate: "2014-09",
    endDate: "2018-05",
    gpa: "3.8",
    honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
    ],
  },
];

/**
 * Certifications Data
 */
export const certifications: Certification[] = [
  {
    id: "cert-01",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "2023-06",
    expiryDate: "2026-06",
    credentialId: "AWS-SAA-C03-XXXXX",
    credentialUrl: "https://aws.amazon.com/verification",
    skills: ["AWS", "Cloud Architecture", "Infrastructure"],
  },
  {
    id: "cert-02",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issueDate: "2022-03",
    credentialId: "PSM-I-XXXXX",
    credentialUrl: "https://scrum.org/verify",
    skills: ["Agile", "Scrum", "Project Management"],
  },
  {
    id: "cert-03",
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta (Coursera)",
    issueDate: "2021-11",
    credentialId: "META-FE-XXXXX",
    credentialUrl: "https://coursera.org/verify",
    skills: ["React", "JavaScript", "Frontend Development"],
  },
];

/**
 * Achievement Statistics
 */
export const achievementStats: AchievementStat[] = [
  {
    id: "stat-01",
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Professional software development",
  },
  {
    id: "stat-02",
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Web and mobile applications",
  },
  {
    id: "stat-03",
    value: 100,
    suffix: "K+",
    label: "Users Impacted",
    description: "Across all applications",
  },
  {
    id: "stat-04",
    value: 15,
    suffix: "+",
    label: "Technologies",
    description: "In active tech stack",
  },
];

/**
 * Helper: Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Helper: Calculate duration between two dates
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) return `${remainingMonths} mo`;
  if (remainingMonths === 0) return `${years} yr`;
  return `${years} yr ${remainingMonths} mo`;
}
