import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Vitest Configuration
 *
 * Testing setup for React components and utilities
 *
 * Features:
 * - React Testing Library integration
 * - JSDOM environment for browser APIs
 * - Path aliases matching tsconfig
 * - Coverage reporting
 * - Global test utilities
 */
export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom environment for DOM testing
    environment: "jsdom",

    // Global test setup
    globals: true,

    // Setup files to run before tests
    setupFiles: ["./vitest.setup.ts"],

    // Coverage configuration
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        ".next/",
        "out/",
        "dist/",
        "**/*.config.*",
        "**/*.d.ts",
        "**/types/**",
      ],
    },

    // Include test files
    include: ["**/*.{test,spec}.{ts,tsx}"],

    // Exclude directories
    exclude: ["node_modules", ".next", "out", "dist", ".git", ".husky"],
  },

  // Path aliases (must match tsconfig.json)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
