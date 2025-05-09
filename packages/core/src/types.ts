/**
 * Utility type that takes an object type and makes the hover overlay more readable.
 *
 * {@link https://www.totaltypescript.com/concepts/the-prettify-helper Read more}
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;
