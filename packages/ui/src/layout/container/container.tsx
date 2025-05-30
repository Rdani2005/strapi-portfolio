import { ComponentPropsWithoutRef, type Ref } from "react";
import { oneline } from "@strapi-portfolio/core";
import { css, extractVariantsFromProps, VariantProps } from "../../css";

const $Container = css({
  base: oneline`
    container
    mx-auto
  `,
});

export type ContainerProps = VariantProps<typeof $Container> &
  ComponentPropsWithoutRef<"div"> & {
    ref?: Ref<HTMLDivElement>;
  };

export function Container({ ref, ...props }: ContainerProps) {
  const [variants, containerProps] = extractVariantsFromProps(
    $Container,
    props,
  );
  return <div {...containerProps} ref={ref} className={$Container(variants)} />;
}
