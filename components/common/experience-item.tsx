"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/lib/types/experience";
import { formatExperienceDate, calculateDuration } from "@/lib/data/experience";

interface ExperienceItemProps {
  experience: ExperienceEntry;
  index: number;
}

const employmentTypeLabels: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  freelance: "Freelance",
  internship: "Internship",
};

const locationTypeLabels: Record<string, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-site",
};

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const dateRange = `${formatExperienceDate(experience.startDate)} - ${
    experience.current ? "Present" : formatExperienceDate(experience.endDate!)
  }`;
  const duration = calculateDuration(experience.startDate, experience.endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      {/* Timeline connector */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={cn(
            "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2",
            experience.current
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground"
          )}
        >
          <Briefcase className="h-4 w-4" />
        </div>
        {/* Line */}
        <div className="bg-border absolute top-10 bottom-0 w-px" />
      </div>

      {/* Content card */}
      <div className="flex-1 pb-2">
        <div
          className={cn(
            "group border-border/50 bg-card relative rounded-lg border p-6 shadow-sm transition-all",
            "hover:border-border hover:shadow-md"
          )}
        >
          {/* Current badge */}
          {experience.current && (
            <Badge variant="success" className="absolute top-4 right-4 text-xs">
              Current
            </Badge>
          )}

          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold">{experience.position}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-primary font-medium">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {experience.company}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  experience.company
                )}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Meta info */}
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <Badge variant="secondary">{dateRange}</Badge>
            <Badge variant="outline">{duration}</Badge>
            <Badge variant="outline">
              {employmentTypeLabels[experience.employmentType]}
            </Badge>
            <Badge variant="outline">
              {locationTypeLabels[experience.locationType]}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {experience.description}
          </p>

          {/* Expand/Collapse button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary mb-3 flex items-center gap-1 text-sm font-medium hover:underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "View Details"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isExpanded && "rotate-180"
              )}
            />
          </button>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-2">
              {/* Responsibilities */}
              {experience.responsibilities.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold">
                    Responsibilities
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {experience.achievements.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold">
                    Key Achievements
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    {experience.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {experience.technologies.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Hover accent line */}
          <div className="bg-primary absolute top-0 left-0 h-full w-1 rounded-l-lg opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
}
