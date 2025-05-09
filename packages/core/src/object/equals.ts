const has = Object.prototype.hasOwnProperty;

function find<T>(iter: { keys(): IterableIterator<T> }, tar: unknown): T;
function find(
  iter: { keys(): IterableIterator<any> },
  tar: unknown,
  key?: any,
): any {
  for (key of iter.keys()) {
    if (equals(key, tar)) return key;
  }
}

/**
 * Performs a deep equality check on the provided values.
 * @param left first value
 * @param right second value
 * @returns `true` if both values are deeply equal; otherwise `false`.
 */
// Taken from: https://github.com/lukeed/dequal/blob/cf1442285b974927dae6d6937556ce4a3c63e634/src/index.js
export function equals(left: unknown, right: unknown): boolean;
export function equals(left: any, right: any): boolean {
  let ctor;
  let len;
  let tmp;
  if (left === right) return true;

  if (left && right && (ctor = left.constructor) === right.constructor) {
    if (ctor === Date) {
      return (left as Date).getTime() === (right as Date).getTime();
    }

    if (ctor === RegExp) {
      return left.toString() === right.toString();
    }

    if (ctor === Array) {
      if ((len = left.length) === right.length) {
        while (len-- && equals(left[len], right[len]));
      }
      return len === -1;
    }

    if (ctor === Set) {
      if (left.size !== right.size) return false;
      for (len of left) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(right, tmp);
          if (!tmp) return false;
        }
        if (!right.has(tmp)) return false;
      }
      return true;
    }

    if (ctor === Map) {
      if (left.size !== right.size) return false;
      for (len of left) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(right, tmp);
          if (!tmp) return false;
        }
        if (!equals(len[1], right.get(tmp))) {
          return false;
        }
      }
      return true;
    }

    if (ctor === ArrayBuffer) {
      left = new Uint8Array(left);
      right = new Uint8Array(right);
    } else if (ctor === DataView) {
      if ((len = left.byteLength) === right.byteLength) {
        while (len-- && left.getInt8(len) === right.getInt8(len));
      }
      return len === -1;
    }

    if (ArrayBuffer.isView(left)) {
      if ((len = left.byteLength) === right.byteLength) {
        while (len-- && (left as any)[len] === right[len]);
      }
      return len === -1;
    }

    if (!ctor || typeof left === "object") {
      len = 0;
      for (ctor in left) {
        if (has.call(left, ctor) && ++len && !has.call(right, ctor))
          return false;
        if (!(ctor in right) || !equals(left[ctor], right[ctor])) return false;
      }
      return Object.keys(right).length === len;
    }
  }

  return left !== left && right !== right;
}
