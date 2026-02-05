"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { EducationEntry } from "@/lib/types/experience";
import { formatExperienceDate } from "@/lib/data/experience";

interface EducationCardProps {
  entry: EducationEntry;
  index: number;
  className?: string;
}

export function EducationCard({ entry, index, className }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <div className="border-border/50 bg-card hover:border-border relative rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="bg-secondary flex-shrink-0 rounded-full p-2.5">
            <GraduationCap className="text-secondary-foreground h-5 w-5" />
          </div>

          <div className="flex-1">
            {/* Degree */}
            <h4 className="text-base font-semibold">
              {entry.degree} in {entry.field}
            </h4>

            {/* Institution */}
            <p className="text-primary mt-0.5 text-sm font-medium">
              {entry.institution}
            </p>

            {/* Meta */}
            <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {entry.location}
              </span>
              <span>
                {formatExperienceDate(entry.startDate)} -{" "}
                {formatExperienceDate(entry.endDate)}
              </span>
              {entry.gpa && <span>GPA: {entry.gpa}</span>}
            </div>

            {/* Honors */}
            {entry.honors && entry.honors.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.honors.map((honor) => (
                  <Badge key={honor} variant="secondary" className="text-xs">
                    {honor}
                  </Badge>
                ))}
              </div>
            )}

            {/* Relevant courses */}
            {entry.relevantCourses && entry.relevantCourses.length > 0 && (
              <div className="mt-3">
                <p className="text-muted-foreground text-xs">
                  <span className="font-medium">Relevant Coursework:</span>{" "}
                  {entry.relevantCourses.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hover accent */}
        <div className="bg-secondary absolute top-0 left-0 h-full w-1 rounded-l-lg opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
