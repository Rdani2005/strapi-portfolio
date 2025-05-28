import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { space } from "../variants";

export const $Grid = css({
  base: "grid w-full",
  variants: {
    columns: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
    },
    tablet: {
      "1": "tablet:grid-cols-1",
      "2": "tablet:grid-cols-2",
      "3": "tablet:grid-cols-3",
      "4": "tablet:grid-cols-4",
    },
    laptop: {
      "1": "laptop:grid-cols-1",
      "2": "laptop:grid-cols-2",
      "3": "laptop:grid-cols-3",
      "4": "laptop:grid-cols-4",
    },
    desktop: {
      "1": "desktop:grid-cols-1",
      "2": "desktop:grid-cols-2",
      "3": "desktop:grid-cols-3",
      "4": "desktop:grid-cols-4",
    },
    wide: {
      "1": "wide:grid-cols-1",
      "2": "wide:grid-cols-2",
      "3": "wide:grid-cols-3",
      "4": "wide:grid-cols-4",
    },
    space,
  },
});

export type GridProps = VariantProps<typeof $Grid> &
  ComponentPropsWithoutRef<"div">;

/**
 * Centers content vertically and horizontally within itself.
 */
export const Grid = forwardRef<ElementRef<"div">, GridProps>((props, ref) => {
  const [variants, gridProps] = extractVariantsFromProps($Grid, props);
  const className = gridProps.className;
  return (
    <div
      {...gridProps}
      ref={ref}
      className={$Grid({
        ...variants,
        className,
      })}
    />
  );
});

Grid.displayName = "Grid";
