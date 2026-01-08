import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground",
  {
    variants: {
      variant: {
        default: "",
        primary: "border-transparent bg-primary text-primary-foreground",
        brand: "border-transparent bg-warning text-trivita-ink",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
