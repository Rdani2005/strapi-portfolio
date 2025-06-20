import { type LatestProjectsInformationResponse } from "@strapi-portfolio/http";
import { type LatestProject, type Project } from "../../models";

export function latestProjectResponseToModel(
  response: LatestProjectsInformationResponse,
  projects: Project[],
): LatestProject {
  return {
    id: response.data.documentId,
    title: response.data.title,
    description: response.data.description,
    projects,
  };
}
