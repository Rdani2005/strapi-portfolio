import { Inline, Stack } from "@strapi-portfolio/ui";
import { Qualification } from "@strapi-portfolio/web/home/models";
import { ReactNode } from "react";
import { AboutExperience } from "../about-experience";

type AboutQualificationItemProps = {
  icon: ReactNode;
  qualification: Qualification | undefined;
};

export function AboutQualificationItem({
  icon,
  qualification,
}: AboutQualificationItemProps) {
  if (!qualification) return null;
  return (
    <Stack space="6">
      <Inline space="4" alignY="center" className="text-primary text-[22px]">
        {icon}
        <h4 className="font-medium capitalize">{qualification?.title}</h4>
      </Inline>
      <AboutExperience qualification={qualification} />
    </Stack>
  );
}
