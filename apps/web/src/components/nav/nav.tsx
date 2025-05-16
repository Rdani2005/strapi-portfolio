import React from "react";
import { NavLink } from "./nav-link";
import { NavigationLink } from "@strapi-portfolio/web/models";

type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
};

const links: NavigationLink[] = [
  { name: "Home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

export function Nav({
  containerStyles = "flex items-center space-x-4",
  linkStyles = "text-sm font-medium text-gray-900 dark:text-gray-100",
  underlineStyles = "border-b-2 border-blue-500",
}: NavProps) {
  return (
    <nav className={containerStyles}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          link={link}
          underlineStyles={underlineStyles}
          linkStyles={linkStyles}
        />
      ))}
    </nav>
  );
}
