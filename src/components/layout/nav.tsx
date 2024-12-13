"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About me",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="h-14 w-full z-10 flex items-center justify-center border-b border-neutral-200/10 gap-8">
      {navItems.map((item) => (
        <Button variant="ghost" key={item.name}>
          <Link
            href={item.href}
            className={cn(
              "text-lg bg-clip-text text-transparent bg-gradient-to-b transition-opacity duration-300",
              pathname !== item.href && "from-neutral-200 to-neutral-500 opacity-50 hover:opacity-80",
              pathname === item.href &&
                "from-neutral-200 to-white opacity-100 border-b border-b-neutral-200 border-b-spacing-7",
            )}
          >
            {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};
