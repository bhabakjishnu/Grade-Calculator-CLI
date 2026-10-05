---
description: # Feature Development Workflow
---

# Feature Development Workflow

This workflow guides the implementation of any new calculation capability, CLI command, or option.

## Phase 1: Specification & Design
1. Define mathematical formulas, inputs, scales (e.g., 4.0, 5.0, 10.0 scale), and edge conditions.
2. Define the CLI command interface:
   - Command name, flags, positional arguments, and help descriptions.
3. Review against `.agents/rules/01-architecture-and-clean-code.md`.

## Phase 2: Core Domain Implementation (Test-Driven)
1. Write unit tests for the core calculation module first (`tests/core/...`).
2. Implement the pure calculation functions in `src/core/`.
3. Verify all unit tests pass with 100% boundary coverage.

## Phase 3: CLI Integration
1. Wire the core calculation into the CLI parser (`src/cli/`).
2. Add input validation and custom error formatting.
3. Add color/table output formatting for terminal display.

## Phase 4: Integration Verification
1. Run CLI integration tests with valid inputs, invalid inputs, and `--help`.
2. Check exit codes (`0` on success, non-zero on error).
3. Run the full linter and test suite.