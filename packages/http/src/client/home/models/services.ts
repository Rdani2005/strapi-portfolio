import { InferOutput, number, object, string } from "valibot";
import { LocaleOptions } from "../../shared";

export const DevServicesResponseData = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    webDesign: string("webDesign is required"),
    webDevelopment: string("webDevelopment is required"),
    appDevelopment: string("appDevelopment is required"),
    locale: string("locale is required"),
  },
  "DevServicesResponseData is required",
);

export type DevServicesResponseData = InferOutput<
  typeof DevServicesResponseData
>;

export const DevServicesResponse = object(
  {
    data: DevServicesResponseData,
  },
  "DevServicesResponse is required",
);

export type DevServicesResponse = InferOutput<typeof DevServicesResponse>;

export const DevServicesRequest = object(
  {
    locale: LocaleOptions,
  },
  "DevServicesRequest is required",
);

export type DevServicesRequest = InferOutput<typeof DevServicesRequest>;
