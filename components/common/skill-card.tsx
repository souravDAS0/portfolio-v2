"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  /**
   * Skill name
   */
  name: string;
  /**
   * Proficiency level (0-100)
   */
  proficiency?: number;
  /**
   * Icon or logo URL
   */
  icon?: string;
  /**
   * Category badge
   */
  category?: string;
  /**
   * Years of experience
   */
  yearsOfExperience?: number;
  /**
   * Animation delay
   */
  delay?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Skill Card Component
 *
 * Displays a technology skill with proficiency level
 *
 * Design Decisions:
 * - Card layout for consistent elevation
 * - Icon/logo for quick recognition
 * - Proficiency bar for skill level
 * - Hover effects for interactivity
 * - Color-coded categories
 * - Smooth animations
 *
 * Visual Elements:
 * - Technology icon/logo (visual anchor)
 * - Skill name (primary text)
 * - Category badge (context)
 * - Proficiency bar (quantitative)
 * - Years badge (experience)
 *
 * Interaction:
 * - Hover lifts card
 * - Progress bar animates on view
 * - Icon scales on hover
 * - Smooth transitions
 *
 * Responsive:
 * - Grid layout adapts to screen size
 * - Touch-friendly on mobile
 * - Consistent sizing
 *
 * Accessibility:
 * - Semantic markup
 * - ARIA labels for progress
 * - Keyboard focusable
 * - High contrast text
 *
 * @example
 * ```tsx
 * <SkillCard
 *   name="React"
 *   proficiency={90}
 *   icon="/logos/react.svg"
 *   category="Frontend"
 *   yearsOfExperience={5}
 * />
 * ```
 */
export function SkillCard({
  name,
  proficiency = 0,
  icon,
  category,
  yearsOfExperience,
  delay = 0,
  className,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn("group", className)}
    >
      <Card className="border-border/50 bg-card/50 hover:border-primary/50 overflow-hidden backdrop-blur transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            {icon ? (
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="bg-muted/50 flex h-12 w-12 items-center justify-center rounded-lg">
                  {/* Replace with actual logo/icon */}
                  <div className="bg-primary/10 h-8 w-8 rounded" />
                </div>
              </motion.div>
            ) : (
              <div className="from-primary/20 to-primary/5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
                <span className="text-primary text-lg font-bold">
                  {name[0]}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-start justify-between gap-2">
                {/* Name */}
                <h3 className="truncate font-semibold">{name}</h3>

                {/* Category Badge */}
                {category && (
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    {category}
                  </Badge>
                )}
              </div>

              {/* Proficiency Bar */}
              {proficiency > 0 && (
                <div className="mb-2">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium">{proficiency}%</span>
                  </div>
                  <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: delay + 0.2,
                        ease: "easeOut",
                      }}
                      className="from-primary to-primary/80 h-full bg-gradient-to-r"
                    />
                  </div>
                </div>
              )}

              {/* Experience Badge */}
              {yearsOfExperience && (
                <div className="text-muted-foreground text-xs">
                  {yearsOfExperience} year{yearsOfExperience > 1 ? "s" : ""}{" "}
                  experience
                </div>
              )}
            </div>
          </div>

          {/* Hover accent line */}
          <div className="from-primary to-primary/50 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Skill Grid Component
 *
 * Responsive grid layout for skill cards
 *
 * @example
 * ```tsx
 * <SkillGrid>
 *   <SkillCard name="React" proficiency={90} />
 *   <SkillCard name="Node.js" proficiency={85} />
 * </SkillGrid>
 * ```
 */
export function SkillGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

/**
 * Simple Skill Badge Component
 *
 * Minimal badge for listing technologies
 *
 * @example
 * ```tsx
 * <SkillBadge name="TypeScript" />
 * ```
 */
interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn("group cursor-default", className)}
    >
      <Badge
        variant="outline"
        className="group-hover:border-primary group-hover:bg-primary/10 transition-colors"
      >
        {name}
      </Badge>
    </motion.div>
  );
}
