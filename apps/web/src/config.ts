import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "es-CR"] as const;
export type Locales = typeof locales;

export const pathNames: Pathnames<Locales> = {
  "/": "/",
  "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<Locales> = "always";
