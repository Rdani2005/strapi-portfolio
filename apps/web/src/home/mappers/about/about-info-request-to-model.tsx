import { AboutMeInfoResponse, LocaleOptions } from "@strapi-portfolio/http";
import { AboutMeInformation } from "../../models";
import {
  CalendarIcon,
  GraduationCapIcon,
  HomeIcon,
  MailIcon,
  PhoneCallIcon,
  User2Icon,
} from "@strapi-portfolio/ui/icons";

const bornOnLanguageFormat = {
  en: "Born on",
  "es-CR": "Nacido el",
};

export function getAboutInfoResponseToModel(
  response: AboutMeInfoResponse,
  locale: LocaleOptions = "en",
): AboutMeInformation {
  return {
    title: response.data.title,
    description: response.data.description,
    languageSkills: response.data.languageSkills,
    aboutInfo: [
      {
        icon: <User2Icon size={20} />,
        text: response.data.devName,
      },
      {
        icon: <PhoneCallIcon size={20} />,
        text: response.data.phoneNumber,
      },
      {
        icon: <MailIcon size={20} />,
        text: response.data.devEmail,
      },
      {
        icon: <CalendarIcon size={20} />,
        text: `${bornOnLanguageFormat[locale] ?? bornOnLanguageFormat.en} ${response.data.birthDate.toLocaleDateString(
          "en-US",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          },
        )}`,
      },
      {
        icon: <GraduationCapIcon size={20} />,
        text: response.data.career,
      },
      {
        icon: <HomeIcon size={20} />,
        text: response.data.home,
      },
    ],
  };
}
