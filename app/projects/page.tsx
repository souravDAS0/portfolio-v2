import { Metadata } from "next";
import { ProjectGrid } from "@/components/common/project-grid";
import { getAllProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web applications, design systems, and open-source contributions.",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
            A collection of projects showcasing my expertise in full-stack
            development, UI/UX design, and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <ProjectGrid projects={allProjects} />
        </div>
      </section>
    </main>
  );
}
