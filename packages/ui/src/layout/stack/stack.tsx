import {
  forwardRef,
  Children,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import { space, verticalAlignX } from "../variants";
import { $Hidden, extractHiddenPropsFromChild } from "../hidden";
import { Separator } from "../separator";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { isNil } from "@strapi-portfolio/core";

export const $Stack = css({
  base: "flex flex-col",
  variants: {
    space,
    align: verticalAlignX,
  },
});

export type StackProps = VariantProps<typeof $Stack> &
  ComponentPropsWithoutRef<"div"> & { separators?: boolean };

/**
 * Group elements vertically and apply evenly space between them.
 */
export const Stack = forwardRef<ElementRef<"div">, StackProps>((props, ref) => {
  const [variants, { separators, children, className, ...stackProps }] =
    extractVariantsFromProps($Stack, props);

  // When the stack does not have an alignment, it would use the default value for 'align-items' of flexbox that is `stretch`.
  // This causes an issue with elements that are inline or inline-block, where they would take all the space
  // in contrast of how it works when the parent is has display block instead of flex.
  // To make the Stack component works consistently we wrap the children in a div, that has display block as default
  // and it will take the stretching produced by the display flex, making it work as if the Stack had display block.
  //
  // We could change the Stack to be based on display block instead of flex, but the gap behavior is better
  // than using margin with the space-y tailwind utility.
  const items = Children.map(children, (child, index) => {
    if (isNil(child) || child === false) return child;

    const hidden = extractHiddenPropsFromChild(child);

    // Add min-width to avoid issues with flexbox and truncated text
    // see: https://css-tricks.com/flexbox-truncated-text/
    const itemClassName = hidden
      ? $Hidden({ ...hidden, className: "min-w-0" })
      : "min-w-0";

    const children = hidden ? hidden.children : child;

    return (
      <>
        {!!separators && index > 0 && <Separator />}
        {hidden ? <div className={itemClassName}>{children}</div> : children}
      </>
    );
  });

  return (
    <div
      {...stackProps}
      ref={ref}
      className={$Stack({ ...variants, className })}
    >
      {items}
    </div>
  );
});

Stack.displayName = "Stack";
