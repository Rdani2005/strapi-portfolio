import { array, InferOutput, object, pipe, string, url } from "valibot";

export const Tool = object(
  {
    id: string("Tool ID is required"),
    name: string("Tool name is required"),
    imgPath: pipe(
      string("imgPath is required"),
      url("imgPath must be a valid URL"),
    ),
  },
  "Tool is required",
);

export type Tool = InferOutput<typeof Tool>;

export const Skill = object(
  {
    id: string("skill ID is required"),
    name: string("Skill name is required"),
  },
  "Skill is required",
);

export type Skill = InferOutput<typeof Skill>;

export const SkillsAndTools = object({
  id: string("ID is required"),
  title: string("Title is required"),
  tools: array(Tool, "Tools must be an array of Tool objects"),
  skills: array(Skill, "Skills must be an array of Skill objects"),
});

export type SkillsAndTools = InferOutput<typeof SkillsAndTools>;
