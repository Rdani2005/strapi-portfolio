"use client";
import { cn } from "@strapi-portfolio/ui/css";
import { NavigationLink } from "@strapi-portfolio/web/models";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      {link.name}
    </Link>
  );
}
