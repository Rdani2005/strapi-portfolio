import { LocalePrefix, Pathnames } from "next-intl/routing";
import { InferOutput, picklist } from "valibot";

export const LocaleSchema = picklist(["en", "es-CR"]);
export type LocaleSchema = InferOutput<typeof LocaleSchema>;

export const locales = ["en", "es-CR"] as const;
export type Locales = typeof locales;

export const pathNames: Pathnames<Locales> = {
  "/": "/",
  "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<Locales> = "always";
