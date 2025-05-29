"use client";
import { cn } from "@strapi-portfolio/ui/css";
import { Link, usePathname } from "@strapi-portfolio/web/i18n/navigation";
import { NavigationLink } from "@strapi-portfolio/web/models";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type NavLinkProps = {
  link: NavigationLink;
  linkStyles?: string;
  underlineStyles?: string;
};

export function NavLink({
  link,
  linkStyles = "text-sm font-medium text-gray-900 dark:text-gray-100",
  underlineStyles = "border-b-2 border-blue-500",
}: NavLinkProps) {
  const path = usePathname();
  const isActive = path === link.path;
  const t = useTranslations("navBar");

  return (
    <Link
      href={link.path}
      key={link.path}
      className={cn("capitalize", linkStyles)}
    >
      {isActive && (
        <motion.span
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ type: "tween" }}
          layoutId="underline"
          className={underlineStyles}
        />
      )}
      {t(link.name)}
    </Link>
  );
}
