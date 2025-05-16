"use client";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "@strapi-portfolio/ui/icons";
import { SocialIcon } from "@strapi-portfolio/web/models";
import Link from "next/link";

const icons: SocialIcon[] = [
  {
    path: "https://www.youtube.com/",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/rdani2005/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Rdani2005",
    name: <RiGithubFill />,
  },
];

type SocialsProps = {
  containerStyles: string;
  iconsStyles: string;
};

export function Socials({ containerStyles, iconsStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {icons.map((icon) => (
        <Link className={iconsStyles} href={icon.path} key={icon.path}>
          {icon.name}
        </Link>
      ))}
    </div>
  );
}
