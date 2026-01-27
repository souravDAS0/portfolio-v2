"use client";

import * as React from "react";
import { Calendar, Code, Coffee, Users } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { StatCard, StatsGrid } from "@/components/common/stat-card";
import { Timeline } from "@/components/common/timeline";
import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/lib/utils/animations";

/**
 * About Section Component
 *
 * Tells the professional story and showcases key metrics
 *
 * Design Decisions:
 * - Two-column layout on desktop (image + content)
 * - Stats grid for quick metrics overview
 * - Timeline for career progression
 * - Professional photo for personal connection
 * - Whitespace for readability
 *
 * Content Strategy:
 * 1. Hook - Engaging opening
 * 2. Story - Professional journey
 * 3. Stats - Quantifiable achievements
 * 4. Timeline - Career milestones
 * 5. Call-to-action - Next steps
 *
 * Visual Hierarchy:
 * - Section heading
 * - Professional photo (visual anchor)
 * - Bio text (story)
 * - Stats (achievements)
 * - Timeline (journey)
 *
 * Responsive Design:
 * - Single column on mobile
 * - Two columns on tablet+
 * - Optimized image sizes
 * - Readable line lengths
 *
 * Accessibility:
 * - Proper heading hierarchy
 * - Alt text for images
 * - Semantic HTML
 * - High contrast text
 *
 * @example
 * ```tsx
 * <About />
 * ```
 */
export function About() {
  // Sample timeline data - replace with real data
  const timelineEvents = [
    {
      id: "1",
      date: "2020 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
      type: "work" as const,
    },
    {
      id: "2",
      date: "2018 - 2020",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      description:
        "Developed and maintained multiple client projects. Specialized in responsive web design and RESTful API development.",
      type: "work" as const,
    },
    {
      id: "3",
      date: "2018",
      title: "Bachelor's in Computer Science",
      company: "University of Technology",
      description:
        "Graduated with honors. Focus on software engineering, algorithms, and web technologies.",
      type: "education" as const,
    },
  ];

  return (
    <Section id="about" variant="secondary">
      <Container>
        {/* Section Header */}
        <AnimatedSection variant={fadeInUp}>
          <div className="mb-16 text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Passionate about creating elegant solutions to complex problems
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <AnimatedSection variant={fadeInUp} delay={0.2}>
            <div className="relative">
              {/* Profile Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <div className="from-primary/20 to-primary/5 absolute inset-0 bg-gradient-to-br" />
                {/* Replace with actual profile image */}
                <div className="bg-muted flex h-full w-full items-center justify-center">
                  <p className="text-muted-foreground">
                    Your Profile Photo Here
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="bg-primary/10 absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full blur-2xl" />
              <div className="bg-secondary/10 absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Right Column - Bio */}
          <AnimatedSection variant={fadeInUp} delay={0.3}>
            <div className="flex h-full flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold">
                Hi, I&apos;m Sourav Das
              </h3>

              <div className="text-muted-foreground space-y-4">
                <p>
                  I&apos;m a passionate Full Stack Developer with over 5 years
                  of experience building modern web applications. I specialize
                  in creating scalable, user-friendly solutions using
                  cutting-edge technologies.
                </p>

                <p>
                  My journey in tech started with a curiosity about how websites
                  work, which evolved into a career dedicated to crafting
                  exceptional digital experiences. I believe in writing clean,
                  maintainable code and following best practices.
                </p>

                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>

              {/* CTA or additional links */}
              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Get in touch →
                </a>
                <a
                  href="/resume.pdf"
                  className="text-muted-foreground hover:text-foreground text-sm font-medium"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Grid */}
        <AnimatedSection variant={fadeInUp} delay={0.4}>
          <div className="mb-20">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              By The Numbers
            </h3>
            <StatsGrid>
              <StatCard
                value="5+"
                label="Years Experience"
                icon={Calendar}
                subtitle="Professional Development"
                delay={0.1}
              />
              <StatCard
                value="50+"
                label="Projects Completed"
                icon={Code}
                subtitle="Web & Mobile Apps"
                delay={0.2}
              />
              <StatCard
                value="1000+"
                label="Cups of Coffee"
                icon={Coffee}
                subtitle="Fuel for Coding"
                delay={0.3}
              />
              <StatCard
                value="20+"
                label="Happy Clients"
                icon={Users}
                subtitle="Worldwide"
                delay={0.4}
              />
            </StatsGrid>
          </div>
        </AnimatedSection>

        {/* Career Timeline */}
        <AnimatedSection variant={fadeInUp} delay={0.5}>
          <div>
            <h3 className="mb-12 text-center text-2xl font-semibold">
              My Journey
            </h3>
            <Timeline events={timelineEvents} />
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
