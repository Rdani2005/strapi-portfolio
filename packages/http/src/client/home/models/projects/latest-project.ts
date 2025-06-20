import { InferOutput, number, object, string } from "valibot";
import { LocaleOptions } from "../../../shared";

export const LatestProjectsInformationResponseData = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    title: string("title is required"),
    description: string("description is required"),
  },
  "LatestProjectsResponseData is required",
);

export type LatestProjectsInformationResponseData = InferOutput<
  typeof LatestProjectsInformationResponseData
>;

export const LatestProjectsInformationResponse = object(
  {
    data: LatestProjectsInformationResponseData,
  },
  "LatestProjectsInformationResponse is required",
);

export type LatestProjectsInformationResponse = InferOutput<
  typeof LatestProjectsInformationResponse
>;

export const LatestProjectInformationRequest = object(
  {
    locale: LocaleOptions,
  },
  "LatestProjectInformationRequest is required",
);

export type LatestProjectInformationRequest = InferOutput<
  typeof LatestProjectInformationRequest
>;
