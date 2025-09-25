// components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-primary text-background shadow-md hover:opacity-80 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
