import { Card } from "@strapi-portfolio/ui";
import { Project } from "@strapi-portfolio/web/home/models";
import { ProjectCardHeader } from "./project-card-header";
import { ProjectCardContent } from "./project-card-content";

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
