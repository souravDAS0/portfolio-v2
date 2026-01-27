/**
 * Skills Data
 *
 * Centralized data for skills and technologies
 */

import { Technology, SkillGroup } from "@/lib/types";

/**
 * All Skills
 */
export const skills: Technology[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    proficiency: 95,
    yearsOfExperience: 5,
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 90,
    yearsOfExperience: 3,
  },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 92,
    yearsOfExperience: 4,
  },
  {
    name: "JavaScript",
    category: "frontend",
    proficiency: 95,
    yearsOfExperience: 6,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 90,
    yearsOfExperience: 3,
  },
  {
    name: "HTML5",
    category: "frontend",
    proficiency: 98,
    yearsOfExperience: 6,
  },
  { name: "CSS3", category: "frontend", proficiency: 95, yearsOfExperience: 6 },
  {
    name: "Framer Motion",
    category: "frontend",
    proficiency: 85,
    yearsOfExperience: 2,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    proficiency: 88,
    yearsOfExperience: 5,
  },
  {
    name: "Express",
    category: "backend",
    proficiency: 85,
    yearsOfExperience: 4,
  },
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: 80,
    yearsOfExperience: 3,
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: 82,
    yearsOfExperience: 4,
  },
  {
    name: "GraphQL",
    category: "backend",
    proficiency: 75,
    yearsOfExperience: 2,
  },
  {
    name: "REST APIs",
    category: "backend",
    proficiency: 90,
    yearsOfExperience: 5,
  },

  // Tools & DevOps
  { name: "Git", category: "tools", proficiency: 92, yearsOfExperience: 6 },
  { name: "Docker", category: "cloud", proficiency: 78, yearsOfExperience: 2 },
  { name: "AWS", category: "cloud", proficiency: 75, yearsOfExperience: 2 },
  { name: "Vercel", category: "cloud", proficiency: 88, yearsOfExperience: 3 },
  {
    name: "GitHub Actions",
    category: "tools",
    proficiency: 80,
    yearsOfExperience: 2,
  },
  { name: "VS Code", category: "tools", proficiency: 95, yearsOfExperience: 6 },

  // Design
  { name: "Figma", category: "design", proficiency: 82, yearsOfExperience: 3 },
  {
    name: "Responsive Design",
    category: "design",
    proficiency: 95,
    yearsOfExperience: 6,
  },
  {
    name: "UI/UX Design",
    category: "design",
    proficiency: 85,
    yearsOfExperience: 4,
  },
  {
    name: "Accessibility",
    category: "design",
    proficiency: 88,
    yearsOfExperience: 4,
  },
];

/**
 * Skills grouped by category
 */
export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    skills: skills.filter((s) => s.category === "frontend"),
  },
  {
    category: "backend",
    title: "Backend Development",
    skills: skills.filter((s) => s.category === "backend"),
  },
  {
    category: "database",
    title: "Databases",
    skills: skills.filter((s) => s.category === "database"),
  },
  {
    category: "cloud",
    title: "Cloud & DevOps",
    skills: skills.filter((s) => s.category === "cloud"),
  },
  {
    category: "tools",
    title: "Tools & Workflow",
    skills: skills.filter((s) => s.category === "tools"),
  },
  {
    category: "design",
    title: "Design & UX",
    skills: skills.filter((s) => s.category === "design"),
  },
];

/**
 * Featured skills for quick display
 */
export const featuredSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: string): Technology[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get skill by name
 */
export function getSkillByName(name: string): Technology | undefined {
  return skills.find((skill) => skill.name === name);
}
