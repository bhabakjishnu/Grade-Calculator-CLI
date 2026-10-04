# Security Policy & Audit Report

## Security Audit Summary

- **Third-Party Vulnerabilities**: **0** (Zero third-party dependencies used).
- **Audit Tool**: `npm audit`
- **Result**: `found 0 vulnerabilities` (0 low, 0 moderate, 0 high, 0 critical).
- **Node.js Engine**: Built using native Node.js core libraries (`node:readline/promises`, `node:test`, `node:assert/strict`, `node:process`).

## Security Architecture & Practices

### 1. Zero External Dependencies Attack Surface
By exclusively utilizing Node.js built-in runtime modules, the project completely eliminates software supply chain risks such as malicious transitive packages, dependency squatting, and package deprecations.

### 2. Input Sanitization & Validation
- **Type Safety**: Input is sanitized via `.trim()` and parsed explicitly with `Number()`.
- **Finiteness Check**: Evaluated with `Number.isFinite()` to reject `NaN`, `Infinity`, and non-numeric characters.
- **Range Boundaries**: Enforces strict bounds `[0, 100]` with ternary comparisons to prevent integer overflow and logic bypasses.

### 3. Execution Safety
- **No Dynamic Code Execution**: Code contains zero instances of `eval()`, `Function()`, or shell execution helpers.
- **Prototype Pollution Prevention**: Employs shallow, immutable plain objects for grade output metadata without unsafe deep-merging.
- **Resource Management**: The `readline` stream interface is closed promptly (`rl.close()`) after processing input, preventing dangling file descriptor leaks.

## Reporting a Vulnerability

If you discover a potential security vulnerability in this project, please report it privately:
1. Open a private security advisory on GitHub or email the maintainer.
2. Please provide reproduction steps and expected versus actual behavior.
3. Vulnerabilities will be acknowledged and remediated promptly.
