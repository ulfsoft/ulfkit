namespace math {
  export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
  }

  export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }
}

export { math };
