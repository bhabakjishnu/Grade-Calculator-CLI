---
description: # Release & Pre-Commit Verification Workflow
---

# Release & Pre-Commit Verification Workflow

Use this checklist before committing code or publishing a version.

## Quality Checklist
- [ ] **Tests:** All unit and CLI integration tests pass (`npm test`).
- [ ] **Linting:** Code passes linting without warnings or errors (`npm run lint`).
- [ ] **Edge Cases:** Boundary conditions tested (empty inputs, zero values, extreme bounds).
- [ ] **Help & Docs:** `--help` text accurately reflects any updated or new options.
- [ ] **Cleanliness:** No `console.log` debug remnants or temporary scratch files.
- [ ] **SemVer:** If releasing, update version in `package.json` following Semantic Versioning.