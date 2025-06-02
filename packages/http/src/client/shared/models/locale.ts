import { InferOutput, picklist } from "valibot";

export const LocaleOptions = picklist(
  ["en", "es-CR"],
  "Locale is Necesary for HTTP Requests",
);

export type LocaleOptions = InferOutput<typeof LocaleOptions>;
