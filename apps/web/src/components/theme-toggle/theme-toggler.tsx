"use client";

import { useTheme } from "next-themes";
import { Button } from "@strapi-portfolio/ui";
import { MoonIcon, SunIcon } from "@strapi-portfolio/ui/icons";

function getNextTheme(theme: string): string {
  return theme === "dark" ? "light" : "dark";
}

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(getNextTheme(theme ?? ""))}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
