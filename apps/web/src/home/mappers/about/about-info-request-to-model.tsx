import { AboutMeInfoResponse } from "@strapi-portfolio/http";
import { AboutMeInformation } from "../../models";
import {
  CalendarIcon,
  GraduationCapIcon,
  HomeIcon,
  MailIcon,
  PhoneCallIcon,
  User2Icon,
} from "@strapi-portfolio/ui/icons";

export function getAboutInfoResponseToModel(
  response: AboutMeInfoResponse,
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
        text: `Born on ${new Date(response.data.birthDate).toLocaleDateString()}`,
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
