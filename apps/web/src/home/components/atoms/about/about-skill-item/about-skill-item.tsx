import { type Skill } from "@strapi-portfolio/web/home/models";

export function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="wide:text-left wide:mx-0 mx-auto w-2/4 text-center">
      <div className="font-medium">{skill.name}</div>
    </div>
  );
}
