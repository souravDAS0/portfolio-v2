---
description: Load a specific scope file into current-scope.md for focused work
---

# Scope Command

Load the specified scope file from `scope-details/` into `current-scope.md` for focused development work.

## Instructions

1. Extract the scope filename from the command argument (without .md extension if provided)
2. Read the content from `scope-details/{scope-name}.md`
3. Write the content to `current-scope.md` in the project root
4. Confirm to the user which scope has been loaded

## Available Scopes

- **foundation** - Project Setup & Core Infrastructure (Phase 1)
- **core-sections** - Main Content Sections (Phase 2)
- **projects-portfolio** - Showcase Work (Phase 3)
- **experience-resume** - Professional Background (Phase 4)
- **contact-integration** - Communication & Third-party Services (Phase 5)
- **blog** - Content Platform (Phase 6) - Optional
- **polish-optimization** - Final Touches (Phase 7)
- **testing-deployment** - Quality Assurance & Launch (Phase 8)

## Usage Examples

```
/scope foundation
/scope core-sections
/scope projects-portfolio
/scope experience-resume
```

## Error Handling

If the scope file doesn't exist, show an error message and list available scopes.

## Success Message

After successfully loading a scope, display:

- The scope name that was loaded
- A brief summary of what this scope covers
- The file path where it was saved (current-scope.md)
- A reminder to refer to this file while working on features in this scope
