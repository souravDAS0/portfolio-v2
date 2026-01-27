import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGrid } from "@/components/common/project-grid";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/data/projects";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="bg-background py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2
            id="projects-heading"
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A showcase of my recent work, ranging from full-stack applications
            to design systems and open-source contributions.
          </p>
        </div>

        {/* Project Grid */}
        <ProjectGrid projects={featuredProjects} />

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
