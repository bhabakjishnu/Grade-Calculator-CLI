---
trigger: always_on
---

# Git & GitHub Quality Standards

## 1. Branching Strategy
- Never commit directly to `main`.
- Branch naming convention:
  - `feature/<short-desc>`: For new capabilities or CLI commands.
  - `fix/<short-desc>`: For bug fixes and patch releases.
  - `refactor/<short-desc>`: For code cleanup without behavior change.

## 2. Commit Message Standards (Conventional Commits)
- Commits must follow: `<type>(<scope>): <short imperative summary>`
  - Example: `feat(gpa): add support for 5.0 weighted scale`
  - Example: `fix(cli): resolve uncaught exception on empty grade array`
- Allowed types: `feat`, `fix`, `test`, `refactor`, `docs`, `chore`.

## 3. Pull Request Requirements
- PR title must follow conventional commit naming.
- All unit and integration tests must pass before requesting review.
- PR must include a clear description:
  - What changed and why.
  - How to test locally.