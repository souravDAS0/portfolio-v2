"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Theme Provider Component
 *
 * Wraps the application with next-themes provider for dark/light mode support
 * - Automatically detects system preference
 * - Persists user's theme choice in localStorage
 * - Supports multiple themes (light, dark, system)
 * - Prevents flash of unstyled content (FOUC)
 *
 * @example
 * ```tsx
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   {children}
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
