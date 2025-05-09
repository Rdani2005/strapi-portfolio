/**
 * Represents a value that is `null` or `undefined`.
 */
export type Nil = null | undefined;

/**
 * Represents the possibility of holding a value or {@link Nil}.
 */
export type Nullable<T> = T | Nil;

/**
 * Determines if provided value is {@link Nil}.
 * @param value value to be checked.
 * @returns `true` if provided value is {@link Nil}; otherwise `false`.
 */
export function isNil(value: unknown): value is Nil {
  return value == null;
}

/**
 * Determines if provided value is **not** {@link Nil}.
 * @param value value to be checked.
 * @returns `true` if provided value isn't {@link Nil}; otherwise `false`.
 */
export function isNotNil<T>(value: unknown): value is NonNullable<T> {
  return !isNil(value);
}

/**
 * Returns the provided value (second argument) if it is not `null`, `undefined` or `NaN`; otherwise the provided default value (first argument) is returned.
 * @param defaultValue the default value.
 * @param value the value to be used.
 * @returns the provided value (second argument) if it is not `null`, `undefined` or `NaN`; otherwise the provided default value (first argument).
 *
 * @example
 * ``` typescript
 *    const invalid = undefined;
 *    const valid = 1;
 *
 *    defaultTo(2, invalid); // => 2
 *    defaultTo(2, valid); // => 1
 * ```
 */
export function defaultTo<T>(defaultValue: T, value: Nullable<T>): T {
  // validate v !== v because  NaN is the only value which returns true in that comparation.
  return value == null || value !== value ? defaultValue : value;
}
