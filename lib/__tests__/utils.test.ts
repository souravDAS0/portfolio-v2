import { describe, it, expect } from "vitest";
import { cn, formatDate, truncate, getInitials } from "../utils";

/**
 * Utility Functions Tests
 *
 * Tests for common utility functions
 */

describe("Utils", () => {
  describe("cn (className merger)", () => {
    it("should merge class names correctly", () => {
      const result = cn("text-red-500", "bg-blue-500");
      expect(result).toContain("text-red-500");
      expect(result).toContain("bg-blue-500");
    });

    it("should handle conditional classes", () => {
      const result = cn("base-class", false && "hidden-class", "visible-class");
      expect(result).toContain("base-class");
      expect(result).toContain("visible-class");
      expect(result).not.toContain("hidden-class");
    });

    it("should handle Tailwind conflicts", () => {
      const result = cn("p-4", "p-6");
      expect(result).toBe("p-6"); // Later class should win
    });
  });

  describe("formatDate", () => {
    it("should format date string correctly", () => {
      const date = "2024-01-15";
      const result = formatDate(date);
      expect(result).toBe("January 15, 2024");
    });

    it("should format Date object correctly", () => {
      const date = new Date("2024-01-15");
      const result = formatDate(date);
      expect(result).toBe("January 15, 2024");
    });
  });

  describe("truncate", () => {
    it("should truncate long text", () => {
      const text = "This is a very long text that needs to be truncated";
      const result = truncate(text, 20);
      expect(result).toBe("This is a very long...");
      expect(result.length).toBeLessThanOrEqual(23); // 20 + "..."
    });

    it("should not truncate short text", () => {
      const text = "Short text";
      const result = truncate(text, 20);
      expect(result).toBe(text);
    });

    it("should handle exact length", () => {
      const text = "Exact length text";
      const result = truncate(text, text.length);
      expect(result).toBe(text);
    });
  });

  describe("getInitials", () => {
    it("should get initials from full name", () => {
      const result = getInitials("John Doe");
      expect(result).toBe("JD");
    });

    it("should handle single name", () => {
      const result = getInitials("John");
      expect(result).toBe("J");
    });

    it("should handle three names", () => {
      const result = getInitials("John Michael Doe");
      expect(result).toBe("JM"); // Should only take first 2
    });

    it("should uppercase initials", () => {
      const result = getInitials("john doe");
      expect(result).toBe("JD");
    });
  });
});
