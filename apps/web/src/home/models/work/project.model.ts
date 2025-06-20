import { array, InferOutput, object, string } from "valibot";

export const ProjectCategory = object(
  {
    id: string("id is required"),
    name: string("name is required"),
  },
  "ProjectCategory is required",
);

export type ProjectCategory = InferOutput<typeof ProjectCategory>;

export const Project = object(
  {
    id: string("id is required"),
    title: string("title is required"),
    description: string("description is required"),
    image: string("image is required"),
    url: string("url is required"),
    githubUrl: string("githubUrl is required"),
    categories: array(ProjectCategory),
  },
  "Project is required",
);

export type Project = InferOutput<typeof Project>;

export const ProjectList = array(Project, "ProjectList is required");

export type ProjectList = InferOutput<typeof ProjectList>;

export const LatestProject = object(
  {
    id: string("id is required"),
    title: string("title is required"),
    description: string("description is required"),
    projects: ProjectList,
  },
  "LatestProject is required",
);

export type LatestProject = InferOutput<typeof LatestProject>;
