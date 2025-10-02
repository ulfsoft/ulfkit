# Getting Started

## Install
```bash
pnpm add @ulfsoft/ulfkit
```

## Basic Import
```ts
import { combineClasses, cc, math } from '@ulfsoft/ulfkit';
```

## combineClasses / cc
```ts
const result = combineClasses(
  'btn',
  { 'btn-primary': true, 'btn-disabled': false },
  ' extra ',
  { hidden: () => false }
);
// => 'btn btn-primary extra'
```

## math.lerp
```ts
math.lerp(0, 10, 0.5); // 5
```

## math.clamp
```ts
math.clamp(15, 0, 10); // 10
```
