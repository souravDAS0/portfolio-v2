"use client";

import * as React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Link Variants Configuration
 */
const linkVariants = cva(
  "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-primary",
        primary: "text-primary hover:text-primary/80",
        secondary:
          "text-secondary-foreground hover:text-secondary-foreground/80",
        muted: "text-muted-foreground hover:text-foreground",
        underline:
          "text-foreground underline underline-offset-4 hover:text-primary",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends Omit<NextLinkProps, "href">,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof linkVariants> {
  /**
   * The URL to link to
   */
  href: string;
  /**
   * Whether the link is external (opens in new tab)
   */
  external?: boolean;
  /**
   * Show external link icon
   */
  showExternalIcon?: boolean;
  /**
   * Disable the link (renders as span)
   */
  disabled?: boolean;
}

/**
 * Link Component
 *
 * An enhanced Next.js Link component with additional features
 *
 * Features:
 * - Automatic external link handling (target="_blank", rel="noopener noreferrer")
 * - Multiple style variants
 * - Disabled state support
 * - Optional external link icon
 * - Smooth scrolling for anchor links
 * - Full TypeScript type safety
 * - Accessibility compliant
 *
 * Technical considerations:
 * - Uses Next.js Link for internal navigation (client-side routing)
 * - Uses native anchor for external links
 * - Handles hash links with smooth scrolling
 * - Proper ARIA attributes for disabled state
 *
 * @example
 * ```tsx
 * <Link href="/about">Internal Link</Link>
 * <Link href="https://github.com" external>External Link</Link>
 * <Link href="#contact" variant="underline">Anchor Link</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      external = false,
      showExternalIcon = false,
      disabled = false,
      variant,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    // Auto-detect external links
    const isExternal =
      external || href.startsWith("http") || href.startsWith("mailto:");

    const linkClassName = cn(
      linkVariants({ variant }),
      disabled && "pointer-events-none opacity-50",
      className
    );

    const content = (
      <>
        {children}
        {showExternalIcon && isExternal && (
          <svg
            className="ml-1 inline-block h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </>
    );

    // Render as span if disabled
    if (disabled) {
      return (
        <span
          className={linkClassName}
          aria-disabled="true"
          role="link"
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {content}
        </span>
      );
    }

    // Render external link as native anchor
    if (isExternal) {
      const externalProps = onClick ? { onClick } : {};
      return (
        <a
          ref={ref}
          href={href}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...externalProps}
          {...props}
        >
          {content}
        </a>
      );
    }

    // Render internal link with Next.js Link
    const internalProps = onClick ? { onClick } : {};
    return (
      <NextLink
        ref={ref}
        href={href}
        className={linkClassName}
        {...internalProps}
        {...props}
      >
        {content}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

/**
 * NavLink Component
 *
 * A specialized link for navigation menus with active state
 *
 * Features:
 * - Automatic active state detection
 * - Custom active styles
 * - Inherits all Link features
 *
 * @example
 * ```tsx
 * <NavLink href="/about" activeClassName="text-primary font-semibold">
 *   About
 * </NavLink>
 * ```
 */
export interface NavLinkProps extends LinkProps {
  activeClassName?: string;
  exact?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, activeClassName, exact = false, className, ...props }, ref) => {
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
      // Check if link is active based on current pathname
      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        const active = exact
          ? pathname === href
          : pathname.startsWith(href.toString());
        setIsActive(active);
      }
    }, [href, exact]);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        aria-current={isActive ? "page" : undefined}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
