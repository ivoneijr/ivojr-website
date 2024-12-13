"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About me",
    href: "/about",
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="h-20 w-full z-10 pt-4 flex items-center justify-center border-b-[1px] border-neutral-200/10 gap-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500",
            pathname === item.href && "bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-500",
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
