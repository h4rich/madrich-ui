import { cn } from "@/lib/utils";
import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MadrichButton({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "border-2 border-foreground",
        "bg-lime-400",
        "text-black",
        "transition-150",
        "px-4 py-2",
        "font-bold uppercase",
        "shadow-[4px_4px_0_0_var(--foreground)]",
        "active:translate-x-[2px]",
        "active:translate-y-[2px]",
        "active:shadow-none",
        className
      )}
      {...props}
    />
  );
}
