import { type Skill } from "@strapi-portfolio/web/home/models";
import { SkillItem } from "../../../atoms";
import { useTranslations } from "next-intl";

type SkillsInformationProps = {
  skills: Skill[];
};

export function SkillsInformation({ skills }: SkillsInformationProps) {
  const t = useTranslations("aboutMeSection");

  return (
    <div className="mb-16">
      <h4 className="text-xl font-bold ">{t("skills")}</h4>
      <div className="border-border mb-4 border-b"></div>
      <div>
        {skills.map((item) => (
          <SkillItem skill={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
