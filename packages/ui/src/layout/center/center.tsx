import { type ComponentPropsWithoutRef, type Ref } from "react";
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
  ComponentPropsWithoutRef<"div"> & {
    ref?: Ref<HTMLDivElement>;
  };

export function Center({ ref, ...props }: CenterProps) {
  const [variants, centerProps] = extractVariantsFromProps($Center, props);
  return <div {...centerProps} ref={ref} className={$Center(variants)} />;
}
