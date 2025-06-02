import { Stack, TabsContent } from "@strapi-portfolio/ui";
import { type AboutMeInformation } from "@strapi-portfolio/web/home/models";
import { AboutInfoItem } from "../../../atoms";
import { useTranslations } from "next-intl";

type AboutInformationProps = {
  information: AboutMeInformation;
};

export function AboutInformation({ information }: AboutInformationProps) {
  const t = useTranslations("aboutMeSection");

  return (
    <TabsContent value="info">
      <div className="wide:text-left text-center">
        <h3 className="h3 mb-4">{information.title}</h3>
        <p className="subtitle wide:mx-0 mx-auto max-w-xl">
          {information.description}
        </p>
        <div className="wide:grid-cols-2 mb-12 grid gap-4">
          {information.aboutInfo.map((item) => (
            <AboutInfoItem item={item} key={item.text} />
          ))}
        </div>

        <Stack space="2">
          <div className="text-primary">{t("languageSkills")}</div>
          <div className="border-border border-b" />
          <div className="">{information.languageSkills}</div>
        </Stack>
      </div>
    </TabsContent>
  );
}
