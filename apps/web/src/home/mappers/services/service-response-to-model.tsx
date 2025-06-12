import { DevServicesResponse } from "@strapi-portfolio/http";
import {
  GanttChartSquareIcon,
  BlocksIcon,
  GemIcon,
} from "@strapi-portfolio/ui/icons";
import { Service } from "../../models";

export function serviceResponseToModel(
  response: DevServicesResponse,
): Service[] {
  return [
    {
      icon: <GanttChartSquareIcon size={72} strokeWidth={0.8} />,
      title: "webDesign",
      description: response.data.webDesign,
    },
    {
      icon: <BlocksIcon size={72} strokeWidth={0.8} />,
      title: "webDevelopment",
      description: response.data.webDevelopment,
    },
    {
      icon: <GemIcon size={72} strokeWidth={0.8} />,
      title: "appDevelopment",
      description: response.data.webDevelopment,
    },
  ];
}
