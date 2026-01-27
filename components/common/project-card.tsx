"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechBadgeGroup } from "@/components/common/tech-badge";
import { Project } from "@/lib/types/project";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured";
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const liveLink = project.links.find((link) => link.type === "live");
  const githubLink = project.links.find((link) => link.type === "github");

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
    <motion.div
      whileHover={{
        y: -6,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Card className="group flex h-full flex-col overflow-hidden">
        {/* Thumbnail */}
        <Link href={`/projects/${project.slug}`} className="relative block">
          <div className="bg-muted relative aspect-video overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>

            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <Badge className={cn("text-xs", statusColors[project.status])}>
                {statusLabels[project.status]}
              </Badge>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-grow flex-col p-6">
          {/* Title & Tagline */}
          <Link href={`/projects/${project.slug}`} className="group/title mb-3">
            <h3 className="group-hover/title:text-primary mb-1 line-clamp-2 text-xl font-bold transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {project.tagline}
            </p>
          </Link>

          {/* Description */}
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <TechBadgeGroup
              technologies={project.technologies}
              maxDisplay={4}
              variant="default"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex gap-2">
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link href={`/projects/${project.slug}`}>View Project</Link>
            </Button>

            {githubLink && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-shrink-0"
              >
                <a
                  href={githubLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}

            {liveLink && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-shrink-0"
              >
                <a
                  href={liveLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
