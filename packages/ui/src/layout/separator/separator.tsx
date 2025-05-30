"use client";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { css, extractVariantsFromProps, VariantProps } from "../../css";
import { ComponentPropsWithoutRef } from "react";

const $Separator = css({
  base: "bg-accent-border shrink-0",
  variants: {
    vertical: {
      // Use self-stretch as most of the time the vertical option is used inside a flexbox.
      // If we add height 100%, the stretch property won't work.
      true: "w-[1px] self-stretch",
      false: "h-[1px] w-full",
    },
    leaguesSeparator: {
      true: "w-[2px] bg-gray-300",
    },
  },
  defaultVariants: {
    vertical: false,
  },
});

export type SeparatorProps = VariantProps<typeof $Separator> &
  Omit<
    ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    "orientation" | "children" | "asChild"
  >;

function Separator({ ...props }: SeparatorProps) {
  const [variants, separatorProps] = extractVariantsFromProps(
    $Separator,
    props,
  );
  const orientation = variants.vertical ? "vertical" : "horizontal";
  return (
    <SeparatorPrimitive.Root
      {...separatorProps}
      // We don't want to support the children and asChild props.
      // eslint-disable-next-line react/no-children-prop
      children={false}
      asChild={false}
      decorative={props.decorative ?? true}
      orientation={orientation}
      className={$Separator(variants)}
    />
  );
}
export { Separator };
