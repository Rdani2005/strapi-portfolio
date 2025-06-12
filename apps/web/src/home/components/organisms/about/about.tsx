import { Tabs } from "@strapi-portfolio/ui";
import { DevImg } from "../../atoms";
import {
  AboutInformation,
  AboutQualifications,
  AboutSkills,
  AboutTabs,
} from "../../molecules";
import { useTranslations } from "next-intl";
import {
  EducationQualification,
  ExperienceQualification,
  type AboutMeInformation,
} from "@strapi-portfolio/web/home/models";

type AboutProps = {
  devInformation: AboutMeInformation;
  devQualifications: {
    experience: ExperienceQualification;
    education: EducationQualification;
  };
};

export function About({ devInformation, devQualifications }: AboutProps) {
  const t = useTranslations("aboutMeSection");
  return (
    <section className="wide:py-24 wide:h-[860px] px-4 pb-12 ">
      <div className="container mx-auto">
        <h2 className="section-title wide:mb-16 mx-auto mb-8 text-center">
          {t("title")}
        </h2>
        <div className="wide:flex-row flex flex-col">
          <div className="wide:flex relative hidden flex-1">
            <DevImg
              containerStyles="bg-about_shape w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="info">
              <AboutTabs />
              <div className="wide:mt-8 mt-12 text-lg ">
                <AboutInformation information={devInformation} />
                <AboutQualifications {...devQualifications} />
                <AboutSkills />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
