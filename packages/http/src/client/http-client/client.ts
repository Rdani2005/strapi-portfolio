import { Guard } from "@strapi-portfolio/core";
import { HomeEndpoints, HomeEndpointsFetcher } from "../home";

export type StrapiClient = {
  home: HomeEndpoints;
  hello: () => string;
};

export class StrapiClientImpl implements StrapiClient {
  home: HomeEndpoints;

  constructor(baseUrl: string, bearerToken: string) {
    Guard.required(baseUrl, "baseUrl");
    Guard.required(bearerToken, "AuthorizationToken");
    this.home = new HomeEndpointsFetcher(baseUrl, bearerToken);
  }

  hello(): string {
    return "Hello from Strapi Client!";
  }
}
