"use client";
import { Code, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSettings } from "@/hooks/use-settings";
import { ROUTES } from "@/lib/routes";
import { FadeIn } from "../ui/(custom)/fade-in";

export const FloatingAdmin = () => {
  const settings = useSettings();

  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <FadeIn direction="up">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="rounded-full size-14">
              <Code className="size-12" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-14">
            <DropdownMenuLabel>Developer Panel</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {Object.values(ROUTES).map((route) => (
                <DropdownMenuItem key={route}>
                  <Link className="flex items-center gap-2 w-full" href={route}>
                    <span>{route}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <div
                  className="flex items-center gap-2 w-full cursor-pointer"
                  onClick={() => settings.onOpen()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      settings.onOpen();
                    }
                  }}
                >
                  <Settings className="size-4" />
                  <span>Settings</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </FadeIn>
    </div>
  );
};
