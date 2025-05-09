import { type TVVariants } from "tailwind-variants";
import { split } from "@strapi-portfolio/core";
/**
 * Extracts the variants from the props and returns a tuple with the extracted variants and the remaining props.
 *
 * @param $Css css component that contains the variants definition.
 * @param props props of a react component.
 * @returns a tuple where the left value is the extracted variants and the right value the remaining props.
 *
 * @remarks a css component is the return object from the `css` function of `@tokyo/ui/css`.
 *
 * @example
 * ```typescript
 * import { css, extractVariantsFromProps } from '@tokyo/ui/css';
 *
 * const $Button = css({
 *   ...
 * });
 *
 * function Button(props: ButtonProps) {
 *   const [variants, rest] = extractVariantsFromProps($Button, props);
 * }
 * ```
 */
export function extractVariantsFromProps<
  V extends { variants: TVVariants<any> },
  P extends Record<PropertyKey, unknown>,
>($Css: V, props: P) {
  return split(props, Object.keys($Css.variants) as Array<keyof V["variants"]>);
}
