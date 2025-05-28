import { Badge } from "@strapi-portfolio/ui";
import { Project } from "@strapi-portfolio/web/projects/models";

type ProjectCardContentProps = {
  project: Project;
};
export function ProjectCardContent({ project }: ProjectCardContentProps) {
  return (
    <div className="h-full px-8 py-6">
      <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
        {project.category}
      </Badge>
      <h4 className="h4 mb-1">{project.name}</h4>
      <p className="text-muted-foreground text-lg">{project.description}</p>
    </div>
  );
}
