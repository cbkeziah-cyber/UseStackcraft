"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/comparisons", label: "Comparisons" },
  { href: "/products", label: "Products" },
  { href: "/use-cases", label: "Use‑Cases" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/resources", label: "Resources" },
  { href: "/downloads", label: "Downloads" },
  { href: "/about", label: "About" },
  { href: "/disclosure", label: "Disclosure" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const Nav: React.FC = () => {
  const pathname = usePathname();
  const primaryCount = 4; // keep these visible on small screens

  return (
    <nav
      className="flex items-center gap-1 sm:gap-2 text-sm overflow-x-auto whitespace-nowrap -mx-3 px-3 md:flex-wrap md:overflow-visible md:whitespace-normal"
      aria-label="Primary"
    >
      {links.slice(0, primaryCount).map(({ href, label }) => {
        const active = isActive(pathname, href);
        const base =
          "inline-flex items-center shrink-0 rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
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

      {/* More (mobile only) */}
      <div className="md:hidden inline-flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center shrink-0 rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground/90 hover:text-primary hover:bg-secondary/60"
              aria-label="More"
            >
              More
              <MoreHorizontal className="ml-1 h-4 w-4" aria-hidden="true" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-40">
            {links.slice(primaryCount).map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <DropdownMenuItem key={href} asChild>
                  <Link href={href} aria-current={active ? "page" : undefined}>
                    {label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Overflow (desktop/tablet) */}
      <div className="hidden md:contents">
        {links.slice(primaryCount).map(({ href, label }) => {
          const active = isActive(pathname, href);
          const base =
            "inline-flex items-center shrink-0 rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
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
      </div>
    </nav>
  );
};