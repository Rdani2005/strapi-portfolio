import * as React from "react";
import { cn } from "../../css";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[180px] w-full rounded-[30px] border bg-transparent px-8 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
