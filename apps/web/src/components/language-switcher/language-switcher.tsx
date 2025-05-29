"use client";
import { useLocale } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select";
import { useEffect, useState } from "react";
import { cn } from "@strapi-portfolio/ui/css";

const LanguageSwitcherStyles =
  "px-4 flex overflow-hidden transition-all duration-150 ease-in-out h-[32px] bg-tertiary dark:bg-secondary/40";

export function LanguageSwitcher() {
  const [show, setShow] = useState(true);
  const locale = useLocale();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const scrollYPosition = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollYPosition);
    return () => window.removeEventListener("scroll", scrollYPosition);
  });

  return (
    <div
      className={cn(LanguageSwitcherStyles, {
        "translate-y-0 opacity-100": show,
        "-translate-y-full opacity-0": !show,
      })}
    >
      <div className="flex-grow" />
      <LocaleSwitcherSelect defaultValue={locale} />
    </div>
  );
}
