import { Button } from "@strapi-portfolio/ui";
import Link from "next/link";
import { ProjectsSlider } from "../../molecules";

export function Work() {
  return (
    <section className="wide:mb-48 wide:px-0 relative mb-12 px-4">
      <div className="container mx-auto">
        <div className="wide:mx-0 wide:text-left wide:h-[400px] wide:items-start mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href={"/projects"}>
            <Button>All Projects</Button>
          </Link>
        </div>
        <ProjectsSlider />
      </div>
    </section>
  );
}
