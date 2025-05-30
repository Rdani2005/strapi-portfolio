"use client";
import { useLocale } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select";
import { useEffect, useRef, useState } from "react";
import { cn } from "@strapi-portfolio/ui/css";

const LanguageSwitcherStyles =
  "px-4 flex overflow-hidden transition-all duration-150 ease-in-out h-[32px]";

export function LanguageSwitcher() {
  const [show, setShow] = useState(true);
  const locale = useLocale();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY === 0;
      const isScrollingUp = prevScrollY.current > currentScrollY;

      setShow(atTop || isScrollingUp);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(LanguageSwitcherStyles, {
        "z-50 translate-y-0 opacity-100": show,
        "h-0 -translate-y-full opacity-0": !show,
      })}
    >
      <div className="flex-grow" />
      <LocaleSwitcherSelect defaultValue={locale} />
    </div>
  );
}
