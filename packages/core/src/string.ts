import { Nullable, isNil, isNotNil } from "./nil";
/**
 * Template litral tag that strips indentation and empty lines at the beginning and the end from multi-line strings.
 * @remarks It can also be used as a function.
 * @returns The string without indentation or empty lines at the beginning or end.
 *
 * @example
 * ``` typescript
 * // As template literal tag
 * const text = dedent`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *                     Pellentesque porttitor ultrices risus maximus faucibus.
 *                     Nullam ac orci vitae eros tempor feugiat.
 * `;
 *
 * // As a function
 * const text = dedent(`
 *    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *    Pellentesque porttitor ultrices risus maximus faucibus.
 *    Nullam ac orci vitae eros tempor feugiat.
 * `);
 * ```
 */
// taken from https://github.com/dmnd/dedent
export function dedent(
  strings: string | TemplateStringsArray,
  ...values: Array<unknown>
): string {
  const raw = typeof strings === "string" ? [strings] : strings.raw;
  let result = "";
  for (let i = 0; i < raw.length; i++) {
    result += (raw[i] ?? "").replace(/\\\n[\t ]*/g, "").replace(/\\`/g, "`");
    if (i < values.length) result += values[i] ?? "";
  }

  const lines = result.split("\n");
  let mindent: Nullable<number> = null;
  for (let i = 0; i < lines.length; i++) {
    const match = (lines[i] ?? "").match(/^(\s+)\S+/);
    if (isNil(match)) continue;

    const indent = (match[1] ?? "").length;
    mindent = isNotNil(mindent) ? Math.min(mindent, indent) : indent;
  }

  if (isNotNil(mindent)) {
    result = lines
      .map((line) => (line[0] === " " ? line.slice(mindent as number) : line))
      .join("\n");
  }
  return result.trim().replace(/\\n/g, "\n");
}

/**
 * Template litral tag that strips indentation and new lines transforming multi-line strings into a single-line string.
 * @remarks It can also be used as a function.
 * @returns A single-line string.
 *
 * @example
 * ``` typescript
 * // As template literal tag
 * const text = oneline`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *                     Pellentesque porttitor ultrices risus maximus faucibus.
 *                     Nullam ac orci vitae eros tempor feugiat.
 * `;
 *
 * // As a function
 * const text = oneline(`
 *    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *    Pellentesque porttitor ultrices risus maximus faucibus.
 *    Nullam ac orci vitae eros tempor feugiat.
 * `);
 * ```
 */
export function oneline(
  strings: string | TemplateStringsArray,
  ...values: Array<unknown>
): string {
  return dedent(strings, ...values)
    .replace(/(?:\n\s*)+/g, " ")
    .trim();
}
