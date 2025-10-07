"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Layers, Settings, Users, LayoutGrid } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Layers className="h-6 w-6" />
            <span className="font-bold">Visual Asset Creator</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/campaigns"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/campaigns")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Campaigns
            </Link>
            <Link
              href="/specs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/specs")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Specs
            </Link>
            <Link
              href="/templates"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/templates")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Templates
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users className="h-5 w-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
