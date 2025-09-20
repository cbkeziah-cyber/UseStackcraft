"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/use-cases", label: "Use‑Cases" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/disclosure", label: "Disclosure" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 sm:gap-2 text-sm">
      {links.map(({ href, label }) => {
        const active = isActive(pathname, href);
        const base =
          "rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
        const inactive = "text-foreground/90 hover:text-primary hover:bg-secondary/60";
        const activeCls = "text-primary bg-secondary ring-1 ring-primary/20";
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={[base, active ? activeCls : inactive].join(" ")}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};