import {
  type SkillResponse,
  type ToolsResponse,
  type GetSkillsAndToolsResponse,
} from "@strapi-portfolio/http";
import { Tool, type Skill, type SkillsAndTools } from "../../models";
import { config } from "@strapi-portfolio/web/app-config";

export function skillsAndToolsResponseToModel(
  response: GetSkillsAndToolsResponse,
): SkillsAndTools {
  return {
    id: response.data.documentId,
    title: response.data.title,
    tools: response.data.tools.map(toolsResponseToModel),
    skills: response.data.skills.map(skillsResponseToModel),
  };
}

function skillsResponseToModel(response: SkillResponse): Skill {
  return {
    id: response.documentId,
    name: response.name,
  };
}

function toolsResponseToModel(response: ToolsResponse): Tool {
  return {
    id: response.documentId,
    name: response.name,
    imgPath: `${config.STRAPI_IMAGE_URL}${response.image.url}`,
  };
}
