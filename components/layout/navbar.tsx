"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-wide text-white">EchoFrame Studios</Link>
        <button aria-label="Toggle navigation" className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          <Menu className="text-white" />
        </button>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.slice(0, 8).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-cyan">
              {item.label}
            </Link>
          ))}
          <Button href="/book">Start Project</Button>
        </nav>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 md:hidden">
          {navLinks.map((item) => (
            <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="text-sm text-white/80">
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
};
