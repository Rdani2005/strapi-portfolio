import { TabsList } from "@strapi-portfolio/ui";
import { AboutTrigger } from "../../../atoms";

export function AboutTabs() {
  return (
    <TabsList className="desktop:grid-cols-3 desktop:max-w-[520px] wide:mx-0 desktop:border mx-auto grid w-full dark:border-none">
      <AboutTrigger value="info" label="Personal Info" />
      <AboutTrigger value="qualification" label="Qualification" />
      <AboutTrigger value="skills" label="Skills" />
    </TabsList>
  );
}
