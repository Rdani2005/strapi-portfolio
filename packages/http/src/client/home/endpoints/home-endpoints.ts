import { Fetcher } from "../../fetcher";
import {
  AboutMeInfoResponse,
  GetAboutMeInfoRequest,
  GetHeroRequest,
  HeroResponse,
} from "../models";

export interface HomeEndpoints {
  getHero(input: GetHeroRequest): Promise<HeroResponse>;
  getAboutMeInfo(input: GetAboutMeInfoRequest): Promise<AboutMeInfoResponse>;
}

export class HomeEndpointsFetcher extends Fetcher implements HomeEndpoints {
  constructor(baseUrl: string, bearerToken: string) {
    super(baseUrl, bearerToken);
  }

  getHero(input: GetHeroRequest): Promise<HeroResponse> {
    return this.query({
      path: "/hero",
      response: HeroResponse,
      input,
    });
  }

  getAboutMeInfo(input: GetAboutMeInfoRequest): Promise<AboutMeInfoResponse> {
    return this.query({
      path: "/about-me",
      response: AboutMeInfoResponse,
      input,
    });
  }
}
