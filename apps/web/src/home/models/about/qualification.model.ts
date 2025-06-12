import {
  array,
  boolean,
  date,
  InferOutput,
  object,
  optional,
  string,
} from "valibot";

export const QualificationInformation = object({
  id: string(),
  name: string(),
  qualification: string(),
  years: string(),
});

export type QualificationInformation = InferOutput<
  typeof QualificationInformation
>;

export const Qualification = object({
  title: string(),
  data: array(QualificationInformation),
});

export type Qualification = InferOutput<typeof Qualification>;

export const Education = object({
  id: string(),
  schoolName: string(),
  degree: string(),
  startDate: date(),
  endDate: optional(date()),
  stillStudying: boolean(),
});

export type Education = InferOutput<typeof Education>;

export const Experience = object({
  id: string(),
  companyName: string(),
  position: string(),
  startDate: date(),
  endDate: optional(date()),
  stillWorking: boolean(),
});

export type Experience = InferOutput<typeof Experience>;

export const ExperienceQualification = object({
  title: string(),
  experiences: array(Experience),
});

export type ExperienceQualification = InferOutput<
  typeof ExperienceQualification
>;

export const EducationQualification = object({
  title: string(),
  educations: array(Education),
});

export type EducationQualification = InferOutput<typeof EducationQualification>;
