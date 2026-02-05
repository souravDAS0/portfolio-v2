"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ExperienceItem } from "@/components/common/experience-item";
import type { ExperienceEntry } from "@/lib/types/experience";

interface ExperienceTimelineProps {
  experiences: ExperienceEntry[];
  className?: string;
}

/**
 * Experience Timeline Component
 *
 * Renders a vertical timeline of work experience entries
 * with animated connector line and expand/collapse details
 */
export function ExperienceTimeline({
  experiences,
  className,
}: ExperienceTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
}
