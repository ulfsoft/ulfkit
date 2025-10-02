<div align="center">

# ulfkit

<p><strong>A tiny, stack‑agnostic TypeScript utility toolkit.</strong></p>

<p>
	<a href="https://www.npmjs.com/package/@ulfsoft/ulfkit"><img alt="npm" src="https://img.shields.io/npm/v/%40ulfsoft%2Fulfkit.svg?label=npm%20version"></a>
	<a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-Apache--2.0-blue"></a>
	<a href="https://github.com/ulfsoft/ulfkit/actions"><img alt="CI" src="https://img.shields.io/badge/ci-pending-lightgrey"></a>
</p>

</div>

## Features

- Zero runtime dependencies
- ESM + CJS + TypeScript typings
- Strict TypeScript config, framework agnostic
- Small, focused utilities (grows conservatively)

## Install

```bash
pnpm add @ulfsoft/ulfkit
# or
npm install @ulfsoft/ulfkit
# or
yarn add @ulfsoft/ulfkit
```

## Quick Usage

```ts
import { cc, combineClasses, math } from "@ulfsoft/ulfkit";

const classes = combineClasses(
	"btn base",
	{ "btn-primary": true, "btn-disabled": () => false },
	" extra  ",
	{ hidden: false }
);
// => "btn base btn-primary extra"

const ratio = math.lerp(0, 100, 0.25); // 25
const clamped = math.clamp(150, 0, 100); // 100

// Shorthand alias
const moreClasses = cc("flex", { "flex-row": true, "flex-col": false });
```

## API Overview

### `combineClasses(...parts)` / `cc`
Builds a space‑separated class string from:
- Plain strings (empty / whitespace skipped)
- Object maps: key included if value is truthy or a function returning true

### `math`
Namespace with numeric helpers:
- `clamp(num, min, max)` – constrain a number
- `lerp(start, end, t)` – linear interpolation (no clamping of `t`)

## Project Goals

- Provide a minimal core of pragmatic utilities
- Preserve small surface area and high internal consistency
- Avoid premature abstraction & heavy dependencies

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

Quick dev loop:

```bash
pnpm install
pnpm build
pnpm test
```

Type checking only:
```bash
pnpm typecheck
```

Formatting & lint:
```bash
pnpm lint
pnpm format
```

## Publishing (Maintainers)

```bash
pnpm version patch   # or minor / major
git push --follow-tags
pnpm publish --access public
```

See more in [docs/publishing.md](docs/publishing.md).

## Versioning & Changelog

Follows semantic versioning. Changes recorded in [CHANGELOG.md](CHANGELOG.md).

## License

Apache 2.0 © Ulfsoft / Contributors

---

> PRs welcome. Keep it lean.
