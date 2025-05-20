import { Inline, TabsContent } from "@strapi-portfolio/ui";
import {
  filterByTitle,
  Skills,
  toSkillKey,
} from "@strapi-portfolio/web/home/models";
import { SkillImage, SkillItem } from "../../atoms";

const skillsData: Skills[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Python, DJango",
      },
      {
        name: "React, Next, Remix",
      },
      {
        name: "MySQL, PostgreSQL",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "Nvim",
        imgPath: "/about/vscode.svg",
      },
      {
        name: "Figma",
        imgPath: "/about/figma.svg",
      },
      {
        name: "Notion",
        imgPath: "/about/notion.svg",
      },
      {
        name: "WordPress",
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

export function AboutSkills() {
  return (
    <TabsContent value="skills">
      <div className="desktop:text-left text-center">
        <h3 className="h3 desktop:text-left mb-8 text-center">
          Tools I use Every Day
        </h3>
        <div className="mb-16">
          <h4 className="text-xl font-bold ">Skills</h4>
          <div className="border-border mb-4 border-b"></div>
          <div>
            {filterByTitle<Skills>(skillsData, "skills")?.data.map((item) => (
              <SkillItem skill={item} key={toSkillKey(item)} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="desktop:text-left mb-2 text-xl font-semibold">
            Tools
          </h4>
          <div className="border-border mb-4 border-b"></div>
          <Inline
            alignX="center"
            space="4"
            className="desktop:justify-start w-full"
            wrap
          >
            {filterByTitle<Skills>(skillsData, "tools")?.data.map((item) => (
              <SkillImage skill={item} key={toSkillKey(item)} />
            ))}
          </Inline>
        </div>
      </div>
    </TabsContent>
  );
}
