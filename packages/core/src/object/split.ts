import { type Prettify } from "../types";

/**
 * Returns a tuple with two partial copies of `target`, one includes the specified properties, the other one the non-specified properties.
 * @param target The object to be splitted.
 * @param keys The properties to be extracted from the target object.
 * @returns A tuple containing two objects, the left one has the provided properties, the right one the omitted properties.
 *
 * @example
 * ``` typescript
 * split({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']) // returns [{ a: 1, d: 4 }, { b: 2, c: 3 }]
 * ```
 */
export function split<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
>(
  target: T,
  keys: ReadonlyArray<K>,
): [Prettify<Pick<T, K>>, Prettify<Omit<T, K>>] {
  const pick: Partial<Pick<T, K>> = {};
  const omit: Partial<Omit<T, K>> = {};
  for (const key of Object.keys(target) as Array<K>) {
    if (keys.includes(key)) pick[key] = target[key];
    else (omit as any)[key] = target[key];
  }
  return [pick as Pick<T, K>, omit as Omit<T, K>] as const;
}
