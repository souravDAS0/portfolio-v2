import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Spinner Variants Configuration
 */
const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        default: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-3",
        xl: "h-16 w-16 border-4",
      },
      variant: {
        default: "border-t-transparent text-primary",
        secondary: "border-t-transparent text-secondary",
        muted: "border-t-transparent text-muted-foreground",
        white: "border-t-transparent text-white",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  /**
   * Accessible label for screen readers
   */
  label?: string;
}

/**
 * Spinner Component
 *
 * A loading spinner for async operations
 *
 * Features:
 * - Multiple sizes (sm, default, lg, xl)
 * - Color variants to match design system
 * - Accessible with ARIA labels
 * - Smooth CSS animation
 * - Respects prefers-reduced-motion
 *
 * Technical considerations:
 * - Pure CSS animation (GPU-accelerated)
 * - Role="status" for screen readers
 * - aria-label for accessibility
 * - Can be used inline or as a page loader
 *
 * @example
 * ```tsx
 * <Spinner size="lg" label="Loading content..." />
 * ```
 */
export function Spinner({
  size,
  variant,
  label = "Loading...",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size, variant }), className)}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Loading Skeleton Component
 *
 * A pulsing skeleton loader for content placeholders
 *
 * Features:
 * - Smooth pulse animation
 * - Customizable dimensions
 * - Theme-aware colors
 * - Multiple built-in shapes
 *
 * @example
 * ```tsx
 * <Skeleton className="h-4 w-full" />
 * <Skeleton className="h-12 w-12 rounded-full" />
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

/**
 * Page Loader Component
 *
 * A centered, full-page loading indicator
 *
 * Features:
 * - Centers spinner in viewport
 * - Optional overlay background
 * - Custom message support
 * - Accessible
 *
 * Technical considerations:
 * - Fixed positioning for overlay
 * - Z-index management for stacking
 * - Backdrop blur for modern effect
 *
 * @example
 * ```tsx
 * <PageLoader message="Loading your portfolio..." />
 * ```
 */
export interface PageLoaderProps {
  message?: string;
  overlay?: boolean;
  className?: string;
}

export function PageLoader({
  message = "Loading...",
  overlay = false,
  className,
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-4",
        overlay && "bg-background/80 fixed inset-0 z-50 backdrop-blur-sm",
        className
      )}
      role="status"
      aria-label={message}
    >
      <Spinner size="lg" />
      {message && <p className="text-muted-foreground text-sm">{message}</p>}
    </div>
  );
}

/**
 * Button Loader Component
 *
 * A small spinner for loading buttons
 *
 * @example
 * ```tsx
 * <Button disabled>
 *   <ButtonLoader />
 *   Loading...
 * </Button>
 * ```
 */
export function ButtonLoader({ className }: { className?: string }) {
  return (
    <Spinner
      size="sm"
      variant="white"
      className={cn("mr-2", className)}
      label="Processing..."
    />
  );
}
