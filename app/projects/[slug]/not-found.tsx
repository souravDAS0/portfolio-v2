import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Project Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
