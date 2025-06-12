import { TabsContent } from "@strapi-portfolio/ui";
import { type SkillsAndTools } from "@strapi-portfolio/web/home/models";
import { SkillsInformation } from "./skills";
import { ToolsInformation } from "./tools-information";

type AboutSkillsProps = {
  information: SkillsAndTools;
};

export function AboutSkills({ information }: AboutSkillsProps) {
  return (
    <TabsContent value="skills">
      <div className="wide:text-left text-center">
        <h3 className="h3 wide:text-left mb-8 text-center">
          {information.title}
        </h3>
        <SkillsInformation skills={information.skills} />
      </div>
      <ToolsInformation tools={information.tools} />
    </TabsContent>
  );
}
