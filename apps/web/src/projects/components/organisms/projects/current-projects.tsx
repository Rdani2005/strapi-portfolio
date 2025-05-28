"use client";

import { Tabs } from "@strapi-portfolio/ui";
import {
  ALL_PROJECT_CATEGORIES,
  isProjectCategory,
  type Project,
  type ProjectCategory,
} from "@strapi-portfolio/web/projects/models";
import { useMemo, useState } from "react";
import { ProjectsList, ProjectsTabsList } from "../../molecules";

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
      <ProjectsTabsList
        categories={currentCategories}
        onSelectCategory={setSelectedCategory}
      />
      <ProjectsList
        currentCategory={selectedCategory}
        projects={filteredProjects}
      />
    </Tabs>
  );
}
