import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width variant
   * - sm: 640px (mobile-first content)
   * - md: 768px (tablets)
   * - lg: 1024px (default, desktops)
   * - xl: 1280px (large screens)
   * - 2xl: 1536px (extra large screens)
   * - full: 100% (no max width)
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * Whether to add padding
   */
  noPadding?: boolean;
}

/**
 * Container Component
 *
 * A responsive container component for consistent page layouts
 *
 * Features:
 * - Multiple max-width variants for different content types
 * - Responsive horizontal padding
 * - Centered content by default
 * - Mobile-first responsive design
 *
 * Design rationale:
 * - Consistent max-width keeps content readable
 * - Auto horizontal margins center the content
 * - Responsive padding adapts to screen size
 * - Default size (lg) works for most layouts
 *
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * ```
 */
export function Container({
  size = "lg",
  noPadding = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-screen-xl": size === "xl",
          "max-w-screen-2xl": size === "2xl",
          "max-w-full": size === "full",
        },
        !noPadding && "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Section Component
 *
 * A semantic section wrapper with consistent vertical spacing
 *
 * Features:
 * - Semantic HTML for better accessibility
 * - Consistent vertical padding
 * - Optional background variants
 *
 * @example
 * ```tsx
 * <Section variant="secondary">
 *   <Container>
 *     <h2>Section Title</h2>
 *   </Container>
 * </Section>
 * ```
 */
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "secondary" | "muted";
}

export function Section({
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-24",
        {
          "bg-background": variant === "default",
          "bg-secondary/50": variant === "secondary",
          "bg-muted/50": variant === "muted",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
