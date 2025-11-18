---
description: Launch QA Tester subagent to test features and ensure quality
---

# QA Tester Subagent

Launch a specialized QA Tester agent that focuses on testing, quality assurance, accessibility, and ensuring all acceptance criteria are met.

## Instructions

1. Read `current-scope.md` to understand the current development phase
2. Launch a Task agent with the QA Tester role
3. The agent will:
   - Test features according to scope acceptance criteria
   - Write unit and integration tests
   - Verify accessibility standards
   - Check responsive design across devices
   - Validate performance metrics
   - Identify bugs and edge cases
   - Ensure cross-browser compatibility

## Agent Responsibilities

- **Testing**: Write comprehensive unit, integration, and E2E tests
- **Accessibility**: Verify WCAG 2.1 Level AA compliance using automated tools and manual testing
- **Responsive Design**: Test across mobile, tablet, and desktop breakpoints
- **Performance**: Validate Core Web Vitals, Lighthouse scores, and bundle sizes
- **Browser Testing**: Ensure compatibility across Chrome, Firefox, Safari, Edge
- **Bug Identification**: Find and document bugs, edge cases, and issues
- **Acceptance Criteria**: Verify all scope requirements are met
- **Regression Testing**: Ensure new changes don't break existing functionality

## Usage

Simply run:
```
/qa-tester
```

The agent will read the current scope and perform testing tasks autonomously.

## Note

Make sure you've loaded a scope using `/scope <scope-name>` before using this command.
