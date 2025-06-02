import { StrapiClient, StrapiClientImpl } from "@strapi-portfolio/http";
import { config } from "../env";

export function createStrapiClient(): StrapiClient {
  const baseUrl = config.STRAPI_API_URL || "";
  const bearerToken = config.STRAPI_API_TOKEN || "";
  return new StrapiClientImpl(baseUrl, bearerToken);
}
