"use server";

import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { LocaleSchema } from "@strapi-portfolio/web/config";
import { InferOutput, object, optional } from "valibot";
import { Service } from "../../models";
import { serviceResponseToModel } from "../../mappers";

const GetDevServicesOptions = object({
  locale: optional(LocaleSchema, "en"),
});

export type GetDevServicesOptions = InferOutput<typeof GetDevServicesOptions>;

export async function getDevServices(
  options: GetDevServicesOptions,
): Promise<Service[]> {
  const strapi = createStrapiClient();
  const response = await strapi.home.services.getServices({
    locale: options.locale,
  });
  return serviceResponseToModel(response);
}
