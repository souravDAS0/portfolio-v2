"use client";

import { Container, Section } from "@/components/common/container";
import { IconCloud } from "@/components/common/icon-cloud";
import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/lib/utils/animations";
import { skillGroups } from "@/lib/data/skills";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        {/* Section Header */}
        <AnimatedSection variant={fadeInUp}>
          <div className="mb-8 text-center md:mb-12">
            <h2 className="mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Globe */}
        <AnimatedSection variant={fadeInUp} delay={0.2}>
          <div className="flex justify-center py-4 md:py-8">
            <IconCloud
              className="max-w-full"
              radius={180}
              iconSize={42}
            />
          </div>
        </AnimatedSection>

        {/* Category Badges */}
        <AnimatedSection variant={fadeInUp} delay={0.4}>
          <div className="mt-8 space-y-4 md:mt-12">
            {skillGroups.map((group) => (
              <div key={group.category} className="text-center">
                <span className="text-muted-foreground mr-3 text-sm font-medium">
                  {group.title}:
                </span>
                <span className="inline-flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
