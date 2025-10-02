import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { combineClasses } from "../combineClasses";

describe("combineClasses", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("combines class names correctly", () => {
    // Arrange
    const input = ["class1", "class2", { class3: true, class4: false }];

    // Act
    const result = combineClasses(...input);

    // Assert
    expect(result).toBe("class1 class2 class3");
  });

  it("discards class names correctly", () => {
    // Arrange
    const input = [{ class1: () => false }, { class3: false, class4: false }];

    // Act
    const result = combineClasses(...input);

    // Assert
    expect(result).toBe("");
  });

  it("handles mixed inputs correctly", () => {
    // Arrange
    const input = ["class1", { class2: true, class3: () => false }, "class4", { class5: () => true }];

    // Act
    const result = combineClasses(...input);

    // Assert
    expect(result).toBe("class1 class2 class4 class5");
  });

  it("handles mixed inputs as parameters correctly", () => {
    // Act
    const result = combineClasses("", { class1: false }, "class2");

    // Assert
    expect(result).toBe("class2");
  });

  it("handles empty and whitespaces in inputs correctly", () => {
    // Act
    const result = combineClasses("", "  ", "\t", " class1 ", "\n", " ");

    // Assert
    expect(result).toBe("class1");
  });

  it("handles multiple classes in inputs correctly", () => {
    // Act
    const result = combineClasses("class2 class3");

    // Assert
    expect(result).toBe("class2 class3");
  });
});
