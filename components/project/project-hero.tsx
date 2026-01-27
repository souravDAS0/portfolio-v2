"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types/project";
import { cn } from "@/lib/utils";

export interface ProjectHeroProps {
  project: Project;
  className?: string;
}

export function ProjectHero({ project, className }: ProjectHeroProps) {
  const liveLink = project.links.find((link) => link.type === "live");
  const githubLink = project.links.find((link) => link.type === "github");
  const caseStudyLink = project.links.find(
    (link) => link.type === "case-study"
  );

  const statusColors = {
    live: "bg-green-500 text-white",
    "in-progress": "bg-yellow-500 text-white",
    archived: "bg-gray-500 text-white",
  };

  const statusLabels = {
    live: "Live",
    "in-progress": "In Progress",
    archived: "Archived",
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh]",
        className
      )}
    >
      {/* Background Image with Overlay */}
      {project.heroImage ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero image`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        </>
      ) : (
        /* Gradient Background (fallback) */
        <div className="from-primary/20 via-background to-secondary/20 absolute inset-0 z-0 bg-gradient-to-br" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status & Featured Badges */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Badge className={cn("text-sm", statusColors[project.status])}>
              {statusLabels[project.status]}
            </Badge>
            {project.featured && (
              <Badge variant="secondary" className="text-sm">
                Featured Project
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1
            className={cn(
              "mb-4 text-4xl font-bold md:text-5xl lg:text-6xl",
              project.heroImage ? "text-white" : ""
            )}
            style={
              project.heroImage
                ? { textShadow: "0 2px 10px rgba(0,0,0,0.5)" }
                : {}
            }
          >
            {project.title}
          </h1>

          {/* Tagline */}
          <p
            className={cn(
              "mx-auto mb-8 max-w-2xl text-lg md:text-xl",
              project.heroImage ? "text-white/90" : "text-muted-foreground"
            )}
            style={
              project.heroImage
                ? { textShadow: "0 2px 8px rgba(0,0,0,0.5)" }
                : {}
            }
          >
            {project.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {liveLink && (
              <Button
                asChild
                size="lg"
                variant={project.heroImage ? "default" : "default"}
              >
                <a
                  href={liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  View Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            )}

            {githubLink && (
              <Button
                asChild
                size="lg"
                variant={project.heroImage ? "secondary" : "outline"}
              >
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}

            {caseStudyLink && (
              <Button
                asChild
                size="lg"
                variant={project.heroImage ? "outline" : "outline"}
                className={
                  project.heroImage
                    ? "border-white/20 text-white hover:bg-white/10"
                    : ""
                }
              >
                <a href={caseStudyLink.url}>
                  <FileText className="mr-2 h-4 w-4" />
                  Case Study
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
