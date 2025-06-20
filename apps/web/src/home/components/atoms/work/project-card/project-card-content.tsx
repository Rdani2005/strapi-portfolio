import { Badge, Inline } from "@strapi-portfolio/ui";
import { Project } from "@strapi-portfolio/web/home/models";

type ProjectCardContentProps = {
  project: Project;
};
export function ProjectCardContent({ project }: ProjectCardContentProps) {
  return (
    <div className="h-full px-8 py-6">
      <Inline
        space="2"
        className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase"
      >
        {project.categories.map((category) => (
          <Badge key={category.id} className="text-sm font-medium uppercase">
            {category.name}
          </Badge>
        ))}
      </Inline>
      <h4 className="h4 mb-1">{project.title}</h4>
      <p className="text-muted-foreground text-lg">{project.description}</p>
    </div>
  );
}
