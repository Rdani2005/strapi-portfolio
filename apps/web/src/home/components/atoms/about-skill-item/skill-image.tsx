import Image from "next/image";
import { type Skill } from "@strapi-portfolio/web/home/models";

export function SkillImage({ skill }: { skill: Skill }) {
  return (
    <Image src={skill.imgPath ?? ""} width={48} height={48} alt={skill.name} />
  );
}
