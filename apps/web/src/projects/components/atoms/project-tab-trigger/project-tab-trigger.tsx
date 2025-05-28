import { TabsTrigger } from "@strapi-portfolio/ui";
import { ProjectCategory } from "@strapi-portfolio/web/projects/models";

type ProjectTabTriggerProps = {
  onClick?: () => void;
  category: ProjectCategory;
};

export function ProjectTabTrigger({
  onClick,
  category,
}: ProjectTabTriggerProps) {
  return (
    <TabsTrigger
      value={category}
      onClick={onClick}
      className="tablet:w-auto w-[162px] capitalize"
    >
      {category}
    </TabsTrigger>
  );
}
