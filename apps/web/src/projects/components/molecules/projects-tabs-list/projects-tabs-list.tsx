import { oneline } from "@strapi-portfolio/core";
import { $Grid, TabsList } from "@strapi-portfolio/ui";
import { ProjectCategory } from "@strapi-portfolio/web/projects/models";
import { ProjectTabTrigger } from "../../atoms";

type ProjectsTabsListProps = {
  categories: ProjectCategory[];
  onSelectCategory: (category: ProjectCategory) => void;
};

const projectListClassName = oneline`
  desktop:max-w-[640px] 
  laptop:border 
  dark:boder-none 
  mx-auto 
  mb-12 
  h-full 
  w-full
`;

export function ProjectsTabsList({
  categories,
  onSelectCategory,
}: ProjectsTabsListProps) {
  return (
    <TabsList
      className={$Grid({
        className: projectListClassName,
        laptop: "4",
      })}
    >
      {categories.map((category) => (
        <ProjectTabTrigger
          onClick={() => onSelectCategory(category)}
          key={category}
          category={category}
        />
      ))}
    </TabsList>
  );
}
