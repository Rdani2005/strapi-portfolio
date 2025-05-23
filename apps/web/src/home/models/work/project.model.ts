import { InferOutput, object, pipe, string, url } from "valibot";

export const Project = object({
  image: pipe(string(), url()),
  category: string(),
  name: string(),
  description: string(),
  link: pipe(string(), url()),
  github: pipe(string(), url()),
});

export type Project = InferOutput<typeof Project>;

export function projectToKey(project: Project) {
  return `${project.category}-${project.name}-${project.link}-${project.image}`;
}
