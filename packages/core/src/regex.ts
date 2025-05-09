/**
 * Escapes any potential regex syntax characters in the provided expression.
 * @param expression value to escape
 * @returns a new escaped string that can be safely used as pattern for a {@link RegExp}.
 */
export function escapeRegExp(expression: string): string {
  if (typeof expression !== "string") return expression;
  return expression.replace(/[$()*+.?[\\\]^{|}]/g, String.raw`\$&`);
}
