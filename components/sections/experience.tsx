"use client";

import * as React from "react";
import { Container, Section } from "@/components/common/container";
import { AnimatedSection } from "@/components/animations/animated-section";
import { ExperienceTimeline } from "@/components/common/experience-timeline";
import { EducationCard } from "@/components/common/education-card";
import { CertificationBadge } from "@/components/common/certification-badge";
import { ResumeDownload } from "@/components/common/resume-download";
import { AnimatedCounter } from "@/components/common/stat-card";
import { fadeInUp } from "@/lib/utils/animations";
import {
  experiences,
  education,
  certifications,
  achievementStats,
} from "@/lib/data/experience";

/**
 * Experience Section Component
 *
 * Comprehensive professional background section including:
 * - Achievement stats with animated counters
 * - Work experience timeline with expand/collapse
 * - Education cards
 * - Certifications grid
 * - Resume download CTA
 *
 * Layout:
 * 1. Section header
 * 2. Achievement stats bar
 * 3. Work experience timeline
 * 4. Education
 * 5. Certifications grid
 * 6. Resume download
 */
export function ExperienceSection() {
  return (
    <Section id="experience" variant="secondary">
      <Container>
        {/* Section Header */}
        <AnimatedSection variant={fadeInUp}>
          <div className="mb-16 text-center">
            <h2 className="mb-4">Experience & Background</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              My professional journey, education, and certifications
            </p>
          </div>
        </AnimatedSection>

        {/* Achievement Stats */}
        <AnimatedSection variant={fadeInUp} delay={0.1}>
          <div className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {achievementStats.map((stat) => (
              <div
                key={stat.id}
                className="border-border/50 bg-card/50 rounded-lg border p-4 text-center backdrop-blur sm:p-6"
              >
                <div className="text-primary mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    duration={2}
                  />
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
                {stat.description && (
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection variant={fadeInUp} delay={0.2}>
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              Work Experience
            </h3>
            <div className="mx-auto max-w-3xl">
              <ExperienceTimeline experiences={experiences} />
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection variant={fadeInUp} delay={0.3}>
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              Education
            </h3>
            <div className="mx-auto max-w-3xl space-y-4">
              {education.map((entry, index) => (
                <EducationCard key={entry.id} entry={entry} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection variant={fadeInUp} delay={0.4}>
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <CertificationBadge
                  key={cert.id}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Resume Download */}
        <AnimatedSection variant={fadeInUp} delay={0.5}>
          <div className="mx-auto max-w-2xl">
            <ResumeDownload />
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
