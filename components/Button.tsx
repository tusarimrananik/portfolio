import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // clsx + tailwind-merge helper
import { Slot } from "@radix-ui/react-slot";
import { ElementType, ReactNode } from "react";

// CVA configuration
const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:opacity-90",
        secondary: "bg-secondary text-background hover:opacity-90",
        accent: "bg-accent text-background hover:opacity-90",
        muted: "bg-muted text-foreground hover:opacity-90",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        outline:
          "border border-foreground text-foreground bg-transparent hover:bg-muted",
      },
      size: {
        sm: "px-3 py-1.5 text-sm rounded-sm",
        md: "px-4 py-2 text-base rounded-md",
        lg: "px-5 py-3 text-lg rounded-lg",
        full: "px-6 py-3 text-lg rounded-full",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shadow: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // <-- add asChild
  children: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  shadow,
  asChild,
  ...props
}: ButtonProps) {
  const Comp: ElementType = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, shadow }), className)} {...props} />
  );
}
