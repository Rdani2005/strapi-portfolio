import { Fetcher } from "../../fetcher";
import {
  AboutMeInfoResponse,
  GetAboutMeInfoRequest,
  GetHeroRequest,
  HeroResponse,
} from "../models";
import {
  QualificationsInput,
  QualificationsResponse,
} from "../models/about-me/qualifications";

export interface HomeEndpoints {
  getHero(input: GetHeroRequest): Promise<HeroResponse>;
  getAboutMeInfo(input: GetAboutMeInfoRequest): Promise<AboutMeInfoResponse>;
  getQualifications(
    input: QualificationsInput,
  ): Promise<QualificationsResponse>;
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

  getQualifications(
    input: QualificationsInput,
  ): Promise<QualificationsResponse> {
    return this.query({
      path: "/qualification?populate[educations][fields][0]=name&populate[educations][fields][1]=career&populate[educations][fields][2]=startDate&populate[educations][fields][3]=endDate&populate[educations][fields][4]=currentlyStuding&populate[experiences][fields][0]=jobTitle&populate[experiences][fields][1]=company&populate[experiences][fields][2]=startDate&populate[experiences][fields][3]=endDate&populate[experiences][fields][4]=currentlyWorkingHere",
      response: QualificationsResponse,
      input,
    });
  }
}
