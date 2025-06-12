import {
  type ExperienceResponse,
  type EducationResponse,
  LocaleOptions,
} from "@strapi-portfolio/http";
import {
  type Experience,
  type Education,
  type EducationQualification,
  type ExperienceQualification,
  type QualificationInformation,
  type Qualification,
} from "../../models";

export function EducationResponseToModel(
  response: EducationResponse,
): Education {
  return {
    id: response.documentId,
    schoolName: response.name,
    degree: response.career,
    startDate: response.startDate,
    endDate: response.endDate ?? undefined,
    stillStudying: response.currentlyStuding,
  };
}

export function ExperienceResponseToModel(
  response: ExperienceResponse,
): Experience {
  return {
    id: response.documentId,
    companyName: response.company,
    position: response.jobTitle,
    startDate: response.startDate,
    endDate: response.endDate ?? undefined,
    stillWorking: response.currentlyWorkingHere,
  };
}

export function EducationQualificationResponseToModel(
  response: EducationResponse[],
): EducationQualification {
  return {
    title: "Education",
    educations: response.map(EducationResponseToModel),
  };
}

export function ExperienceQualificationResponseToModel(
  response: ExperienceResponse[],
): ExperienceQualification {
  return {
    title: "Experience",
    experiences: response.map(ExperienceResponseToModel),
  };
}

const presentLanguageFormat = {
  en: "present",
  "es-CR": "presente",
};

function formatDate(date: Date, locale: LocaleOptions = "en") {
  return date.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });
}

export function EducationModelToQualification(
  education: Education,
  locale: LocaleOptions = "en",
): QualificationInformation {
  const startDate = formatDate(education.startDate, locale);
  const present = presentLanguageFormat[locale] ?? presentLanguageFormat.en;
  const endDate = education.stillStudying
    ? "now"
    : formatDate(education.endDate ?? new Date(), locale);

  return {
    id: education.id,
    name: education.schoolName,
    qualification: education.degree,
    years: `${startDate} - ${education.stillStudying ? present : endDate}`,
  };
}

export function ExperienceModelToQualification(
  experience: Experience,
  locale: LocaleOptions = "en",
): QualificationInformation {
  const startDate = formatDate(experience.startDate, locale);
  const present = presentLanguageFormat[locale] ?? presentLanguageFormat.en;
  const endDate = experience.stillWorking
    ? "now"
    : formatDate(experience.endDate ?? new Date(), locale);

  return {
    id: experience.id,
    name: experience.companyName,
    qualification: experience.position,
    years: `${startDate} - ${experience.stillWorking ? present : endDate}`,
  };
}

export function ExperienceQualificationModelToQualification(
  experienceQualification: ExperienceQualification,
  locale: LocaleOptions = "en",
): Qualification {
  return {
    title: experienceQualification.title,
    data: experienceQualification.experiences
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      .map((experience) => ExperienceModelToQualification(experience, locale)),
  };
}

export function EducationQualificationModelToQualification(
  educationQualification: EducationQualification,
  locale: LocaleOptions = "en",
): Qualification {
  return {
    title: educationQualification.title,
    data: educationQualification.educations
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      .map((education) => EducationModelToQualification(education, locale)),
  };
}
