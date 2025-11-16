# Scope: Foundation - Project Setup & Core Infrastructure

**Phase**: 1
**Duration**: Week 1-2
**Status**: Not Started

---

## Overview

Establish the foundational architecture, tooling, and design system for the portfolio website. This phase sets up the development environment and creates reusable components that will be used throughout the project.

---

## Objectives

- Initialize modern Next.js project with best practices
- Configure essential development tools and libraries
- Establish design system and theming
- Create base component library
- Set up project structure and conventions

---

## Tasks

### 1. Project Initialization

- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Configure `tsconfig.json` for strict type checking
- [ ] Set up folder structure:
  ```
  /app                 # Next.js app router
  /components          # React components
    /ui                # Shadcn UI components
    /sections          # Page sections
    /common            # Shared components
  /lib                 # Utility functions
  /styles             # Global styles
  /public             # Static assets
  /content            # MDX/content files
  /config             # Configuration files
  ```
- [ ] Initialize Git repository
- [ ] Create `.gitignore` and `.env.example`

### 2. Styling & UI Framework Setup

- [ ] Install and configure Tailwind CSS
- [ ] Set up Tailwind config with custom theme
- [ ] Install Shadcn UI CLI
- [ ] Initialize Shadcn UI components
- [ ] Install and configure Aceternity UI
- [ ] Set up CSS variables for theming
- [ ] Create global styles (`globals.css`)

### 3. Design System Implementation

- [ ] Define color palette (primary, secondary, accent, neutrals)
- [ ] Set up typography scale and font imports
- [ ] Configure spacing and sizing utilities
- [ ] Define border radius and shadow scales
- [ ] Create breakpoint system
- [ ] Document design tokens

### 4. Theme Management

- [ ] Install `next-themes`
- [ ] Create ThemeProvider component
- [ ] Implement dark/light mode toggle
- [ ] Configure theme-aware color schemes
- [ ] Add system preference detection
- [ ] Test theme switching and persistence

### 5. Core Component Library

- [ ] Button component (with variants)
- [ ] Card component
- [ ] Container/Section wrapper
- [ ] Typography components (H1-H6, Paragraph, etc.)
- [ ] Icon wrapper component
- [ ] Link component (with Next.js Link)
- [ ] Loading spinner/skeleton
- [ ] Badge/Tag component
- [ ] Divider component

### 6. Animation Setup

- [ ] Install Framer Motion
- [ ] Create animation utility functions
- [ ] Set up common animation variants
- [ ] Create AnimatedSection wrapper
- [ ] Implement scroll-based animations helper
- [ ] Configure reduced motion support

### 7. Development Tools Configuration

- [ ] Configure ESLint with recommended rules
- [ ] Set up Prettier with formatting rules
- [ ] Install and configure Husky for git hooks
- [ ] Set up lint-staged for pre-commit checks
- [ ] Configure VS Code settings (optional)
- [ ] Add useful VS Code extensions to recommendations

### 8. Utilities & Helpers

- [ ] Install and configure `clsx` and `tailwind-merge`
- [ ] Create `cn()` utility for class names
- [ ] Set up constants file
- [ ] Create type definitions file
- [ ] Implement responsive utilities
- [ ] Add date formatting utilities

### 9. Navigation Setup

- [ ] Create Header/Navigation component
- [ ] Implement responsive mobile menu
- [ ] Add smooth scroll navigation
- [ ] Create Footer component
- [ ] Implement sticky/fixed header behavior
- [ ] Add navigation animations

### 10. Testing Infrastructure (Basic)

- [ ] Install Vitest
- [ ] Configure Vitest for Next.js
- [ ] Create test utilities
- [ ] Write sample component test
- [ ] Set up test coverage reporting

---

## Technical Requirements

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "next-themes": "^0.2.1",
    "lucide-react": "^0.320.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "husky": "^9.0.0",
    "lint-staged": "^15.2.0",
    "vitest": "^1.2.0",
    "@vitejs/plugin-react": "^4.2.0"
  }
}
```

### Configuration Files Needed

- `tailwind.config.ts`
- `next.config.js`
- `tsconfig.json`
- `.eslintrc.json`
- `.prettierrc`
- `vitest.config.ts`
- `components.json` (Shadcn)

---

## Design System Specifications

### Color Palette

```typescript
// Example theme colors
colors: {
  primary: {
    50: '#...',
    500: '#...',
    900: '#...',
  },
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  // ... more colors
}
```

### Typography

- **Font Family**: Inter, Geist, or similar modern sans-serif
- **Heading Scale**: 6xl, 5xl, 4xl, 3xl, 2xl, xl
- **Body Text**: base, sm, xs
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- Use Tailwind's default spacing scale (4px base)
- Custom container max-widths per breakpoint

---

## Acceptance Criteria

- ✅ Next.js app runs without errors in development
- ✅ TypeScript strict mode enabled with no errors
- ✅ Tailwind CSS properly configured and working
- ✅ Dark/light mode toggles successfully
- ✅ All core components render correctly
- ✅ ESLint and Prettier configured and working
- ✅ Git hooks run on commit
- ✅ Basic test suite runs successfully
- ✅ Project structure is organized and documented

---

## Files to Create/Modify

### New Files

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/theme-provider.tsx`
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/common/theme-toggle.tsx`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `lib/utils.ts`
- `lib/constants.ts`
- `tailwind.config.ts`
- `next.config.js`

### Documentation

- `README.md` - Update with setup instructions
- `docs/design-system.md` - Design token documentation
- `docs/components.md` - Component usage guide

---

## Notes

- Keep components small and focused on single responsibility
- Use TypeScript interfaces for all props
- Follow Shadcn UI patterns for component architecture
- Ensure all components are accessible (ARIA, keyboard nav)
- Test theme switching in all components
- Document any custom utilities or helpers

---

## Dependencies

None (this is the foundation phase)

---

## Blockers/Risks

- Design decisions may need client/stakeholder approval
- Font licensing if using premium fonts
- Ensure all tools are compatible with latest Next.js version

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Setup](https://ui.shadcn.com/docs/installation/next)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [Framer Motion Docs](https://www.framer.com/motion/)
