import Image from "next/image";
import { type Tool } from "@strapi-portfolio/web/home/models";

type SkillItemProps = {
  tool: Tool;
};

export function ToolItem({ tool }: SkillItemProps) {
  return <Image src={tool.imgPath} width={48} height={48} alt={tool.name} />;
}
