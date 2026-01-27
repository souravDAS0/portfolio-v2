"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  /**
   * The numerical value to display
   */
  value: string | number;
  /**
   * The label/description
   */
  label: string;
  /**
   * Optional icon
   */
  icon?: LucideIcon;
  /**
   * Optional subtitle
   */
  subtitle?: string;
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
 * Stat Card Component
 *
 * Displays a key metric or statistic with optional icon
 *
 * Design Decisions:
 * - Large, prominent number for immediate impact
 * - Icon adds visual interest and context
 * - Subtle hover effect for interactivity
 * - Card design for consistent elevation
 * - Gradient accent for visual hierarchy
 *
 * Visual Hierarchy:
 * 1. Number (largest, most prominent)
 * 2. Icon (visual anchor)
 * 3. Label (context)
 * 4. Subtitle (additional info)
 *
 * Animation:
 * - Fade in with scale effect
 * - Hover lifts the card slightly
 * - Number counts up on mount (optional)
 *
 * Responsive:
 * - Stacks in grid on mobile
 * - Larger on desktop
 *
 * Accessibility:
 * - Semantic markup
 * - Proper heading hierarchy
 * - High contrast text
 *
 * @example
 * ```tsx
 * <StatCard
 *   value="5+"
 *   label="Years Experience"
 *   icon={Calendar}
 *   subtitle="Professional Development"
 * />
 * ```
 */
export function StatCard({
  value,
  label,
  icon: Icon,
  subtitle,
  delay = 0,
  className,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn("group", className)}
    >
      <Card className="border-border/50 bg-card/50 hover:border-primary/50 overflow-hidden backdrop-blur transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            {Icon && (
              <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors">
                <Icon className="text-primary h-6 w-6" />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              {/* Value */}
              <div className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
                {value}
              </div>

              {/* Label */}
              <div className="text-muted-foreground text-sm font-medium">
                {label}
              </div>

              {/* Subtitle */}
              {subtitle && (
                <div className="text-muted-foreground/80 mt-1 text-xs">
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          {/* Optional gradient accent */}
          <div className="from-primary/50 to-primary absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
        </CardContent>
      </Card>
    </motion.div>
  );
}

/**
 * Animated Counter
 *
 * A number that counts up from 0 to the target value
 *
 * @example
 * ```tsx
 * <AnimatedCounter value={100} suffix="+" duration={2} />
 * ```
 */
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const endTime = startTime + duration * 1000;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            // Easing function (ease out)
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (now < endTime) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/**
 * Stats Grid
 *
 * A responsive grid layout for stat cards
 *
 * @example
 * ```tsx
 * <StatsGrid>
 *   <StatCard value="5+" label="Years" />
 *   <StatCard value="50+" label="Projects" />
 * </StatsGrid>
 * ```
 */
export function StatsGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  );
}
