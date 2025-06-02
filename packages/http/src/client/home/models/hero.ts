import { InferOutput, isoDate, number, object, pipe, string } from "valibot";
import { LocaleOptions } from "../../shared";

export const HeroImage = object({
  id: number("id must be a number"),
  documentId: string("documentId must be a string"),
  url: string("url must be a string"),
});

export const HeroData = object({
  id: number("id must be a number"),
  documentId: string("documentId must be a string"),
  title: string("title must be a string"),
  description: string("description must be a string"),
  jobTitle: string("jobTitle must be a string"),
  startDayExperience: pipe(
    string("startDayExperience is required"),
    isoDate("startDayExperience must be a date"),
  ),
  totalClients: number("totalClients must be a number"),
  locale: string("locale must be a string"),
  heroImage: HeroImage,
});

export type HeroData = InferOutput<typeof HeroData>;

export const HeroResponse = object({
  data: HeroData,
});

export type HeroResponse = InferOutput<typeof HeroResponse>;

export const GetHeroRequest = object({
  locale: LocaleOptions,
  "populate[heroImage][fields][0]": string("heroImage fields must be a string"),
});

export type GetHeroRequest = InferOutput<typeof GetHeroRequest>;
