import { type Prettify } from "../types";

/**
 * Returns a partial copy of `target` ommiting the specified properties.
 * @param target The object to ommit the properties from.
 * @param keys The properties to be omitted from the target object.
 * @returns A new object without the provided properties.
 *
 * @example
 * ``` typescript
 * omit({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']) // returns { b: 2, c: 3 }
 * ```
 */
export function omit<T extends Record<PropertyKey, unknown>, K extends keyof T>(
  target: T,
  keys: ReadonlyArray<K>,
): Prettify<Omit<T, K>> {
  const result: Partial<Omit<T, K>> = {};
  for (const key of Object.keys(target) as Array<K>) {
    if (keys.includes(key)) continue;

    (result as any)[key] = target[key];
  }
  return result as Omit<T, K>;
}
