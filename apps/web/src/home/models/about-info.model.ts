import { ReactNode } from "react";
import {
  array,
  InferOutput,
  object,
  optional,
  pipe,
  string,
  url,
} from "valibot";

export type AboutInfo = {
  icon: ReactNode;
  text: string;
};

export const QualificationInformation = object({
  name: string(),
  qualification: string(),
  years: string(),
});

export type QualificationInformation = InferOutput<
  typeof QualificationInformation
>;

export function toQualificationInformationKey(
  qualification: QualificationInformation,
): string {
  return `${qualification.name}-${qualification.qualification}-${qualification.years}`;
}

export const Quialification = object({
  title: string(),
  data: array(QualificationInformation),
});

export type Qualification = InferOutput<typeof Quialification>;

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

type WithTitle = { title: string };

export function filterByTitle<T extends WithTitle>(
  items: T[],
  title: string,
): T | undefined {
  return items.find((item) => item.title === title);
}
