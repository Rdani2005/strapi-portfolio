import Link from "next/link";
import { $Inline, Button, Hidden, Inline, Stack } from "@strapi-portfolio/ui";
import {
  DownloadIcon,
  SendIcon,
  RiBriefcase4Fill,
  RiTodoFill,
  RiArrowDownSLine,
  RiTeamFill,
} from "@strapi-portfolio/ui/icons";
import { Socials } from "@strapi-portfolio/web/components";
import { Badge, DevImg } from "../../atoms";

export const Hero = () => {
  return (
    <section className="wide:py-24 wide:pt-28 bg-hero h-[84vh] bg-cover bg-bottom bg-no-repeat px-4 py-12 dark:bg-none">
      <div className="container mx-auto">
        <Inline alignX="between" space="8">
          <Stack className="wide:mx-0 wide:text-left mx-auto max-w-[600px] justify-center text-center">
            <div className="text-primary mb-4 text-sm font-semibold uppercase tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello! My name is Daniel Sequeira</h1>
            <p className="subtitle desktop:mx-0 mx-auto max-w-[490px]">
              Brief Description with insights into myself, my vocational journey
              and what I engage in professionally
            </p>

            <div className="tablet:flex-row wide:mx-0 mx-auto mb-12 flex flex-col gap-3">
              <Button className="gap-x-2" asChild>
                <Link href={"/contact"}>
                  Contact Me <SendIcon size={18} />
                </Link>
              </Button>
              <Button className="gap-x-2" variant="secondary" asChild>
                <Link href={"/contact"}>
                  Download CV <DownloadIcon size={18} />
                </Link>
              </Button>
            </div>

            <Socials
              containerStyles={$Inline({
                space: "6",
                className: "mx-auto wide:mx-0",
              })}
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </Stack>

          <div className="wide:flex relative hidden">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNumber={5}
              endCountText="+"
              badgeText="Years of Experience"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNumber={10}
              endCountText="+"
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNumber={7}
              endCountText="k"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2  absolute -right-2 -top-1 h-[500px] w-[500px] bg-no-repeat" />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </Inline>

        <Hidden belowFlex="tablet" asChild>
          <div className="laptop:bottom-12 absolute bottom-44 left-2/4 animate-bounce">
            <RiArrowDownSLine className="text-primary text-3xl" />
          </div>
        </Hidden>
      </div>
    </section>
  );
};
