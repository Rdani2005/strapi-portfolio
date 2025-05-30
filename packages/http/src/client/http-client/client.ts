import { Guard } from "@strapi-portfolio/core";

export type StrapiClient = {
  hello: () => string;
};

export class StrapiClientImpl implements StrapiClient {
  constructor(baseUrl: string) {
    Guard.required(baseUrl, "baseUrl");
  }

  hello(): string {
    return "Hello from Strapi Client!";
  }
}
