import { Stack } from "@strapi-portfolio/ui";
import {
  toQualificationInformationKey,
  type Qualification,
} from "@strapi-portfolio/web/home/models";
import { AboutExperienceItem } from "../about-experience-item";

type AboutExperienceProps = {
  qualification?: Qualification;
};

export function AboutExperience({ qualification }: AboutExperienceProps) {
  if (!qualification) return null;
  return (
    <Stack space="8">
      {qualification.data.map((experience) => (
        <AboutExperienceItem
          experience={experience}
          key={toQualificationInformationKey(experience)}
        />
      ))}
    </Stack>
  );
}
