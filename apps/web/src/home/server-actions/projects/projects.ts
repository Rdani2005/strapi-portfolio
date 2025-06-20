"use server";

import { LocaleSchema } from "@strapi-portfolio/web/config";
import { InferOutput, object, optional } from "valibot";
import { Project } from "../../models";
import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { projectResponseToModel } from "../../mappers";

const GetProjectsOptions = object({
  locale: optional(LocaleSchema, "en"),
});

export type GetProjectsOptions = InferOutput<typeof GetProjectsOptions>;

export async function getProjects(
  options: GetProjectsOptions,
): Promise<Project[]> {
  const strapi = createStrapiClient();
  const response = await strapi.home.projects.getProjects({
    locale: options.locale,
  });
  return projectResponseToModel(response);
}
