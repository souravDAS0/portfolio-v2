"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResumeDownloadProps {
  resumeUrl?: string;
  lastUpdated?: string;
  className?: string;
}

/**
 * Resume Download Component
 *
 * Prominent download CTA for the resume PDF
 * with last updated date and view online option
 */
export function ResumeDownload({
  resumeUrl = "/resume/resume.pdf",
  lastUpdated = "January 2025",
  className,
}: ResumeDownloadProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "border-border/50 bg-card/50 rounded-lg border p-6 backdrop-blur sm:p-8",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Icon */}
        <div className="bg-primary/10 flex-shrink-0 rounded-xl p-4">
          <FileText className="text-primary h-8 w-8" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="mb-1 text-lg font-semibold">Download My Resume</h3>
          <p className="text-muted-foreground mb-1 text-sm">
            Get a detailed overview of my experience, skills, and education.
          </p>
          <p className="text-muted-foreground/70 mb-4 text-xs">
            Last updated: {lastUpdated} &middot; PDF format
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <Button asChild>
              <a href={resumeUrl} download>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" />
                View Online
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
