# API Reference

## combineClasses(...parts) / cc
Builds a space-separated class string from a list of arguments.

### Arguments
- `string` values: trimmed, empty ignored
- `Record<string, boolean | () => boolean>`: key included if value is `true` or function returns `true`

### Returns
`string` – combined class list.

### Example
```ts
combineClasses('a', { b: true, c: false }, ' d '); // 'a b d'
```

Alias: `cc`.

## math Namespace

### math.clamp(num, min, max)
Constrains `num` to the inclusive `[min, max]` range.

### math.lerp(start, end, t)
Linear interpolation. Does not clamp `t`.

```ts
math.lerp(10, 20, 0.25); // 12.5
```
