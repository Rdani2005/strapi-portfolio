/**
 * Represents a list of arguments used as input in functions.
 */
export type Arguments = ReadonlyArray<unknown>;

/**
 * Represents the constructor for an object.
 */
export type Constructor<T extends object> = new (...args: Arguments) => T;

/**
 * Function that wraps another function, expression to delay a calculation until the result is needed.
 * It also can be used to insert operations before or after the execution wrapped function.
 * @remarks Equivalent to `() => T`.
 *
 * More on [Thunks](https://en.wikipedia.org/wiki/Thunk).
 */
export type Thunk<T> = {
  (): T;
};

/**
 * Represents a sequence of instructions that does not produce a result, but has [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)).
 * @remarks Equivalent to `(...args: ReadonlyArray<unknown>) => void`.
 *
 * You can declare the argument types with an array of types
 * @example
 * ``` typescript
 * const log: Procedure<[string]> =
 *   (message: string): void => console.log(message);
 * ```
 */
export type Procedure<T extends Arguments = Arguments> = {
  (...args: T): void;
};

/**
 * Represents a sequence of instructions that produce a result.
 * @remarks Equivalent to `(...args: ReadonlyArray<unknown>) => O`.
 *
 * You can declare the argument types with an array of types
 * @example
 * ``` typescript
 * const sum: Func<[number, number], number> =
 *   (a: number, b: number): number => a + b;
 * ```
 */
export type Func<T extends Arguments = Arguments, O = unknown> = {
  (...args: T): O;
};

/**
 * Function that transform one value into another one. The value can be of the same type or a different one.
 * This kind of functions are used as input the [`map` function](https://en.wikipedia.org/wiki/Map_(higher-order_function)).
 * @remarks Equivalent to `(value: T) => O`.
 */
export type Transform<T, O> = {
  (value: T): O;
};

/**
 * Function that evaluates a value and determines if it fulfills certain criteria.
 * It returns `true` if the criteria is fulfilled; otherwise, `false`.
 * @remarks Equivalent to `(value: T) => boolean`.
 */
export type Predicate<T> = {
  (value: T): boolean;
};

/**
 * Predicate function used in typescript to determine the provided value type.
 * It helps typescript to determine the value type inside a scope.
 *
 * More on [Type Predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
 */
export type TypePredicate<T> = {
  (value: unknown): value is T;
};

/**
 * A function that performs no operations.
 * @remarks Good as default or placeholder function.
 *
 * More on the [noop or null function](https://en.wikipedia.org/wiki/Null_function).
 */
export function noop(): void {}

/**
 * A function that returns the same provided value.
 * @remarks Good as default or placeholder function.
 * @param value value to be returned.
 * @returns same value that was provided.
 *
 * More on the [identity function](https://en.wikipedia.org/wiki/Identity_function).
 */
export function identity<T>(value: T): T {
  return value;
}

/**
 * Creates a function that when executed returns the provided value always.
 * @param value value to be returned.
 * @returns a function that returns the provided value always.
 *
 * @example
 * ``` typescript
 * const zero = constant(0);
 * zero(); // returns 0;
 * ```
 */
export function constant<T>(value: T): Thunk<T> {
  return () => value;
}

/**
 * Creates a predicate that negates the provided predicate.
 * @param predicate function to be negated.
 * @returns a predicate function that negates the result of the provided predicate.
 * @example
 * ``` typescript
 * function isEmpty(value: string): boolean {
 *   return value.length === 0;
 * }
 *
 * const isNotEmpty = not(isEmpty);
 *
 * isEmpty('test'); // returns false.
 * isNotEmpty('test'); // returns true.
 * ```
 */
export function not<T>(predicate: Predicate<T>): Predicate<T> {
  return (value: T) => !predicate(value);
}

type TupleOfLength<T extends Arguments> = Extract<
  { [K in keyof T]: unknown },
  Arguments
>;
/**
 * Represents a sequence of functions that each takes a single argument, obtained from a single function that takes multiple arguments.
 *
 * More on [Currying](https://en.wikipedia.org/wiki/Currying).
 */
export type CurriedFunction<T extends Arguments, O> = <
  P extends T extends [infer TFirstArg, ...infer R]
    ? [TFirstArg, ...Partial<R>]
    : never,
>(
  ...args: P
) => P extends T
  ? O
  : T extends [...TupleOfLength<P>, ...infer R]
    ? CurriedFunction<R, O>
    : never;

/**
 * Transforms a function that takes multiple arguments into a sequence of functions that each takes a single argument.
 * @param fn function to be curried
 * @returns a sequence of functions that each accepts a single argument.
 *
 * More on [Currying](https://en.wikipedia.org/wiki/Currying).
 *
 * @example
 * ``` typescript
 * const sum = curry((a: number, b: number): number => a + b);
 * [1, 2, 3, 4].map(sum(1)); // returns [2, 3, 4, 5]
 * ```
 */
// Taken from: https://github.com/gigobyte/purify/blob/e03cd948ef9cb50702e8dfac2b6a74e12f06a8e5/src/Function.ts
export function curry<T extends Arguments, O>(
  fn: Func<T, O>,
): CurriedFunction<T, O> {
  return function curried(...args: Arguments): any {
    return args.length >= fn.length
      ? fn(...(args as T))
      : curried.bind(undefined, ...args);
  };
}

/**
 * Performs left-to-right function composition. The first function may have multiple arguments, but the remaining functions must have a single argument.
 *
 * More on [function composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science)).
 *
 * @example
 * ``` typescript
 * const length = (value: string): number => value.length;
 * const double = (value: number): number => value * 2;
 *
 * const calculate = compose(len, double);
 *
 * calculate('foo'); // returns 6.
 * ```
 */
// Taken from fp-ts: https://github.com/gcanti/fp-ts/blob/08b8ebf3abed88fca64493125ab3708a857698e9/src/function.ts#L303
export function compose<A extends Arguments, B>(ab: Func<A, B>): Func<A, B>;
export function compose<A extends Arguments, B, C>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
): Func<A, C>;
export function compose<A extends Arguments, B, C, D>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
): Func<A, D>;
export function compose<A extends Arguments, B, C, D, E>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
): Func<A, E>;
export function compose<A extends Arguments, B, C, D, E, F>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
): Func<A, F>;
export function compose<A extends Arguments, B, C, D, E, F, G>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
): Func<A, G>;
export function compose<A extends Arguments, B, C, D, E, F, G, H>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
): Func<A, H>;
export function compose<A extends Arguments, B, C, D, E, F, G, H, I>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
): Func<A, I>;
export function compose<A extends Arguments, B, C, D, E, F, G, H, I, J>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
): Func<A, J>;
export function compose<A extends Arguments, B, C, D, E, F, G, H, I, J, K>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
): Func<A, K>;
export function compose<A extends Arguments, B, C, D, E, F, G, H, I, J, K, L>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
): Func<A, L>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
): Func<A, M>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
): Func<A, N>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
): Func<A, O>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
): Func<A, P>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
): Func<A, Q>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
): Func<A, R>;
export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
  rs: Func<[R], S>,
): Func<A, S>;

export function compose<
  A extends Arguments,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
>(
  ab: Func<A, B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
  rs: Func<[R], S>,
  st: Func<[S], T>,
): Func<A, T>;
export function compose(
  ab: Func,
  bc?: Func,
  cd?: Func,
  de?: Func,
  ef?: Func,
  fg?: Func,
  gh?: Func,
  hi?: Func,
  ij?: Func,
): Func {
  /* eslint-disable prefer-rest-params */
  switch (arguments.length) {
    case 0: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return args[0];
      };
    }
    case 1: {
      return ab;
    }
    case 2: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return bc!(ab.apply(this, args));
      };
    }
    case 3: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return cd!(bc!(ab.apply(this, args)));
      };
    }
    case 4: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return de!(cd!(bc!(ab.apply(this, args))));
      };
    }
    case 5: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return ef!(de!(cd!(bc!(ab.apply(this, args)))));
      };
    }
    case 6: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return fg!(ef!(de!(cd!(bc!(ab.apply(this, args))))));
      };
    }
    case 7: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return gh!(fg!(ef!(de!(cd!(bc!(ab.apply(this, args)))))));
      };
    }
    case 8: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return hi!(gh!(fg!(ef!(de!(cd!(bc!(ab.apply(this, args))))))));
      };
    }
    case 9: {
      return function executeCompose(this: unknown, ...args: Array<any>) {
        return ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab.apply(this, args)))))))));
      };
    }
    default: {
      const functions: Array<Func> = arguments as unknown as Array<Func>;
      return function executeCompose(this: unknown, ...args: Array<any>) {
        let result = functions[0]!.apply(this, args);
        for (let i = 1; i < functions.length; i++) {
          result = functions[i]!(result);
        }
        return result;
      };
    }
  }
  /* eslint-enable prefer-rest-params */
}

/**
 * Pass the provided value (first argument) through the pipeline of functions. Each function must receive only one argument.
 *
 * More on [function composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science)).
 *
 * @example
 * ``` typescript
 * const length = (value: string): number => value.length;
 * const double = (value: number): number => value * 2;
 * pipe('foo', len, double); // returns 6
 * ```
 */
// Taken from fp-ts: https://github.com/gcanti/fp-ts/blob/08b8ebf3abed88fca64493125ab3708a857698e9/src/function.ts#L660
export function pipe<A>(a: A): A;
export function pipe<A, B>(a: A, ab: Func<[A], B>): B;
export function pipe<A, B, C>(a: A, ab: Func<[A], B>, bc: Func<[B], C>): C;
export function pipe<A, B, C, D>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
): D;
export function pipe<A, B, C, D, E>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
): E;
export function pipe<A, B, C, D, E, F>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
): F;
export function pipe<A, B, C, D, E, F, G>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
): G;
export function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
): I;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
): J;
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
): K;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
): L;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
): M;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
): N;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
): O;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
): P;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
): Q;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
): R;
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
  rs: Func<[R], S>,
): S;

export function pipe<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
>(
  a: A,
  ab: Func<[A], B>,
  bc: Func<[B], C>,
  cd: Func<[C], D>,
  de: Func<[D], E>,
  ef: Func<[E], F>,
  fg: Func<[F], G>,
  gh: Func<[G], H>,
  hi: Func<[H], I>,
  ij: Func<[I], J>,
  jk: Func<[J], K>,
  kl: Func<[K], L>,
  lm: Func<[L], M>,
  mn: Func<[M], N>,
  no: Func<[N], O>,
  op: Func<[O], P>,
  pq: Func<[P], Q>,
  qr: Func<[Q], R>,
  rs: Func<[R], S>,
  st: Func<[S], T>,
): T;
export function pipe(
  a: unknown,
  ab?: Func,
  bc?: Func,
  cd?: Func,
  de?: Func,
  ef?: Func,
  fg?: Func,
  gh?: Func,
  hi?: Func,
): unknown {
  /* eslint-disable prefer-rest-params */
  switch (arguments.length) {
    case 1: {
      return a;
    }
    case 2: {
      return ab!(a);
    }
    case 3: {
      return bc!(ab!(a));
    }
    case 4: {
      return cd!(bc!(ab!(a)));
    }
    case 5: {
      return de!(cd!(bc!(ab!(a))));
    }
    case 6: {
      return ef!(de!(cd!(bc!(ab!(a)))));
    }
    case 7: {
      return fg!(ef!(de!(cd!(bc!(ab!(a))))));
    }
    case 8: {
      return gh!(fg!(ef!(de!(cd!(bc!(ab!(a)))))));
    }
    case 9: {
      return hi!(gh!(fg!(ef!(de!(cd!(bc!(ab!(a))))))));
    }
    default: {
      let result = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
        result = arguments[i]!(result);
      }
      return result;
    }
  }
  /* eslint-enable prefer-rest-params */
}
