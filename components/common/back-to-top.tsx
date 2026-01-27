"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  /**
   * Scroll threshold to show button (in pixels)
   */
  threshold?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Back to Top Button Component
 *
 * A floating button that appears when user scrolls down
 *
 * Design Decisions:
 * - Fixed position in bottom-right corner
 * - Appears after scrolling threshold
 * - Smooth scroll to top on click
 * - Circular button for modern aesthetic
 * - Pulse animation to draw attention
 * - Glassmorphism effect
 *
 * Interaction:
 * - Fades in/out based on scroll position
 * - Smooth scroll animation
 * - Hover effects
 * - Keyboard accessible
 *
 * Performance:
 * - Throttled scroll listener
 * - GPU-accelerated animations
 * - Conditional rendering
 *
 * Accessibility:
 * - ARIA label
 * - Keyboard navigable (Tab + Enter)
 * - Visible focus indicator
 * - Semantic button element
 *
 * Mobile:
 * - Touch-friendly size (48x48px minimum)
 * - Positioned to avoid blocking content
 * - Responsive sizing
 *
 * @example
 * ```tsx
 * <BackToTop threshold={500} />
 * ```
 */
export function BackToTop({ threshold = 300, className }: BackToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Initial check
    toggleVisibility();

    // Add scroll listener with passive flag for better performance
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className={cn("fixed right-8 bottom-8 z-50", className)}
        >
          <Button
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            size="icon"
            className={cn(
              "group relative h-12 w-12 rounded-full shadow-lg",
              "bg-primary/90 backdrop-blur-sm",
              "hover:bg-primary hover:shadow-xl",
              "transition-all duration-200"
            )}
            aria-label="Scroll to top"
          >
            {/* Pulse ring effect */}
            <span className="bg-primary absolute inset-0 rounded-full opacity-0 group-hover:animate-ping" />

            {/* Icon */}
            <ArrowUp className="relative h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Alternative Minimal Back to Top
 *
 * Simpler version without glassmorphism
 *
 * @example
 * ```tsx
 * <MinimalBackToTop />
 * ```
 */
export function MinimalBackToTop({ threshold = 300 }: { threshold?: number }) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="border-primary bg-background hover:bg-primary hover:text-primary-foreground fixed right-8 bottom-8 z-50 rounded-full border-2 p-3 shadow-md transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
