import { Tabs } from "@strapi-portfolio/ui";
import { DevImg } from "../../atoms";
import {
  AboutInformation,
  AboutQualifications,
  AboutSkills,
  AboutTabs,
} from "../../molecules";

export function About() {
  return (
    <section className="desktop:py-24 desktop:h-[860px] px-4 pb-12 ">
      <div className="container mx-auto">
        <h2 className="section-title desktop:mb-16 mx-auto mb-8 text-center">
          About Me
        </h2>
        <div className="desktop:flex-row flex flex-col">
          <div className="desktop:flex relative hidden flex-1">
            <DevImg
              containerStyles="bg-about_shape w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="info">
              <AboutTabs />
              <div className="desktop:mt-8 mt-12 text-lg ">
                <AboutInformation />
                <AboutQualifications />
                <AboutSkills />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
