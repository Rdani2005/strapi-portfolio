"use server";

import { createStrapiClient } from "@strapi-portfolio/web/app-config";
import {
  type EducationQualification,
  type ExperienceQualification,
} from "../../models";
import {
  EducationQualificationResponseToModel,
  ExperienceQualificationResponseToModel,
} from "../../mappers";
import { InferOutput, object, optional } from "valibot";
import { LocaleSchema } from "@strapi-portfolio/web/config";

const GetQualificationsOptions = object({
  locale: optional(LocaleSchema, "en"),
});

type GetQualificationsOptions = InferOutput<typeof GetQualificationsOptions>;

export async function getQualifications({
  locale = "en",
}: GetQualificationsOptions): Promise<{
  education: EducationQualification;
  experience: ExperienceQualification;
}> {
  const strapi = createStrapiClient();
  const response = await strapi.home.getQualifications({
    locale,
  });

  const education: EducationQualification =
    EducationQualificationResponseToModel(response.data.educations);

  const experience: ExperienceQualification =
    ExperienceQualificationResponseToModel(response.data.experiences);

  return {
    education,
    experience,
  };
}
