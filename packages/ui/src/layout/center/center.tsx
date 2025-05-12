import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from "react";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { oneline } from "@strapi-portfolio/core";

const $Center = css({
  base: oneline`
    flex
    h-full
    w-full
    flex-col
    items-center
    justify-center
  `,
});

export type CenterProps = VariantProps<typeof $Center> &
  ComponentPropsWithoutRef<"div">;

/**
 * Centers content vertically and horizontally within itself.
 */
export const Center = forwardRef<ElementRef<"div">, CenterProps>(
  (props, ref) => {
    const [variants, centerProps] = extractVariantsFromProps($Center, props);
    return <div {...centerProps} ref={ref} className={$Center(variants)} />;
  },
);

Center.displayName = "Center";
