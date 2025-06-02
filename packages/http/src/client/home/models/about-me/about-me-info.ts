import {
  object,
  number,
  string,
  isoDate,
  pipe,
  InferOutput,
  transform,
  optional,
} from "valibot";
import { LocaleOptions } from "../../../shared";

export const AboutMeInfoData = object({
  id: number("id is required"),
  documentId: string("documentId is required"),
  title: string("title is required"),
  description: string("description is required"),
  devName: string("devName is required"),
  devEmail: string("devEmail is required"),
  career: string("career is required"),
  phoneNumber: string("phoneNumber is required"),
  birthDate: pipe(
    string("birthDate is required"),
    isoDate("birthDate must be a date"),
    transform((date) => new Date(date)),
  ),
  home: string("home is required"),
  locale: string("locale is required"),
  languageSkills: string("languageSkills is required"),
});

export type AboutMeInfoData = InferOutput<typeof AboutMeInfoData>;

export const AboutMeInfoResponse = object({
  data: AboutMeInfoData,
});

export type AboutMeInfoResponse = InferOutput<typeof AboutMeInfoResponse>;

export const GetAboutMeInfoRequest = object({
  locale: optional(LocaleOptions, "en"),
});

export type GetAboutMeInfoRequest = InferOutput<typeof GetAboutMeInfoRequest>;
