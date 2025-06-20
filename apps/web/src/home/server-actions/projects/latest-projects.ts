"use server";

import { LocaleSchema } from "@strapi-portfolio/web/config";
import { InferOutput, object, optional } from "valibot";
import { LatestProject } from "../../models";
import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import { getProjects } from "./projects";
import { latestProjectResponseToModel } from "../../mappers";

const GetLatestProjectsInformationOptions = object({
  locale: optional(LocaleSchema, "en"),
});

export type GetLatestProjectsInformationOptions = InferOutput<
  typeof GetLatestProjectsInformationOptions
>;

export async function getLatestProjectsInformation(
  options: GetLatestProjectsInformationOptions,
): Promise<LatestProject> {
  const strapi = createStrapiClient();
  const projects = await getProjects({
    locale: options.locale,
  });
  const response = await strapi.home.projects.getLatestProjectsInformation({
    locale: options.locale,
  });
  return latestProjectResponseToModel(response, projects);
}
