"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProficiencyIndicatorProps {
  /**
   * Proficiency level (0-100)
   */
  value: number;
  /**
   * Label text
   */
  label?: string;
  /**
   * Visualization type
   */
  type?: "bar" | "circle" | "dots" | "stars";
  /**
   * Size variant
   */
  size?: "sm" | "md" | "lg";
  /**
   * Show percentage text
   */
  showValue?: boolean;
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
 * Proficiency Indicator Component
 *
 * Visual representation of skill proficiency level
 *
 * Design Decisions:
 * - Multiple visualization types for variety
 * - Animated progress for engagement
 * - Clear percentage values
 * - Color gradient for visual appeal
 * - Responsive sizing
 *
 * Visualization Types:
 * - Bar: Traditional progress bar
 * - Circle: Circular progress (modern)
 * - Dots: Discrete level indicators
 * - Stars: Rating-style display
 *
 * Animation:
 * - Smooth fill animation
 * - Stagger for multiple indicators
 * - Easing for natural movement
 *
 * Accessibility:
 * - ARIA role="progressbar"
 * - aria-valuenow for current value
 * - aria-label for context
 * - Visible text alternative
 *
 * @example
 * ```tsx
 * <ProficiencyIndicator
 *   value={85}
 *   label="React"
 *   type="bar"
 *   showValue
 * />
 * ```
 */
export function ProficiencyIndicator({
  value,
  label,
  type = "bar",
  size = "md",
  showValue = true,
  delay = 0,
  className,
}: ProficiencyIndicatorProps) {
  // Clamp value between 0-100
  const clampedValue = Math.max(0, Math.min(100, value));

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  switch (type) {
    case "circle":
      return (
        <CircularProgress
          value={clampedValue}
          label={label}
          size={size}
          showValue={showValue}
          delay={delay}
          className={className}
        />
      );
    case "dots":
      return (
        <DotsProgress
          value={clampedValue}
          label={label}
          delay={delay}
          className={className}
        />
      );
    case "stars":
      return (
        <StarsProgress
          value={clampedValue}
          label={label}
          delay={delay}
          className={className}
        />
      );
    default:
      return (
        <div className={cn("w-full", className)}>
          {label && (
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">{label}</span>
              {showValue && (
                <span className="text-muted-foreground text-sm">
                  {clampedValue}%
                </span>
              )}
            </div>
          )}
          <div
            className={cn(
              "bg-muted w-full overflow-hidden rounded-full",
              sizeClasses[size]
            )}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label || `${clampedValue}% proficiency`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${clampedValue}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay, ease: "easeOut" }}
              className={cn(
                "from-primary to-primary/80 h-full bg-gradient-to-r",
                sizeClasses[size]
              )}
            />
          </div>
        </div>
      );
  }
}

/**
 * Circular Progress Component
 */
function CircularProgress({
  value,
  label,
  size = "md",
  showValue,
  delay,
  className,
}: Omit<ProficiencyIndicatorProps, "type">) {
  const sizeMap = {
    sm: { width: 60, strokeWidth: 4 },
    md: { width: 80, strokeWidth: 6 },
    lg: { width: 100, strokeWidth: 8 },
  };

  const { width, strokeWidth } = sizeMap[size];
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width, height: width }}>
        <svg width={width} height={width} className="-rotate-90 transform">
          {/* Background circle */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted"
          />

          {/* Progress circle */}
          <motion.circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="text-primary"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>

        {/* Center text */}
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold">{value}%</span>
          </div>
        )}
      </div>

      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}

/**
 * Dots Progress Component
 */
function DotsProgress({
  value,
  label,
  delay = 0,
  className,
}: Omit<ProficiencyIndicatorProps, "type" | "size" | "showValue">) {
  const totalDots = 5;
  const filledDots = Math.round((value / 100) * totalDots);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {label && <span className="text-sm font-medium">{label}</span>}
      <div className="flex gap-1.5">
        {Array.from({ length: totalDots }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: delay + index * 0.1,
              ease: "easeOut" as const,
            }}
            className={cn(
              "h-2 w-2 rounded-full",
              index < filledDots ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Stars Progress Component
 */
function StarsProgress({
  value,
  label,
  delay = 0,
  className,
}: Omit<ProficiencyIndicatorProps, "type" | "size" | "showValue">) {
  const totalStars = 5;
  const filledStars = Math.round((value / 100) * totalStars);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {label && <span className="text-sm font-medium">{label}</span>}
      <div className="flex gap-0.5">
        {Array.from({ length: totalStars }).map((_, index) => (
          <motion.svg
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: delay + index * 0.1,
              ease: "easeOut" as const,
            }}
            className={cn(
              "h-5 w-5",
              index < filledStars
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            )}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}
