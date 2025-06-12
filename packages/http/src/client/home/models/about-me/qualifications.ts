import {
  array,
  boolean,
  InferOutput,
  nullable,
  number,
  object,
  optional,
  string,
} from "valibot";
import { formatDate, LocaleOptions } from "../../../shared";

export const EducationResponse = object({
  id: number("id is required"),
  documentId: string("documentId is required"),
  name: string("name is required"),
  career: string("career is required"),
  startDate: formatDate("startDate"),
  endDate: nullable(formatDate("endDate")),
  currentlyStuding: boolean("currentlyStuding is required"),
});

export type EducationResponse = InferOutput<typeof EducationResponse>;

export const ExperienceResponse = object({
  id: number("id is required"),
  documentId: string("documentId is required"),
  jobTitle: string("jobTitle is required"),
  company: string("company is required"),
  startDate: formatDate("startDate"),
  endDate: nullable(formatDate("endDate")),
  currentlyWorkingHere: boolean("currentlyWorkingHere is required"),
});

export type ExperienceResponse = InferOutput<typeof ExperienceResponse>;

export const QualificationDataResponse = object({
  id: number(),
  documentId: string(),
  locale: string(),
  title: string(),
  educations: array(EducationResponse),
  experiences: array(ExperienceResponse),
});

export type QualificationDataResponse = InferOutput<
  typeof QualificationDataResponse
>;

export const QualificationsResponse = object({
  data: QualificationDataResponse,
});
export type QualificationsResponse = InferOutput<typeof QualificationsResponse>;

export const QualificationsInput = object({
  locale: optional(LocaleOptions, "en"),
});
export type QualificationsInput = InferOutput<typeof QualificationsInput>;
