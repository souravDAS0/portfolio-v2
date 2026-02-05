/**
 * Experience & Resume Type Definitions
 *
 * Extended types for the experience section, certifications, and resume
 */

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type LocationType = "remote" | "hybrid" | "onsite";

export interface ExperienceEntry {
  id: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  position: string;
  location: string;
  locationType: LocationType;
  employmentType: EmploymentType;
  startDate: string; // YYYY-MM format
  endDate?: string; // YYYY-MM or undefined for current
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface AchievementStat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}
