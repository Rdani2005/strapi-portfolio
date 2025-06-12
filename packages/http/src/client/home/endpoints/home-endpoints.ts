import { Guard } from "@strapi-portfolio/core";
import {
  AboutMeEndpoints,
  AboutMeEndpointsFetcher,
} from "./about-me-endpoints";
import { HeroEndpoints, HeroEndpointsFetcher } from "./hero-endpoints";
import {
  ServicesEndpoints,
  ServicesEndpointsFetcher,
} from "./services-endpoints";

export interface HomeEndpoints {
  readonly hero: HeroEndpoints;
  readonly aboutMe: AboutMeEndpoints;
  readonly services: ServicesEndpoints;
}

export class HomeEndpointsFetcher implements HomeEndpoints {
  readonly hero: HeroEndpoints;
  readonly aboutMe: AboutMeEndpoints;
  readonly services: ServicesEndpoints;

  constructor(baseUrl: string, bearerToken: string) {
    Guard.required(baseUrl, "baseUrl");
    Guard.required(bearerToken, "bearerToken");
    this.hero = new HeroEndpointsFetcher(baseUrl, bearerToken);
    this.aboutMe = new AboutMeEndpointsFetcher(baseUrl, bearerToken);
    this.services = new ServicesEndpointsFetcher(baseUrl, bearerToken);
  }
}
