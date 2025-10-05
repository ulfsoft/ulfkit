import { describe, expect, it } from "vitest";
import { math } from "../math";

describe("math", () => {
  describe("clamp", () => {
    it("clamps a number within the specified range", () => {
      expect(math.clamp(5, 1, 10)).toBe(5);
      expect(math.clamp(-5, 1, 10)).toBe(1);
      expect(math.clamp(15, 1, 10)).toBe(10);
    });
  });

  describe("lerp", () => {
    it("linearly interpolates between two numbers", () => {
      expect(math.lerp(0, 10, 0)).toBe(0);
      expect(math.lerp(0, 10, 0.5)).toBe(5);
      expect(math.lerp(0, 10, 1)).toBe(10);
    });
  });
});
