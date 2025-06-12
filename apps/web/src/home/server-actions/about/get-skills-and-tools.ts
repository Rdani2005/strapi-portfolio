"use server";

import { type LocaleSchema } from "@strapi-portfolio/web/config";
import { type SkillsAndTools } from "../../models";
import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { skillsAndToolsResponseToModel } from "../../mappers";

type GetSkillsAndToolsOptions = {
  locale?: LocaleSchema;
};

export async function getSkillsAndTools({
  locale = "en",
}: GetSkillsAndToolsOptions): Promise<SkillsAndTools> {
  const strapi = createStrapiClient();
  const response = await strapi.home.aboutMe.getSkillsAndTools({ locale });
  return skillsAndToolsResponseToModel(response);
}
