import { array, InferOutput, number, object, optional, string } from "valibot";
import { LocaleOptions } from "../../../shared";

export const SkillResponse = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    name: string("name is required"),
  },
  "SkillResponse is required",
);

export type SkillResponse = InferOutput<typeof SkillResponse>;

export const ToolsImageResponse = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    name: string("name is required"),
    width: number("width is required"),
    height: number("height is required"),
    hash: string("hash is required"),
    ext: string("ext is required"),
    mime: string("mime is required"),
    size: number("size is required"),
    url: string("url is required"),
    provider: string("provider is required"),
  },
  "ToolsImageResponse is required",
);

export type ToolsImageResponse = InferOutput<typeof ToolsImageResponse>;

export const ToolsResponse = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    name: string("name is required"),
    image: ToolsImageResponse,
  },
  "ToolsResponse is required",
);

export type ToolsResponse = InferOutput<typeof ToolsResponse>;

export const GetSkillsAndToolsResponseData = object(
  {
    id: number("id is required"),
    documentId: string("documentId is required"),
    title: string("title is required"),
    skills: array(SkillResponse, "skills are required"),
    tools: array(ToolsResponse, "tools are required"),
  },
  "GetSkillsAndToolsResponseData is required",
);

export type GetSkillsAndToolsResponseData = InferOutput<
  typeof GetSkillsAndToolsResponseData
>;

export const GetSkillsAndToolsResponse = object(
  {
    data: GetSkillsAndToolsResponseData,
  },
  "GetSkillsAndToolsResponse is required",
);

export type GetSkillsAndToolsResponse = InferOutput<
  typeof GetSkillsAndToolsResponse
>;

export const GetSkillsAndToolsRequest = object(
  {
    locale: optional(LocaleOptions, "en"),
  },
  "GetSkillsAndToolsRequest is required",
);

export type GetSkillsAndToolsRequest = InferOutput<
  typeof GetSkillsAndToolsRequest
>;
