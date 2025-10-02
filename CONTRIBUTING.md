# Contributing to ulfkit

Thanks for your interest in contributing! This project aims to stay **small, sharp, and pragmatic**.

## Core Principles
- Minimal surface area
- Zero runtime dependencies (avoid adding unless critical)
- Predictable TypeScript types
- Performance over premature generalization

## Getting Started
```bash
pnpm install
pnpm build
pnpm test
```

## Commands
| Action | Command |
| ------ | ------- |
| Build  | `pnpm build` |
| Watch  | `pnpm build:watch` |
| Lint   | `pnpm lint` |
| Format | `pnpm format` |
| Tests  | `pnpm test` |
| Typecheck | `pnpm typecheck` |

## Adding a Utility
1. Open an issue proposing the addition
2. Describe the API shape (inputs, output, edge cases)
3. Provide rationale (why it belongs in core)
4. Submit PR with:
   - `src/<utility>.ts`
   - Tests in `src/__tests__` (or `tests/` if added later)
   - Added to `src/index.ts` exports
   - Documentation snippet in `docs/api` if substantial

## Coding Guidelines
- Use strict TypeScript, no `any` unless justified with comment
- Keep functions pure (no side effects) unless clearly documented
- Prefer explicit over clever
- Optimize hot-paths only after measurement

## Commit Conventions
Follow Conventional Commits (recommended):
```
feat: add foo helper
fix: correct clamp edge case when min > max
chore: update dependencies
refactor: simplify combineClasses branches
```

## Release Process (maintainers)
TBD.

## Questions?
Open an issue or discussion.
