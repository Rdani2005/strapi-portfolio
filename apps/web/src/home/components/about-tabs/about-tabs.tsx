import { TabsList, TabsTrigger } from "@strapi-portfolio/ui";

export function AboutTabs() {
  return (
    <TabsList className="desktop:grid-cols-3 desktop:max-w-[520px] desktop:border grid w-full dark:border-none">
      <TabsTrigger value="info" className="desktop:w-auto w-[162px]">
        Personal Info
      </TabsTrigger>
      <TabsTrigger value="qualification" className="desktop:w-auto w-[162px]">
        Qualification
      </TabsTrigger>
      <TabsTrigger value="skills" className="desktop:w-auto w-[162px]">
        Skills
      </TabsTrigger>
    </TabsList>
  );
}
