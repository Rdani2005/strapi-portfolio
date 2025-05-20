import {
  array,
  InferOutput,
  object,
  optional,
  pipe,
  string,
  url,
} from "valibot";

export const Skill = object({
  name: string(),
  imgPath: optional(pipe(string(), url())),
});

export function toSkillKey(skill: Skill): string {
  return `${skill.name}-${skill.imgPath}`;
}

export type Skill = InferOutput<typeof Skill>;

export const Skills = object({
  title: string(),
  data: array(Skill),
});

export type Skills = InferOutput<typeof Skills>;
