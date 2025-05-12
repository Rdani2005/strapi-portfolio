import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from "react";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { Slot } from "../../components";

const $ContentBlock = css({
  base: "tablet:px-6 w-full px-3",
  variants: {
    width: {
      xsmall: "max-w-[400px]",
      small: "max-w-[660px]",
      medium: "max-w-[940px]",
      large: "max-w-[1280px]",
      full: "max-w-full",
    },
    align: {
      left: "mr-auto",
      center: "mx-auto",
      right: "ml-auto",
    },
  },
  defaultVariants: {
    width: "large",
    align: "center",
  },
});

type ContentBlockTagProps<
  T extends "div" | "article" | "aside" | "main" | "section" | "nav",
> = (T extends "div"
  ? {
      asChild?: false;
      as?: T;
    }
  : {
      asChild?: false;
      as: T;
    }) &
  ComponentPropsWithoutRef<T>;

type ContentBlockAsChildProps = {
  asChild: true;
  as?: never;
} & ComponentPropsWithoutRef<"div">;

export type ContentBlockProps = VariantProps<typeof $ContentBlock> &
  (
    | ContentBlockAsChildProps
    | ContentBlockTagProps<"div">
    | ContentBlockTagProps<"article">
    | ContentBlockTagProps<"aside">
    | ContentBlockTagProps<"main">
    | ContentBlockTagProps<"section">
    | ContentBlockTagProps<"nav">
  );

/**
 * Constrains the maximum width of page content providing standard spacing.
 */
export const ContentBlock = forwardRef<ElementRef<"div">, ContentBlockProps>(
  (props, ref) => {
    const [variants, { as: Tag, asChild, ...contentBlockProps }] =
      extractVariantsFromProps($ContentBlock, props);
    const Component = asChild ? Slot : (Tag ?? "div");
    return (
      <Component
        {...contentBlockProps}
        ref={ref}
        className={$ContentBlock(variants)}
      />
    );
  },
);

ContentBlock.displayName = "ContentBlock";
