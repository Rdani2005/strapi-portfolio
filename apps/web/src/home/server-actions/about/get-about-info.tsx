"use server";

import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { getAboutInfoResponseToModel } from "../../mappers";
import { InferOutput, object, optional } from "valibot";
import { LocaleSchema } from "@strapi-portfolio/web/config";
import { AboutMeInformation } from "../../models";

const GetAboutInfoOptions = object({
  locale: optional(LocaleSchema, "en"),
});

export type GetAboutInfoOptions = InferOutput<typeof GetAboutInfoOptions>;

export async function getAboutInfo(
  options: GetAboutInfoOptions,
): Promise<AboutMeInformation> {
  const strapi = createStrapiClient();
  const response = await strapi.home.getAboutMeInfo({
    locale: options.locale,
  });
  return getAboutInfoResponseToModel(response, options.locale);
}
