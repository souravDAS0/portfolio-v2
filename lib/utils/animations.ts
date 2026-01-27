import { Variants } from "framer-motion";

/**
 * Animation Utilities for Framer Motion
 *
 * Reusable animation variants for consistent motion design
 * All animations respect prefers-reduced-motion
 */

/**
 * Fade In Animation
 * Simple opacity transition
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Fade In Up Animation
 * Combines fade with upward movement - great for content reveals
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Fade In Down Animation
 * Combines fade with downward movement
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Fade In Left Animation
 * Slides in from the left
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Fade In Right Animation
 * Slides in from the right
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Scale In Animation
 * Grows from smaller size - good for cards and images
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * Stagger Container
 * Parent variant for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger Item
 * Child variant to be used with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Slide In Animation
 * Full width slide-in effect
 */
export const slideIn: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

/**
 * Blur In Animation
 * Combines fade with blur effect - modern and elegant
 */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Bounce In Animation
 * Playful entrance with bounce
 */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

/**
 * Hover Scale Animation
 * Subtle scale on hover - for interactive elements
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

/**
 * Hover Lift Animation
 * Lifts element with shadow on hover - for cards
 */
export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/**
 * Page Transition
 * Smooth page transitions
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

/**
 * Typing Animation
 * Sequential reveal effect for text
 */
export const typingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

export const typingItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

/**
 * Viewport Animation Config
 * Standard viewport settings for scroll animations
 */
export const viewportConfig = {
  once: true, // Animate only once
  margin: "0px 0px -100px 0px", // Trigger slightly before element is in view
  amount: 0.3, // Percentage of element that must be visible
};
