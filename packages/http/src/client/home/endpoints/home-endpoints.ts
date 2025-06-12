import { Guard } from "@strapi-portfolio/core";
import {
  AboutMeEndpoints,
  AboutMeEndpointsFetcher,
} from "./about-me-endpoints";
import { HeroEndpoints, HeroEndpointsFetcher } from "./hero-endpoints";

export interface HomeEndpoints {
  hero: HeroEndpoints;
  aboutMe: AboutMeEndpoints;
}

export class HomeEndpointsFetcher implements HomeEndpoints {
  hero: HeroEndpoints;
  aboutMe: AboutMeEndpoints;

  constructor(baseUrl: string, bearerToken: string) {
    Guard.required(baseUrl, "baseUrl");
    Guard.required(bearerToken, "bearerToken");
    this.hero = new HeroEndpointsFetcher(baseUrl, bearerToken);
    this.aboutMe = new AboutMeEndpointsFetcher(baseUrl, bearerToken);
  }
}
