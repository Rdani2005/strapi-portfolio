import { Grid, TabsContent } from "@strapi-portfolio/ui";
import { BriefcaseIcon, GraduationCapIcon } from "@strapi-portfolio/ui/icons";
import {
  type EducationQualification,
  type ExperienceQualification,
  type Qualification,
} from "@strapi-portfolio/web/home/models";
import { AboutQualificationItem } from "../../../atoms";
import {
  EducationQualificationModelToQualification,
  ExperienceQualificationModelToQualification,
} from "@strapi-portfolio/web/home/mappers";
import { useLocale, useTranslations } from "next-intl";

type AboutQualificationsProps = {
  experience: ExperienceQualification;
  education: EducationQualification;
};

export function AboutQualifications({
  education,
  experience,
}: AboutQualificationsProps) {
  const locale = useLocale();
  const experienceQualification: Qualification =
    ExperienceQualificationModelToQualification(experience, locale as any);
  const educationQualification: Qualification =
    EducationQualificationModelToQualification(education, locale as any);

  const t = useTranslations("aboutMeSection");

  return (
    <TabsContent value="qualification">
      <div className="">
        <h3 className="h3 wide:text-left mb-8 text-center">{t("journey")}</h3>
        <Grid className="mb-12" space="8" columns="1" desktop="2">
          <AboutQualificationItem
            icon={<BriefcaseIcon size={28} />}
            qualification={experienceQualification}
          />
          <AboutQualificationItem
            icon={<GraduationCapIcon size={28} />}
            qualification={educationQualification}
          />
        </Grid>
      </div>
    </TabsContent>
  );
}
