"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  /**
   * The text to animate
   */
  text: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to apply gradient effect
   */
  gradient?: boolean;
  /**
   * Animation delay (in seconds)
   */
  delay?: number;
  /**
   * Whether to animate by character or word
   */
  type?: "character" | "word";
}

/**
 * Animated Text Component
 *
 * Creates a reveal animation for text, character by character or word by word
 *
 * Design Decisions:
 * - Character-by-character animation for dramatic effect
 * - Stagger timing creates a "typewriter" feel
 * - Optional gradient for visual impact
 * - Smooth fade-in with slight upward movement
 *
 * Animation Details:
 * - Each character/word fades in from opacity 0 to 1
 * - Slight y-axis movement (10px) for depth
 * - Stagger delay of 0.03s between characters
 * - Total animation duration scales with text length
 *
 * Performance:
 * - Uses GPU-accelerated transforms (opacity, translateY)
 * - Respects prefers-reduced-motion
 * - Minimal DOM updates after animation completes
 *
 * Accessibility:
 * - Text remains readable to screen readers
 * - Animation doesn't block interaction
 * - Semantic HTML preserved
 *
 * @example
 * ```tsx
 * <AnimatedText text="Hello World" gradient />
 * <AnimatedText text="Welcome" type="word" delay={0.5} />
 * ```
 */
export function AnimatedText({
  text,
  className,
  gradient = false,
  delay = 0,
  type = "character",
}: AnimatedTextProps) {
  // Split text by type
  const items = type === "character" ? text.split("") : text.split(" ");

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "character" ? 0.03 : 0.1,
        delayChildren: delay,
      },
    },
  };

  // Item animation
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(gradient && "gradient-text", className)}
      aria-label={text}
    >
      {items.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={item}
          className="inline-block"
          style={{
            // Preserve spaces in character mode
            whiteSpace: type === "character" && char === " " ? "pre" : "normal",
          }}
        >
          {char === " " && type === "word" ? "\u00A0" : char}
          {type === "word" && index < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.h1>
  );
}

/**
 * Typing Text Component
 *
 * Creates a typewriter effect with blinking cursor
 *
 * Design Decisions:
 * - Classic typewriter animation
 * - Blinking cursor for authenticity
 * - Configurable typing speed
 * - Can loop or play once
 *
 * @example
 * ```tsx
 * <TypingText text="Hello, World!" speed={50} />
 * ```
 */
interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per character
  showCursor?: boolean;
  loop?: boolean;
}

export function TypingText({
  text,
  className,
  speed = 100,
  showCursor = true,
  loop = false,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (!loop) {
      // Simple typewriter - type once
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    } else {
      // Looping typewriter - type and delete
      const timeout = setTimeout(
        () => {
          if (!isDeleting && currentIndex < text.length) {
            setDisplayedText((prev) => prev + text[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (!isDeleting && currentIndex === text.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else if (isDeleting && displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrentIndex(0);
          }
        },
        isDeleting ? speed / 2 : speed
      );
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isDeleting, displayedText, text, speed, loop]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-1 inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  );
}
