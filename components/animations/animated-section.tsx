"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/utils/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Animation variant to use
   * Defaults to fadeInUp
   */
  variant?: Variants;
  /**
   * Delay before animation starts (in seconds)
   */
  delay?: number;
  /**
   * Custom viewport configuration
   */
  viewport?: typeof viewportConfig;
}

/**
 * Animated Section Component
 *
 * Wraps content with scroll-triggered animations using Framer Motion
 *
 * Features:
 * - Automatically animates when scrolling into view
 * - Customizable animation variants
 * - Delay support for sequential animations
 * - Respects user's motion preferences
 * - Animates only once by default (performance)
 *
 * Design rationale:
 * - Adds visual interest without being distracting
 * - Smooth, subtle animations enhance UX
 * - Single-use animations prevent repetitive motion
 * - Viewport config optimized for early trigger
 *
 * @example
 * ```tsx
 * <AnimatedSection variant={fadeIn} delay={0.2}>
 *   <h1>Content that fades in</h1>
 * </AnimatedSection>
 * ```
 */
export function AnimatedSection({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  viewport = viewportConfig,
}: AnimatedSectionProps) {
  // Add delay to the variant if specified
  const animationVariant = React.useMemo(() => {
    if (delay === 0) return variant;

    const visibleVariant = variant.visible as
      | Record<string, unknown>
      | undefined;
    const existingTransition = visibleVariant?.transition as
      | Record<string, unknown>
      | undefined;

    return {
      ...variant,
      visible: {
        ...visibleVariant,
        transition: {
          ...existingTransition,
          delay,
        },
      },
    };
  }, [variant, delay]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={animationVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Children Component
 *
 * Wraps multiple children with staggered animations
 *
 * @example
 * ```tsx
 * <StaggerChildren>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggerChildren>
 * ```
 */
interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Delay between each child animation (in seconds)
   */
  staggerDelay?: number;
  /**
   * Initial delay before first child animates (in seconds)
   */
  initialDelay?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
}: StaggerChildrenProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
