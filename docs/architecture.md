# Architecture

`ulfkit` is intentionally minimal.

## Build
- TypeScript compiler (no bundler yet)
- Outputs to `dist/` (CJS + ESM + d.ts)

## Directory Layout
```
src/
  combineClasses.ts  # class name utility
  math.ts            # math namespace helpers
  index.ts           # exports public API
```

## Export Strategy
- Single entry point today (`src/index.ts`)
- Use `exports` field in `package.json` for Node + bundlers
- Future: potential subpath exports (`./math`, `./classes`)

## Guiding Constraints
- Avoid adding dependencies
- Keep API surface tight
- Prefer explicit code over metaprogramming

## Future Considerations
- Add benchmarking harness
- Introduce optional tree-shakable modules if library grows
- Provide ESM-only variant (drop CJS) once ecosystem fully transitions
