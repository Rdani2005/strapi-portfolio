import { type Func } from "../function";

/**
 * Creates an object with the same keys as `target` and values mapped using the provided `mapper` function.
 * @param mapper The function invoked per iteration.
 * @param target The object to iterate over.
 * @returns A new object with the mapped values.
 *
 * @example
 * ``` typescript
 * mapValues((value, key) => value + key, {a: 1, b: 2}) // returns {a: '1a', b: '2b'}
 * ```
 */
export function mapValues<T extends Record<PropertyKey, unknown>, R>(
  mapper: Func<[T[keyof T], key: keyof T], R>,
  target: T,
): Record<keyof T, R> {
  const result: Partial<Record<keyof T, R>> = {};
  for (const key of Object.keys(target) as Array<keyof T>) {
    result[key] = mapper(target[key], key);
  }
  return result as Record<keyof T, R>;
}
