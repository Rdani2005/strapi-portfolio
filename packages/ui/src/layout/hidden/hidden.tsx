import {
  type PropsWithChildren,
  type ReactNode,
  type ReactElement,
} from "react";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { Breakpoint } from "../../system";
import { Slot } from "../../components";

export const $Hidden = css({
  variants: {
    above: {
      tablet: "tablet:hidden",
      laptop: "laptop:hidden",
      desktop: "desktop:hidden",
      wide: "wide:hidden",
    } satisfies Record<Breakpoint, string>,
    belowFlex: {
      tablet: "tablet:flex hidden",
      laptop: "laptop:flex hidden",
      desktop: "desktop:flex hidden",
      wide: "wide:flex hidden",
    } satisfies Record<Breakpoint, string>,
    below: {
      tablet: "tablet:block hidden",
      laptop: "laptop:block hidden",
      desktop: "desktop:block hidden",
      wide: "wide:block hidden",
    } satisfies Record<Breakpoint, string>,
  },
});

type HiddenVariants = VariantProps<typeof $Hidden>;

export type HiddenProps = PropsWithChildren & { asChild?: boolean } & (
    | { above: HiddenVariants["above"]; below?: never; belowFlex?: never }
    | { below: HiddenVariants["below"]; above?: never; belowFlex?: never }
    | { belowFlex: HiddenVariants["belowFlex"]; above?: never; below?: never }
  );

/**
 * Hides content responsively using the "above" or "below" props.
 */
export function Hidden(props: HiddenProps) {
  const [variants, { asChild, ...hiddenProps }] = extractVariantsFromProps(
    $Hidden,
    props,
  );

  const Component = asChild ? Slot : "div";
  return <Component {...hiddenProps} className={$Hidden(variants)} />;
}

export function isHiddenComponent(
  child: ReactNode,
): child is ReactElement<HiddenProps> {
  return (
    !!child &&
    typeof child === "object" &&
    "type" in child &&
    child.type === Hidden
  );
}

export function extractHiddenPropsFromChild(child: ReactNode) {
  return isHiddenComponent(child) ? child.props : undefined;
}
