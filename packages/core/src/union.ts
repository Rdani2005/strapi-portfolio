/**
 * Extracts a union type from a read-only object literal values.
 *
 * @remarks this is useful for a pattern using read-only object literals as an alternative for Typescript enums.
 *
 * @example
 * ``` typescript
 * const Roles = {
 *   admin: 'admin',
 *   member: 'member',
 * } as const;
 *
 * type Roles = UnionTypeFromRecord<typeof Roles>; // 'admin' | 'member'
 * ```
 */
export type UnionTypeFromRecord<T extends Readonly<Record<string, unknown>>> =
  T[keyof T];

/**
 * Extracts a union type from the items of a read-only array.
 *
 * @example
 * ``` typescript
 * const roles = ['admin', 'member'] as const;
 *
 * type Roles = UnionTypeFromArray<typeof roles>; // 'admin' | 'member'
 * ```
 */
export type UnionTypeFromArray<T extends ReadonlyArray<unknown>> = T[number];
