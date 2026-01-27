import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { BackToTop } from "@/components/common/back-to-top";

/**
 * Home Page - Portfolio
 *
 * Main portfolio page with all core sections
 *
 * Structure:
 * - Header (navigation)
 * - Hero (landing section)
 * - About (personal story & stats)
 * - Skills (technical expertise)
 * - Projects (portfolio showcase)
 * - Footer (links & contact)
 * - Back to top button
 *
 * Design Principles:
 * - Mobile-first responsive design
 * - Smooth scroll animations
 * - Consistent spacing and rhythm
 * - Dark/light theme support
 * - Accessibility compliant
 */
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <ProjectsSection />

        {/* TODO: Add more sections in future phases
         * - Experience & Timeline
         * - Contact Form
         * - Blog (optional)
         */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
