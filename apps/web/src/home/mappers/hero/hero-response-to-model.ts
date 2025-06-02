import { HeroData, HeroResponse } from "@strapi-portfolio/http";
import { HeroItem } from "../../models";
import { config } from "@strapi-portfolio/web/app-config/env";

export function heroResponseToModel(response: HeroResponse): HeroItem {
  return heroDataResponseToModel(response.data);
}

function heroDataResponseToModel(response: HeroData): HeroItem {
  return {
    description: response.description,
    jobTitle: response.jobTitle,
    heroImage: `${config.STRAPI_IMAGE_URL}/${response.heroImage.url}`,
    startDate: new Date(response.startDayExperience),
    title: response.title,
    totalClients: response.totalClients,
    totalProjects: 15,
  };
}
