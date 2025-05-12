import {
  Children,
  forwardRef,
  cloneElement,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { horizontalAlignX, horizontalAlignY, space } from "../variants";
import { isNil } from "@strapi-portfolio/core";
import { Separator } from "../separator";
import { isHiddenComponent } from "../hidden/hidden";

const $Column = css({
  base: "min-w-0",
  variants: {
    width: {
      fluid: "w-full flex-1",
      content: "flex-[0_0_auto]",
      full: "flex-[0_0_100%]",
      "1/2": "flex-[0_0_50%]",
      "1/3": "flex-[0_0_33.33%]",
      "2/3": "flex-[0_0_66.66%]",
      "1/4": "flex-[0_0_25%]",
      "2/4": "flex-[0_0_50%]",
      "3/4": "flex-[0_0_75%]",
      "1/5": "flex-[0_0_20%]",
      "2/5": "flex-[0_0_40%]",
      "3/5": "flex-[0_0_60%]",
      "4/5": "flex-[0_0_80%]",
      "1/6": "flex-[0_0_16.66%]",
      "2/6": "flex-[0_0_33.33%]",
      "3/6": "flex-[0_0_50%]",
      "4/6": "flex-[0_0_66.66%]",
      "5/6": "flex-[0_0_83.33%]",
    },
  },
  defaultVariants: {
    width: "fluid",
  },
});

export type ColumnProps = VariantProps<typeof $Column> &
  ComponentPropsWithoutRef<"div">;

export const Column = forwardRef<ElementRef<"div">, ColumnProps>(
  (props, ref) => {
    const [variants, { className, ...columnProps }] = extractVariantsFromProps(
      $Column,
      props,
    );

    return (
      <div
        {...columnProps}
        ref={ref}
        className={$Column({ ...variants, className })}
      />
    );
  },
);
Column.displayName = "Column";

const $Columns = css({
  base: "flex w-full flex-row",
  variants: {
    space,
    alignY: horizontalAlignY,
    alignX: horizontalAlignX,
  },
});

export type ColumnsProps = VariantProps<typeof $Columns> &
  ComponentPropsWithoutRef<"div"> & { separators?: boolean };

/**
 * Group elements horizontally and apply evenly space between them. Similar to the `Inline` component,
 * but `Columns` provides more control over the columns width via the `width` prop of the `Column` component.
 */
export const Columns = forwardRef<ElementRef<"div">, ColumnsProps>(
  (props, ref) => {
    const [variants, { separators, children, className, ...columnsProps }] =
      extractVariantsFromProps($Columns, props);

    const items = Children.map(children, (child, index) => {
      if (isNil(child) || child === false) return child;

      const children =
        isHiddenComponent(child) && !child.props.asChild
          ? cloneElement(child, { asChild: true })
          : child;

      return (
        <>
          {!!separators && index > 0 && <Separator vertical />}
          {children}
        </>
      );
    });

    return (
      <div
        {...columnsProps}
        ref={ref}
        className={$Columns({ ...variants, className })}
      >
        {items}
      </div>
    );
  },
);
Columns.displayName = "Columns";
