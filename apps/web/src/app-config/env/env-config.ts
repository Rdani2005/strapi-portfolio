import { string, minLength, url, pipe } from "valibot";
import { createConfigReader } from "./config-reader";

function requiredString(name: string) {
  return pipe(
    string(`${name} was not provided.`),
    minLength(1, `${name} cannot be empty`),
  );
}

function requiredUrl(name: string) {
  return pipe(
    string(`${name} was not provided.`),
    minLength(1, `${name} cannot be empty`),
    url(
      ({ received }) => `${name} must be a valid url, received "${received}"`,
    ),
  );
}

export const readConfig = createConfigReader({
  STRAPI_API_URL: requiredUrl("Strapi API URL"),
  STRAPI_IMAGE_URL: requiredUrl("Strapi Image URL"),
  STRAPI_API_TOKEN: requiredString("Strapi API Token"),
});

export type Config = ReturnType<typeof readConfig>;

export const config: Config = readConfig(process.env);
