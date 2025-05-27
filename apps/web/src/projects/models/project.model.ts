import { InferOutput, object, pipe, string, url } from "valibot";

export const ProjectCategory = string();
export type ProjectCategory = InferOutput<typeof ProjectCategory>;

export const Project = object({
  image: pipe(string(), url()),
  category: ProjectCategory,
  name: string(),
  description: string(),
  link: pipe(string(), url()),
  github: pipe(string(), url()),
});

export type Project = InferOutput<typeof Project>;

export function projectToKey(project: Project) {
  return `${project.category}-${project.name}-${project.link}-${project.image}`;
}

export const ALL_PROJECT_CATEGORIES: ProjectCategory = "All Projects";

export function isProjectCategory(
  project: Project,
  category: ProjectCategory,
): boolean {
  return project.category === category || category === ALL_PROJECT_CATEGORIES;
}
