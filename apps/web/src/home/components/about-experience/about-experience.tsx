import { Inline, Stack } from "@strapi-portfolio/ui";
import { Qualification, toQualificationInformationKey } from "../../models";

type AboutExperienceProps = {
  qualification?: Qualification;
};

export function AboutExperience({ qualification }: AboutExperienceProps) {
  if (!qualification) return null;
  return (
    <Stack space="8">
      {qualification.data.map(({ name, years, qualification }) => (
        <Inline
          space="8"
          className="group"
          key={toQualificationInformationKey({
            name,
            years,
            qualification,
          })}
        >
          <div className="bg-border relative ml-2 h-[84px] w-[1px]">
            <div className="bg-primary absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]" />
          </div>
          <div>
            <div className="mb-2 text-xl font-semibold leading-none">
              {name}
            </div>
            <div className="text-lg leading-none">{qualification}</div>
            <div className="text-base font-medium">{years}</div>
          </div>
        </Inline>
      ))}
    </Stack>
  );
}
