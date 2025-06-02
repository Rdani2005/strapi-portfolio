import { Guard } from "@strapi-portfolio/core";
import { HomeEndpoints, HomeEndpointsFetcher } from "../home";

/**
 * Defines the shape of the StrapiClient interface.
 */
export type StrapiClient = {
  /** Endpoint handler for the home-related API operations. */
  home: HomeEndpoints;

  /** Returns a static greeting message from the client. */
  hello: () => string;
};

/**
 * Implementation of the StrapiClient interface.
 *
 * This client provides access to various Strapi endpoints,
 * using the provided base URL and Bearer token for authenticated requests.
 */
export class StrapiClientImpl implements StrapiClient {
  home: HomeEndpoints;

  /**
   * Constructs a new instance of StrapiClientImpl.
   *
   * @param baseUrl - The base URL of the Strapi backend.
   * @param bearerToken - The Bearer token used for authorization.
   *
   * @throws Will throw an error if `baseUrl` or `bearerToken` is missing or invalid.
   */
  constructor(baseUrl: string, bearerToken: string) {
    Guard.required(baseUrl, "baseUrl");
    Guard.required(bearerToken, "AuthorizationToken");
    this.home = new HomeEndpointsFetcher(baseUrl, bearerToken);
  }

  hello(): string {
    return "Hello from Strapi Client!";
  }
}
