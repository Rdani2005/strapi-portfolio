"use server";
import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { heroResponseToModel } from "../../mappers";
import { HeroItem } from "../../models";
import { InferOutput, object, optional } from "valibot";
import { LocaleSchema } from "@strapi-portfolio/web/config";

const GetHeroInformationOptions = object({
  locale: optional(LocaleSchema, "en"),
});

export type GetHeroInformationOptions = InferOutput<
  typeof GetHeroInformationOptions
>;

export async function getHeroInformation(
  options: GetHeroInformationOptions,
): Promise<HeroItem> {
  const strapi = createStrapiClient();
  const response = await strapi.home.getHero({
    locale: options.locale,
    "populate[heroImage][fields][0]": "url",
  });
  return heroResponseToModel(response);
}
