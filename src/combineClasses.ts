type Condition = boolean | (() => boolean) | undefined;

export function combineClasses(
  ...args: (string | Record<string, Condition>)[]
): string {
  return args
    .flatMap((arg) => {
      if (arg === undefined) {
        return [];
      }
      if (typeof arg === "string") {
        const trimmed = arg.trim();
        if (trimmed === "") {
          return [];
        }
        return trimmed;
      } else if (typeof arg === "object" && arg !== null) {
        return Object.entries(arg)
          .filter(([_, value]) => {
            if (typeof value === "boolean") {
              return value;
            } else if (typeof value === "function") {
              return value();
            }
            return false;
          })
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

export { combineClasses as cc };
