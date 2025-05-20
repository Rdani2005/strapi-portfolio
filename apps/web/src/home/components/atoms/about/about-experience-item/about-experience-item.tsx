import { Inline } from "@strapi-portfolio/ui";
import { type QualificationInformation } from "@strapi-portfolio/web/home/models";

type AboutExperienceItemProps = {
  experience: QualificationInformation;
};
export function AboutExperienceItem({ experience }: AboutExperienceItemProps) {
  return (
    <Inline space="8" className="group">
      <div className="bg-border relative ml-2 h-[84px] w-[1px]">
        <div className="bg-primary absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]" />
      </div>
      <div>
        <div className="mb-2 text-xl font-semibold leading-none">
          {experience.name}
        </div>
        <div className="text-lg leading-none">{experience.qualification}</div>
        <div className="text-base font-medium">{experience.years}</div>
      </div>
    </Inline>
  );
}
