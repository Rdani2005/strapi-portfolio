"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { $Inline, Hidden, Inline } from "@strapi-portfolio/ui";
import { cn } from "@strapi-portfolio/ui/css";
import { ThemeToggler } from "../theme-toggle";
import { MobileNav, Nav } from "../nav";
import { Logo } from "../logo";

export function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPosition = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", scrollYPosition);
    return () => window.removeEventListener("scroll", scrollYPosition);
  });

  return (
    <header
      className={cn("sticky top-0 z-30 px-4 transition-all", {
        "dark:bg-accent bg-white py-4 shadow-lg": header,
        "py-6 dark:bg-transparent": !header,
        "bg-[#fef9f5]": pathname === "/",
      })}
    >
      <div className="container mx-auto">
        <Inline alignX="between" alignY="center">
          <Logo />
          <Inline alignY="center" space="6">
            <Nav
              containerStyles={$Inline({
                space: "8",
                alignY: "center",
                className: "hidden laptop:flex",
              })}
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <Hidden above="laptop">
              <MobileNav />
            </Hidden>
          </Inline>
        </Inline>
      </div>
    </header>
  );
}
