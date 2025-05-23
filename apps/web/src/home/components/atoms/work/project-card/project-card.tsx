import Image from "next/image";
import { Badge, Card, CardHeader, Inline } from "@strapi-portfolio/ui";
import { GithubIcon, Link2Icon } from "@strapi-portfolio/ui/icons";
import { type Project } from "@strapi-portfolio/web/home/models";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0 ">
        <div className="wide:bg-work_project wide:bg-[110%] wide:bg-no-repeat bg-tertiary dark:bg-secondary/40 relative flex h-[300px] w-full items-center  justify-center overflow-hidden">
          <Image
            src={project.image}
            width={247}
            height={290}
            alt=""
            priority
            className="absolute bottom-0 shadow-2xl"
          />
          <Inline space="4">
            <Link
              href={project.link}
              className="bg-secondary flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            >
              <GithubIcon className="text-white" />
            </Link>
          </Inline>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
}
