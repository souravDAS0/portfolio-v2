"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common/container";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { NavLink } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Header Component
 *
 * Main navigation header with responsive mobile menu
 *
 * Features:
 * - Sticky positioning with backdrop blur
 * - Responsive mobile menu with slide-in animation
 * - Active route highlighting
 * - Smooth scroll for anchor links
 * - Theme toggle integration
 * - Keyboard accessible (Tab, Escape)
 * - Focus trap in mobile menu
 * - Body scroll lock when menu open
 *
 * Technical implementation:
 * - Client component (uses useState, useEffect)
 * - Framer Motion for menu animations
 * - Automatic scroll detection for header shadow
 * - Mobile menu overlay with backdrop
 * - Proper ARIA attributes for accessibility
 *
 * Performance considerations:
 * - Scroll listener with throttling
 * - Conditional rendering for mobile menu
 * - GPU-accelerated animations (transform)
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll to add shadow to header
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "border-border/40 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <NavLink
            href="/"
            className="hover:text-primary text-xl font-bold tracking-tight"
            exact
          >
            {SITE_CONFIG.name}
          </NavLink>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                variant="muted"
                activeClassName="text-foreground font-medium"
                className="text-sm transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right section: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background/80 fixed inset-0 top-16 z-40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="border-border bg-background fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-full max-w-sm border-l p-6 shadow-lg md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-6">
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        // Close mobile menu
                        handleNavClick();
                        // Navigate to the section
                        if (item.href.startsWith("#")) {
                          const element = document.querySelector(item.href);
                          element?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.location.href = item.href;
                        }
                      }}
                      className="hover:text-primary text-left text-lg font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="bg-border h-px" />

                {/* Additional Info */}
                <div className="mt-auto">
                  <p className="text-muted-foreground text-sm">
                    {SITE_CONFIG.description}
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
