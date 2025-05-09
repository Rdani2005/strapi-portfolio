import { isNotNil, Nullable } from "../nil";

export interface Guard {
  /**
   * Asserts if a clause was met based on the condition.
   * If the condition is true, the guard clause is considered valid;
   * otherwise an invariant error is thrown described by the provided message.
   * @param condition value that determines if the clause condition was met.
   * @param message message to describe the clause in case that the condition was not met.
   * @returns assertion that indicates the condition was met.
   * @example
   * ```
   * import { Guard } from '@tokyo/core';
   *
   * function execute(times: number): void {
   *   Guard.clause(times > 5, 'Times must be more than 5');
   *   ...
   * }
   * ```
   */
  clause(condition: boolean, message: string): asserts condition is true;
  /**
   * Ensures that provided value is not `null` or `undefined`.
   * If the value is invalid, an invariant error will be thrown.
   * @param arg value to be tested.
   * @param name argument's name used in the invariant error message.
   * @returns assertion that indicates the provided value is not `null` or `undefined`.
   */
  required<T>(arg: Nullable<T>, name: string): asserts arg is NonNullable<T>;
  /**
   * Ensures that provided string or array is not empty.
   * If the value is empty, an invariant error will be thrown.
   * @remarks A string with only white-spaces is considered empty.
   * @param arg string or array to be tested.
   * @param name argument's name used in the invariant error message.
   * @returns assertion that indicates the provided value is not empty.
   */
  nonempty<T extends string | Array<I>, I = unknown>(
    arg: T,
    name: string,
  ): asserts arg is T;
}

/**
 * Represents an invariant violation catched by a [guard clause](https://wiki.c2.com/?GuardClause).
 */
export class InvariantError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvariantError.prototype);
    this.name = InvariantError.prototype.constructor.name;
  }
}

function clause(
  condition: boolean,
  message: string,
): asserts condition is true {
  if (condition) return;
  throw new InvariantError(message);
}

function required<T>(
  arg: Nullable<T>,
  name: string,
): asserts arg is NonNullable<T> {
  return clause(isNotNil(arg), `Argument called "${name}" is required`);
}

function nonempty<T extends string | Array<I>, I = unknown>(
  arg: T,
  name: string,
): asserts arg is T {
  required(arg, name);
  const value = typeof arg === "string" ? arg.trim() : arg;
  return clause(value.length > 0, `Argument called "${name}" cannot be empty`);
}

export const Guard: Guard = {
  clause,
  required,
  nonempty,
};
