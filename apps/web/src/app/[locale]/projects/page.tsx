import { Container } from "@strapi-portfolio/ui/layout";
import { CurrentProjects } from "@strapi-portfolio/web/projects/components";
import {
  type ProjectCategory,
  type Project,
  ALL_PROJECT_CATEGORIES,
} from "@strapi-portfolio/web/projects/models";
import { useTranslations } from "next-intl";

const projectsData: Project[] = [
  {
    image: "/work/3.png",
    category: "React",
    name: "site-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "Next",
    name: "site-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "FullStack",
    name: "site-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/1.png",
    category: "FullStack",
    name: "site-4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "site-5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "site-6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "FullStack",
    name: "site-7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/1.png",
    category: "React",
    name: "site-8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
];

const uniqueCategories: ProjectCategory[] = [
  ALL_PROJECT_CATEGORIES,
  ...new Set(projectsData.map((project) => project.category)),
];

export default function ProjectsPage() {
  const t = useTranslations("projects");
  return (
    <section className="min-h-screen pt-12">
      <Container>
        <h2 className="section-title wide:mb-16 mx-auto mb-8 text-center">
          {t("title")}
        </h2>
        <CurrentProjects
          currentCategories={uniqueCategories}
          projects={projectsData}
        />
      </Container>
    </section>
  );
}
