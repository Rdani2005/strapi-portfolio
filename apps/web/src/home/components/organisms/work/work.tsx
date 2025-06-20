import { Button } from "@strapi-portfolio/ui";
import { ProjectsSlider } from "../../molecules";
import { Link } from "@strapi-portfolio/web/i18n/navigation";
import { useTranslations } from "next-intl";
import { LatestProject } from "@strapi-portfolio/web/home/models";

type WorkProps = {
  latestProjects: LatestProject;
};

export function Work({ latestProjects }: WorkProps) {
  const t = useTranslations("allProjects");

  return (
    <section className="wide:mb-48 wide:px-0 relative mb-12 px-4">
      <div className="container mx-auto">
        <div className="wide:mx-0 wide:text-left wide:h-[400px] wide:items-start mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center">
          <h2 className="section-title mb-4">{latestProjects.title}</h2>
          <p className="subtitle mb-8">{latestProjects.description}</p>
          <Link href={"/projects"}>
            <Button>{t("seeAll")}</Button>
          </Link>
        </div>
        <ProjectsSlider projects={latestProjects.projects} />
      </div>
    </section>
  );
}
