"use client";
import { useEffect, useState } from "react";
import { $Inline, Hidden, Inline } from "@strapi-portfolio/ui";
import { ThemeToggler } from "../theme-toggle";
import { MobileNav, Nav } from "../nav";
import { Logo } from "../logo";
import { cn } from "@strapi-portfolio/ui/css";
import { usePathname } from "@strapi-portfolio/web/i18n/navigation";
import { LanguageSwitcher } from "../language-switcher";

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
      className={cn("sticky top-0 z-30  transition-all", {
        "dark:bg-accent bg-white  shadow-lg": header,
        "dark:bg-transparent": !header,
        "bg-[#fef9f5]": pathname === "/",
      })}
    >
      <LanguageSwitcher />
      <div
        className={cn("container mx-auto px-4 py-4", {
          "py-4": header,
          "py-6": !header,
        })}
      >
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
