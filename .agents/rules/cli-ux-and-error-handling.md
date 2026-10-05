---
trigger: always_on
---

# CLI User Experience & Error Handling

## 1. Exit Codes (POSIX Standard)
- Code `0`: Successful execution.
- Code `1`: Domain or user input error (e.g., invalid grade score provided).
- Code `2`: CLI command misuse (e.g., missing required arguments, invalid flag).

## 2. Error Display & Resilience
- Never leak raw stack traces to the user during normal command failures.
- Print human-readable, actionable error messages to `stderr` (`console.error`).
  - Bad: `Error: Cannot read property 'map' of undefined`
  - Good: `Error: No grades were provided. Use --help to view required arguments.`
- Catch all unhandled rejections and exceptions at the CLI entry point (`bin/` or `index.js`).

## 3. Terminal Formatting
- Respect `NO_COLOR` environment variable or `--no-color` flag.
- Output clear visual hierarchy (summary tables, colored status badges for pass/fail/honors).
- Provide informative `--help` and `--version` flags for every command.