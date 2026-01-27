import {
  AlertCircle,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Users,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBadgeGroup } from "@/components/common/tech-badge";
import { GitHubStats } from "@/components/common/github-stats";
import { ImageGallery } from "@/components/common/image-gallery";
import { ProjectGrid } from "@/components/common/project-grid";
import { Project } from "@/lib/types/project";
import { getRelatedProjects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export interface ProjectDetailsProps {
  project: Project;
  className?: string;
}

export function ProjectDetails({ project, className }: ProjectDetailsProps) {
  const relatedProjects = project.relatedProjects
    ? getRelatedProjects(project.id, 3)
    : [];

  return (
    <article className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-4xl space-y-16 px-4">
        {/* Overview Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">Overview</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              {project.metrics.role && (
                <div className="flex items-center gap-2">
                  <Briefcase className="text-muted-foreground h-4 w-4" />
                  <span className="text-muted-foreground">Role:</span>
                  <span className="font-medium">{project.metrics.role}</span>
                </div>
              )}
              {project.metrics.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="text-muted-foreground h-4 w-4" />
                  <span className="text-muted-foreground">Team:</span>
                  <span className="font-medium">
                    {project.metrics.teamSize}{" "}
                    {project.metrics.teamSize === 1 ? "person" : "people"}
                  </span>
                </div>
              )}
              {project.metrics.duration && (
                <div className="flex items-center gap-2">
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">
                    {project.metrics.duration}
                  </span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Problem Section */}
        {project.problem && (
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="text-destructive h-5 w-5" />
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Solution Section */}
        {project.solution && (
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="text-primary h-5 w-5" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <section>
            <h2 className="mb-6 text-3xl font-bold">Key Features</h2>
            <ul className="grid gap-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex items-start gap-3"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Outcomes Section */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section>
            <h2 className="mb-6 text-3xl font-bold">Outcomes & Impact</h2>
            <div className="grid gap-4">
              {project.outcomes.map((outcome, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-3 pt-6">
                    <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <p className="text-muted-foreground leading-relaxed">
                      {outcome}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section>
            <h2 className="mb-6 text-3xl font-bold">Gallery</h2>
            <ImageGallery images={project.gallery} />
          </section>
        )}

        {/* Tech Stack Section */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">Tech Stack</h2>
          <TechBadgeGroup
            technologies={project.technologies}
            maxDisplay={20}
            variant="default"
          />
        </section>

        {/* GitHub Stats Section */}
        {project.githubStats && (
          <section>
            <h2 className="mb-6 text-3xl font-bold">Repository Stats</h2>
            <Card>
              <CardContent className="pt-6">
                <GitHubStats stats={project.githubStats} />
              </CardContent>
            </Card>
          </section>
        )}

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section>
            <h2 className="mb-6 text-3xl font-bold">Related Projects</h2>
            <ProjectGrid projects={relatedProjects} />
          </section>
        )}
      </div>
    </article>
  );
}
