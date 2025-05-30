import { TabsList } from "@strapi-portfolio/ui";
import { AboutTrigger } from "../../../atoms";
import { useTranslations } from "next-intl";

export function AboutTabs() {
  const t = useTranslations("aboutMeSection");
  return (
    <TabsList className="desktop:grid-cols-3 desktop:max-w-[520px] wide:mx-0 desktop:border mx-auto grid w-full dark:border-none">
      <AboutTrigger value="info" label={t("personalInfo")} />
      <AboutTrigger value="qualification" label={t("qualifications")} />
      <AboutTrigger value="skills" label={t("skills")} />
    </TabsList>
  );
}
