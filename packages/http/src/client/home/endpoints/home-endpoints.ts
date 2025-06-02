import { Fetcher } from "../../fetcher";
import { GetHeroRequest, HeroResponse } from "../models";

export interface HomeEndpoints {
  getHero(input: GetHeroRequest): Promise<HeroResponse>;
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
}
