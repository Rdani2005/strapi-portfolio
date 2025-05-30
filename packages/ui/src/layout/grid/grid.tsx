import { ComponentPropsWithoutRef, Ref } from "react";
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

type GridProps = VariantProps<typeof $Grid> &
  ComponentPropsWithoutRef<"div"> & {
    innerRef?: Ref<HTMLDivElement>;
  };

export function Grid({ innerRef, className, ...rest }: GridProps) {
  const [variants, gridProps] = extractVariantsFromProps($Grid, rest);
  return (
    <div
      {...gridProps}
      ref={innerRef}
      className={`${$Grid(variants)} ${className ?? ""}`}
    />
  );
}
