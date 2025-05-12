import { HTMLAttributes } from "react";
import { Prettify } from "@strapi-portfolio/core";
import { cn, css, VariantProps } from "../../css";

const $Badge = css({
  base: "inline-flex items-center rounded-full px-2 py-1 text-sm font-medium",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent shadow",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariant = VariantProps<typeof $Badge>;

export type BadgeProps = Prettify<
  HTMLAttributes<HTMLDivElement> & BadgeVariant
>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn($Badge({ variant }), className)} {...props} />;
}

export { Badge, $Badge };
