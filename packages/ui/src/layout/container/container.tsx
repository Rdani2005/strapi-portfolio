import { ComponentPropsWithoutRef, forwardRef, type ElementRef } from "react";
import { oneline } from "@strapi-portfolio/core";
import { css, extractVariantsFromProps, VariantProps } from "../../css";

const $Container = css({
  base: oneline`
    container
    mx-auto
  `,
});

export type ContainerProps = VariantProps<typeof $Container> &
  ComponentPropsWithoutRef<"div">;

export const Container = forwardRef<ElementRef<"div">, ContainerProps>(
  (props, ref) => {
    const [variants, containerProps] = extractVariantsFromProps(
      $Container,
      props,
    );
    return (
      <div {...containerProps} ref={ref} className={$Container(variants)} />
    );
  },
);

Container.displayName = "Container";
