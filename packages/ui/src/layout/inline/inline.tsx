import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  Children,
} from "react";
import { space, horizontalAlignX, horizontalAlignY } from "../variants";
import { Separator } from "../separator";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { $Hidden, extractHiddenPropsFromChild } from "../hidden";
import { isNil } from "@strapi-portfolio/core";

export const $Inline = css({
  base: "flex flex-row",
  variants: {
    space,
    alignY: horizontalAlignY,
    alignX: horizontalAlignX,
    wrap: {
      true: "flex-wrap",
    },
  },
});

export type InlineProps = VariantProps<typeof $Inline> &
  ComponentPropsWithoutRef<"div"> & { separators?: boolean };

/**
 * Group elements horizontally and apply evenly space between them. With the option `wrap`,
 * it can wrap onto multiple lines if necessary.
 */
export const Inline = forwardRef<ElementRef<"div">, InlineProps>(
  (props, ref) => {
    const [variants, { separators, children, className, ...inlineProps }] =
      extractVariantsFromProps($Inline, props);

    const items = Children.map(children, (child, index) => {
      if (isNil(child) || child === false) return child;

      const hidden = extractHiddenPropsFromChild(child);

      // Add min-width to avoid issues with flexbox and truncated text
      // see: https://css-tricks.com/flexbox-truncated-text/
      const className = hidden
        ? $Hidden({ ...hidden, className: "min-w-0" })
        : "min-w-0";

      const children = hidden ? hidden.children : child;

      return (
        <>
          {!!separators && index > 0 && <Separator vertical />}
          {hidden ? <div className={className}>{children}</div> : children}
        </>
      );
    });

    return (
      <div
        {...inlineProps}
        ref={ref}
        className={$Inline({ ...variants, className })}
      >
        {items}
      </div>
    );
  },
);
Inline.displayName = "Inline";
