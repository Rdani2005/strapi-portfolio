import { Stack, TabsContent } from "@strapi-portfolio/ui";
import {
  CalendarIcon,
  GraduationCapIcon,
  HomeIcon,
  MailIcon,
  PhoneCallIcon,
  User2Icon,
} from "@strapi-portfolio/ui/icons";
import { type AboutInfo } from "@strapi-portfolio/web/home/models";
import { AboutInfoItem } from "../../../atoms";
import { useTranslations } from "next-intl";

const infoData: AboutInfo[] = [
  {
    icon: <User2Icon size={20} />,
    text: "Daniel Sequeira",
  },
  {
    icon: <PhoneCallIcon size={20} />,
    text: "+(506) 6080-1519",
  },
  {
    icon: <MailIcon size={20} />,
    text: "dricardosc15@hotmail.com",
  },
  {
    icon: <CalendarIcon size={20} />,
    text: "Born on 15th of May, 2005",
  },
  {
    icon: <GraduationCapIcon size={20} />,
    text: "computer engineer",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Moravia, San José, Costa Rica",
  },
];
export function AboutInformation() {
  const t = useTranslations("aboutMeSection");

  return (
    <TabsContent value="info">
      <div className="wide:text-left text-center">
        <h3 className="h3 mb-4">Unmatched Service Quality for Over 5 Years</h3>
        <p className="subtitle wide:mx-0 mx-auto max-w-xl">
          My expertise includes a wide range of technologies and programming
          languages, allowing me to deliver high-quality solutions tailored to
          meet the unique needs of my clients.
        </p>
        <div className="wide:grid-cols-2 mb-12 grid gap-4">
          {infoData.map((item) => (
            <AboutInfoItem item={item} key={item.text} />
          ))}
        </div>

        <Stack space="2">
          <div className="text-primary">{t("languageSkills")}</div>
          <div className="border-border border-b" />
          <div className="">English, Spanish, Portuguese</div>
        </Stack>
      </div>
    </TabsContent>
  );
}
