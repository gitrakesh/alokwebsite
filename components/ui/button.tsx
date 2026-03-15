import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300";

export const Button = ({ href, children, className }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={cn(base, "bg-neon text-white hover:bg-cyan hover:text-ink", className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(base, "bg-neon text-white hover:bg-cyan hover:text-ink", className)}>{children}</button>;
};

export const GhostButton = ({ href, children, className }: ButtonProps) => (
  <Link href={href ?? "#"} className={cn(base, "border border-white/20 text-text hover:border-cyan hover:text-cyan", className)}>
    {children}
  </Link>
);
