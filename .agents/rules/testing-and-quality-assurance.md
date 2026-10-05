---
trigger: always_on
---

# Testing & Quality Assurance

## 1. Test Coverage Requirements
- Every calculation function must have unit tests covering:
  - Standard/typical cases.
  - Boundary cases (0%, 100%, exact grade cutoffs like 89.99 vs 90.00).
  - Invalid inputs (negative numbers, non-numeric strings, empty arrays).
- CLI commands should have end-to-end (E2E) or integration tests verifying exit codes and expected standard output.

## 2. Code Consistency
- Maintain strict linting rules (ESLint) and formatting (Prettier).
- No dead code, unused imports, or lingering debug statements (`console.log` used for debugging).