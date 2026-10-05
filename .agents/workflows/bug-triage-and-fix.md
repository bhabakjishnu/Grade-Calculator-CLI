---
description: # Bug Triage & Fix Workflow
---

# Bug Triage & Fix Workflow

Follow this procedure when addressing calculation discrepancies, crashes, or formatting bugs.

## Step 1: Reproduction Test
- Create a minimal failing test case in the test suite that reliably reproduces the reported issue.
- Verify the test fails before writing any fix.

## Step 2: Root Cause Analysis
- Determine whether the bug is:
  - Mathematical / Domain error (incorrect formula, rounding bug).
  - Validation error (unhandled input, type coercion).
  - CLI Presentation error (bad table rendering, exit code leak).

## Step 3: Implement Fix
- Apply the minimal, targeted fix to the affected module.
- Do not refactor unrelated code in the same patch.

## Step 4: Regression & Sanity Check
- Verify that the new test passes.
- Run the entire test suite to ensure no regressions in existing grade calculation scales.