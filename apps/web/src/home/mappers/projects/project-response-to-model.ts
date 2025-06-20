import {
  type LatestProjectsResponse,
  type LatestProjectsResponseData,
  ProjectCategoryResponse,
} from "@strapi-portfolio/http";
import { type Project, type ProjectCategory } from "../../models";
import { config } from "@strapi-portfolio/web/app-config";

export function projectResponseToModel(
  response: LatestProjectsResponse,
): Project[] {
  return response.data.map(projectResponseDataToModel);
}

export function projectResponseDataToModel(
  response: LatestProjectsResponseData,
): Project {
  return {
    id: response.documentId,
    title: response.title,
    description: response.description,
    image: `${config.STRAPI_IMAGE_URL}${response.projectImage.url}`,
    url: response.demoUrl,
    githubUrl: response.githubUrl,
    categories: response.project_categories.map(projectCategoryResponseToModel),
  };
}

export function projectCategoryResponseToModel(
  response: ProjectCategoryResponse,
): ProjectCategory {
  return {
    id: response.documentId,
    name: response.name,
  };
}
