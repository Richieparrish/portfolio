"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Sun, Monitor, MoonStar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <>
        <Skeleton className="h-10 w-10 sm:hidden" />
        <Skeleton className="hidden sm:inline-flex h-9 w-28 rounded-full" />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="sm:hidden text-foreground"
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4" />
            ) : theme === "system" ? (
              <Monitor className="h-4 w-4" />
            ) : (
              <MoonStar className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="h-4 w-4 mr-2" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Monitor className="h-4 w-4 mr-2" />
            System
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonStar className="h-4 w-4 mr-2" />
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden sm:inline-flex items-center gap-1 rounded-full bg-muted dark:bg-muted/75 p-0.5 border border-border/50">
        <Button
          onClick={() => setTheme("light")}
          variant="ghost"
          size="icon"
          className={`rounded-full h-8 w-8 transition-colors ${
            theme === "light"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          }`}
          aria-label="Light mode"
          aria-pressed={theme === "light"}
        >
          <Sun className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setTheme("system")}
          variant="ghost"
          size="icon"
          className={`rounded-full h-8 w-8 transition-colors ${
            theme === "system"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          }`}
          aria-label="System mode"
          aria-pressed={theme === "system"}
        >
          <Monitor className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setTheme("dark")}
          variant="ghost"
          size="icon"
          className={`rounded-full h-8 w-8 transition-colors ${
            theme === "dark"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          }`}
          aria-label="Dark mode"
          aria-pressed={theme === "dark"}
        >
          <MoonStar className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
