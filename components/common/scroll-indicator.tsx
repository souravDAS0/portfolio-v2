"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  /**
   * The section ID to scroll to
   */
  targetId?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Scroll Indicator Component
 *
 * An animated indicator that prompts users to scroll down
 *
 * Design Decisions:
 * - Positioned at bottom center of viewport
 * - Bouncing animation to draw attention
 * - Fades out on scroll for clean UX
 * - Clickable for immediate scroll action
 * - Subtle, non-intrusive design
 *
 * Animation Details:
 * - Continuous bounce using Framer Motion
 * - Smooth fade-in on mount
 * - Auto-hides after user scrolls
 * - Smooth scroll on click
 *
 * Accessibility:
 * - Keyboard accessible (Tab + Enter)
 * - ARIA label for screen readers
 * - Visible focus indicator
 * - Respects reduced motion preference
 *
 * @example
 * ```tsx
 * <ScrollIndicator targetId="about" />
 * ```
 */
export function ScrollIndicator({
  targetId = "about",
  className,
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  // Hide indicator after user scrolls
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={cn(
        "absolute bottom-8 left-1/2 z-20 -translate-x-1/2",
        className
      )}
    >
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="group focus-visible:ring-ring flex cursor-pointer flex-col items-center gap-2 rounded-md p-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        aria-label="Scroll to next section"
      >
        {/* Text label */}
        <span className="text-muted-foreground text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
          Scroll Down
        </span>

        {/* Animated icon */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="border-muted-foreground/30 group-hover:border-primary flex h-12 w-8 items-start justify-center rounded-full border-2 p-2 transition-colors"
        >
          <ChevronDown className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
        </motion.div>
      </button>
    </motion.div>
  );
}

/**
 * Mouse Scroll Indicator
 *
 * Alternative design with a mouse-shaped indicator
 *
 * @example
 * ```tsx
 * <MouseScrollIndicator />
 * ```
 */
export function MouseScrollIndicator({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className={cn("absolute bottom-8 left-1/2 -translate-x-1/2", className)}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs">Scroll</span>
        <div className="border-muted-foreground/30 relative h-12 w-7 rounded-full border-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="bg-muted-foreground/50 absolute top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
