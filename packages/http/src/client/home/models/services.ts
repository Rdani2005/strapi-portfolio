import { InferOutput, number, object, string } from "valibot";
import { LocaleOptions } from "../../shared";

export const DevServicesResponseData = object({
  id: number(),
  documentId: string(),
  webDesign: string(),
  webDevelopment: string(),
  appDevelopment: string(),
  locale: string(),
});

export type DevServicesResponseData = InferOutput<
  typeof DevServicesResponseData
>;

export const DevServicesResponse = object({
  data: DevServicesResponseData,
});

export type DevServicesResponse = InferOutput<typeof DevServicesResponse>;

export const DevServicesRequest = object({
  locale: LocaleOptions,
});

export type DevServicesRequest = InferOutput<typeof DevServicesRequest>;
