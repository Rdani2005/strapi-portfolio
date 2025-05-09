import { twMerge } from "tailwind-merge";
import { type Nullable } from "@strapi-portfolio/core";

type CnClassArray = Array<CnClassValue>;
type CnClassRecord = Record<string, any>;
export type CnClassValue = Nullable<
  string | number | boolean | CnClassArray | CnClassRecord
>;

function val(mix: CnClassValue) {
  let k;
  let y;
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      const len = mix.length;
      for (k = 0; k < len; k++) {
        if (mix[k] && (y = val(mix[k] as CnClassValue))) {
          if (str) {
            str += " ";
          }
          str += y;
        }
      }
    } else {
      for (y in mix) {
        if (mix?.[y]) {
          if (str) {
            str += " ";
          }
          str += y;
        }
      }
    }
  }

  return str;
}

// Taken from: https://github.com/lukeed/clsx/blob/554ad31e92b27f45fb6d000e73deabf5ce84c925/src/index.js
export function clsx(...inputs: Array<CnClassValue>): string;
export function clsx() {
  let x;
  let tmp;
  let i = 0;
  let str = "";
  const len = arguments.length;
  for (; i < len; i++) {
    // eslint-disable-next-line prefer-rest-params
    if ((tmp = arguments[i]) && (x = val(tmp))) {
      if (str) {
        str += " ";
      }
      str += x;
    }
  }
  return str;
}

/**
 * Conditionally join css class names together.
 * @remarks The output follows the tailwind recommended order.
 * @param inputs classes to be join together.
 *
 * @example
 * ``` typescript
 * // Strings (variadic)
 * cn('foo', true && 'bar', 'baz'); // 'foo bar baz'
 *
 * // Object
 * cn({ foo:true, bar:false, baz:isTrue() }); // 'foo baz'
 *
 * // Objects (variadic)
 * cn({ foo:true }, { bar:false }, null, { '--foobar':'hello' }); // 'foo --foobar'
 *
 * // Arrays
 * cn(['foo', 0, false, 'bar']); // 'foo bar'
 *
 * // Arrays (variadic)
 * cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]); // foo bar baz hello there'
 *
 * // Kitchen sink (with nesting)
 * cn('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya'); // 'foo bar hello world cya'
 * ```
 */
export function cn(...inputs: Array<CnClassValue>): string {
  return twMerge(clsx(...inputs));
}
