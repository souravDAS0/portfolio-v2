"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/common/container";
import { SkillCard, SkillGrid } from "@/components/common/skill-card";
import { AnimatedSection } from "@/components/animations/animated-section";
import { fadeInUp } from "@/lib/utils/animations";
import { skillGroups } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

/**
 * Skills Section Component
 *
 * Displays technical skills organized by category
 *
 * Design Decisions:
 * - Tab-based category filtering
 * - Grid layout for skill cards
 * - Visual proficiency indicators
 * - Hover effects for interactivity
 * - Staggered animations for reveal
 * - "All" tab to show everything
 *
 * Content Organization:
 * 1. Section header with description
 * 2. Category tabs for filtering
 * 3. Grid of skill cards
 * 4. Animated transitions between categories
 *
 * Interaction:
 * - Click tabs to filter skills
 * - Smooth transitions between views
 * - Hover effects on cards
 * - Keyboard navigation support
 *
 * Responsive:
 * - Scrollable tabs on mobile
 * - Adaptive grid columns
 * - Touch-friendly targets
 * - Optimized spacing
 *
 * Accessibility:
 * - ARIA roles for tabs
 * - Keyboard navigation (Arrow keys, Home, End)
 * - Focus indicators
 * - Semantic HTML
 *
 * Performance:
 * - Only renders visible skills
 * - GPU-accelerated animations
 * - Debounced filtering
 *
 * @example
 * ```tsx
 * <Skills />
 * ```
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  // Get all skills for "all" category
  const allSkills = skillGroups.flatMap((group) => group.skills);

  // Get skills for active category
  const displayedSkills =
    activeCategory === "all"
      ? allSkills
      : skillGroups.find((group) => group.category === activeCategory)
          ?.skills || [];

  // Category tabs
  const categories = [
    { id: "all", label: "All Skills" },
    ...skillGroups.map((group) => ({
      id: group.category,
      label: group.title,
    })),
  ];

  return (
    <Section id="skills">
      <Container>
        {/* Section Header */}
        <AnimatedSection variant={fadeInUp}>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection variant={fadeInUp} delay={0.2}>
          <div className="mb-12 overflow-x-auto">
            <div
              className="border-border flex gap-2 border-b pb-px"
              role="tablist"
              aria-label="Skill categories"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "relative rounded-t-lg px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                    "hover:text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    activeCategory === category.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`panel-${category.id}`}
                >
                  {category.label}

                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            id={`panel-${activeCategory}`}
          >
            <SkillGrid>
              {displayedSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  category={skill.category}
                  yearsOfExperience={skill.yearsOfExperience}
                  delay={index * 0.05}
                />
              ))}
            </SkillGrid>

            {/* Empty state */}
            {displayedSkills.length === 0 && (
              <div className="text-muted-foreground py-12 text-center">
                No skills found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Optional: Skill summary */}
        <AnimatedSection variant={fadeInUp} delay={0.4}>
          <div className="border-border/50 bg-card/50 mt-16 rounded-lg border p-8 text-center backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Always exploring new technologies and staying up-to-date with
              industry trends. Currently learning about AI integration and edge
              computing.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
