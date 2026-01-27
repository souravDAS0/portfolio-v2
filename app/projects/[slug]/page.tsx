import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectDetails } from "@/components/project/project-details";
import { getAllProjects, getProjectBySlug } from "@/lib/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [
        {
          url: project.thumbnail,
          alt: project.thumbnailAlt,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
    </main>
  );
}
