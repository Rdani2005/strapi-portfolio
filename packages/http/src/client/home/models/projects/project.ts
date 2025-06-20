import { array, InferOutput, number, object, string } from "valibot";
import { LocaleOptions } from "../../../shared";

export const ProjectCategoryResponse = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    name: string("name is required"),
  },
  "ProjectCategory is required",
);

export type ProjectCategoryResponse = InferOutput<
  typeof ProjectCategoryResponse
>;

export const ProjectImageResponse = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    url: string("url is required"),
  },
  "ProjectImage is required",
);

export type ProjectImageResponse = InferOutput<typeof ProjectImageResponse>;

export const LatestProjectsResponseData = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    title: string("title is required"),
    description: string("description is required"),
    locale: string("locale is required"),
    githubUrl: string("githubUrl is required"),
    demoUrl: string("demoUrl is required"),
    projectImage: ProjectImageResponse,
    project_categories: array(
      ProjectCategoryResponse,
      "project_categories is required",
    ),
  },
  "Datum is required",
);

export type LatestProjectsResponseData = InferOutput<
  typeof LatestProjectsResponseData
>;

export const LatestProjectsResponse = object({
  data: array(LatestProjectsResponseData, "data is required"),
});

export type LatestProjectsResponse = InferOutput<typeof LatestProjectsResponse>;

export const LatestProjectsRequest = object({
  locale: LocaleOptions,
});

export type LatestProjectsRequest = InferOutput<typeof LatestProjectsRequest>;
