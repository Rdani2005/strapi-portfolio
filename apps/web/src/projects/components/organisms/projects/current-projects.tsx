"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@strapi-portfolio/ui";
import { ProjectCard } from "@strapi-portfolio/web/home/components/atoms";
import {
  ALL_PROJECT_CATEGORIES,
  isProjectCategory,
  projectToKey,
  type Project,
  type ProjectCategory,
} from "@strapi-portfolio/web/projects/models";
import { useMemo, useState } from "react";

type CurrentProjectsProps = {
  currentCategories: ProjectCategory[];
  projects: Project[];
};

export function CurrentProjects({
  currentCategories,
  projects,
}: CurrentProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    currentCategories[0] || ALL_PROJECT_CATEGORIES,
  );

  const filteredProjects = useMemo<Project[]>(() => {
    return projects.filter((project) =>
      isProjectCategory(project, selectedCategory),
    );
  }, [projects, selectedCategory]);

  return (
    <Tabs className="wide:mb-48 mb-24" defaultValue={selectedCategory}>
      <TabsList className="laptop:grid-cols-4 desktop:max-w-[640px] laptop:border dark:boder-none mx-auto mb-12 grid h-full w-full">
        {currentCategories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            onClick={() => setSelectedCategory(category)}
            className="tablet:w-auto w-[162px] capitalize"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="wide:mt-8 desktop:grid-cols-3 grid grid-cols-1 gap-4 text-lg">
        {filteredProjects.map((project) => (
          <TabsContent key={projectToKey(project)} value={selectedCategory}>
            <ProjectCard project={project} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
