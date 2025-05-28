import { Grid, TabsContent } from "@strapi-portfolio/ui";
import {
  type Project,
  type ProjectCategory,
  projectToKey,
} from "@strapi-portfolio/web/projects/models";
import { ProjectCard } from "../../atoms";

type ProjectsListProps = {
  projects: Project[];
  currentCategory: ProjectCategory;
};

export function ProjectsList({ projects, currentCategory }: ProjectsListProps) {
  return (
    <Grid columns="1" desktop="3" space="4" className="wide:mt-8 text-lg">
      {projects.map((project) => (
        <TabsContent key={projectToKey(project)} value={currentCategory}>
          <ProjectCard project={project} />
        </TabsContent>
      ))}
    </Grid>
  );
}
