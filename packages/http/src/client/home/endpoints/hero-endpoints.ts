import { Fetcher } from "../../fetcher";
import { GetHeroRequest, HeroResponse } from "../models";

export interface HeroEndpoints {
  getHeroInformation(input: GetHeroRequest): Promise<HeroResponse>;
}

export class HeroEndpointsFetcher extends Fetcher implements HeroEndpoints {
  constructor(baseUrl: string, bearerToken: string) {
    super(baseUrl, bearerToken);
  }

  getHeroInformation(input: GetHeroRequest): Promise<HeroResponse> {
    return this.query({
      path: "/hero",
      response: HeroResponse,
      input,
    });
  }
}
