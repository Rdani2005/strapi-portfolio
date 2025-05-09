import { type Prettify } from "../types";

/**
 * Returns a partial copy of `target` with only the specified properties.
 * @param target The object to extract the properties from.
 * @param keys The properties to be extracted from the target object.
 * @returns A new object with the provided properties.
 *
 * @example
 * ``` typescript
 * pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']) // returns { a: 1, d: 4 }
 * ```
 */
export function pick<T extends Record<PropertyKey, unknown>, K extends keyof T>(
  target: T,
  keys: ReadonlyArray<K>,
): Prettify<Pick<T, K>> {
  const result: Partial<Pick<T, K>> = {};
  for (const key of keys) {
    if (!(key in target)) continue;

    result[key] = target[key];
  }
  return result as Pick<T, K>;
}
