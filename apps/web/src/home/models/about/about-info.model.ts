import { ReactNode } from "react";

export type AboutInfo = {
  icon: ReactNode;
  text: string;
};

export type AboutMeInformation = {
  title: string;
  description: string;
  aboutInfo: AboutInfo[];
  languageSkills: string;
};
