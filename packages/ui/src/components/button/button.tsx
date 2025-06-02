import { Slot } from "@radix-ui/react-slot";
import { cn, css, VariantProps } from "../../css";
import { Prettify } from "@strapi-portfolio/core";
import { ButtonHTMLAttributes, Ref } from "react";

const $Button = css({
  base: "focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
      outline:
        "border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-[54px] min-w-[166px] px-6 py-4",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariant = VariantProps<typeof $Button>;

export type ButtonProps = Prettify<
  ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariant & {
      asChild?: boolean;
      ref: Ref<HTMLButtonElement>;
    }
>;

function Button({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn($Button({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}

export { Button, $Button };
