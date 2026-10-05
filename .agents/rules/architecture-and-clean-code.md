---
trigger: always_on
---

# Architecture & Clean Code Standards

## 1. Separation of Concerns (Domain vs. Interface)
- **Domain Layer (`src/core/` or `src/services/`)**:
  - All calculation logic (GPA, letter grades, weighted averages, percentages) must be purely mathematical.
  - Domain functions MUST be pure, deterministic, and free of side effects (no `console.log`, no `process.exit`, no file I/O).
- **Presentation / CLI Layer (`src/cli/` or `src/commands/`)**:
  - Handles command-line argument parsing, user prompts, styling, and output formatting.
  - Communicates with the core calculation layer via defined data models/interfaces.

## 2. Modularity & Design
- Adhere to the Single Responsibility Principle (SRP): Each function and module should have one reason to change.
- Prefer composition over inheritance.
- Keep functions short, focused (max 25-30 lines), and cyclomatic complexity low.

## 3. Modern JavaScript Standards
- Use modern ES6+ syntax (`const`/`let`, arrow functions where appropriate, object destructuring, spread syntax).
- Maintain immutability: Avoid mutating arrays or objects directly; use pure methods like `.map()`, `.filter()`, `.reduce()`.
- Use descriptive naming conventions:
  - Functions: verb phrases (e.g., `calculateGpa()`, `parseGradeInput()`).
  - Variables/Constants: noun phrases, uppercase for global configuration (e.g., `DEFAULT_SCALE`, `GRADE_BOUNDARIES`).