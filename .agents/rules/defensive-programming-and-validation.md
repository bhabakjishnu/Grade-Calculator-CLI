---
trigger: always_on
---

# Defensive Programming & Input Validation

## 1. Boundary & Domain Validation
- Never assume user input is valid. Validate before processing:
  - Grade range boundaries (e.g., 0 <= score <= 100, or standard GPA scales 0.0 to 4.0).
  - Weights must be positive numbers and sum up to 100% (or 1.0) with acceptable floating-point tolerance (`Math.abs(sum - 1.0) < 0.001`).
  - Non-numeric inputs, `NaN`, `null`, `undefined`, and infinite values must be intercepted immediately.

## 2. Floating-Point Precision
- Never compare floating-point numbers with direct equality (`===`).
- Round final display values explicitly (e.g., standard 2 decimal places for GPAs) without truncating intermediate calculation precision.

## 3. Empty State Handling
- Explicitly guard against empty collections (e.g., empty course lists, 0 total credits).
- Avoid division-by-zero errors when calculating weighted averages.