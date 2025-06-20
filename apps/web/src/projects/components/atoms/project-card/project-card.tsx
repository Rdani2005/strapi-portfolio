import { Card } from "@strapi-portfolio/ui";
import { ProjectCardHeader } from "./project-card-header";
import { ProjectCardContent } from "./project-card-content";
import { Project } from "@strapi-portfolio/web/projects/models";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <ProjectCardHeader project={project} />
      <ProjectCardContent project={project} />
    </Card>
  );
}
