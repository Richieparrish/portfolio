"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", number: "01" },
  { href: "/gallery", label: "Gallery", number: "02" },
  {
    href: "/projects/towcester-health-profile",
    label: "Projects",
    number: "03",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md  ${
        scrolled ? "border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="px-6 sm:px-10 md:px-16">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group relative flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent transition-all duration-300 group-hover:w-12" />
            <span className="text-sm font-medium tracking-widest uppercase">
              Richard Adenigba
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-baseline gap-2"
              >
                <span
                  className={`text-[10px] text-accent font-medium opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${isActive(item.href) ? "opacity-100 translate-y-0" : ""}`}
                >
                  {item.number}
                </span>
                <span
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-500 ease-out ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="relative w-10 h-10 hover:bg-transparent"
              >
                <span className="flex flex-col gap-1.5">
                  <span
                    className={`w-6 h-[1.5px] bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`}
                  />
                  <span
                    className={`w-4 h-[1.5px] bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`w-6 h-[1.5px] bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
                  />
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[420px] p-0 border-l-0 bg-background"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-end px-8 py-6 border-b border-border">
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent p-0 justify-end"
                    >
                      <X className="size-6" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 flex flex-col justify-center px-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative py-6 border-b border-border/50 last:border-0"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-4">
                          <span className="text-xs text-accent font-medium">
                            {item.number}
                          </span>
                          <span
                            className={`text-3xl font-light tracking-tight transition-colors ${
                              isActive(item.href)
                                ? "text-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <ArrowUpRight
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive(item.href)
                              ? "text-accent"
                              : "text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                          }`}
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="px-8 py-8 border-t border-border">
                  <p className="text-xs text-muted-foreground tracking-wide">
                    © 2026 Richard Adenigba
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
