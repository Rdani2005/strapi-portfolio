"use client";
import { $Inline, Hidden, Inline } from "@strapi-portfolio/ui";
import { ThemeToggler } from "../theme-toggle";
import { MobileNav, Nav } from "../nav";
import { Logo } from "../logo";
import { cn } from "@strapi-portfolio/ui/css";
import { usePathname } from "@strapi-portfolio/web/i18n/navigation";
import { LanguageSwitcher } from "../language-switcher";

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <header
        className={cn(
          "dark:bg-background fixed top-0 z-30 w-full bg-white transition-all",
          {
            "bg-[#fef9f5]": pathname === "/",
          },
        )}
      >
        <LanguageSwitcher />
        <div className={cn("container mx-auto px-4 py-6")}>
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
      <div className="py-6">
        <div className="h-[32px]"></div>
        <div className="min-h-0"></div>
      </div>
    </>
  );
}
