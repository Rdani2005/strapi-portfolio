import { $Inline, Stack } from "@strapi-portfolio/ui";
import { Socials } from "../socials";

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <Stack className="justify-between" align="center">
          <Socials
            containerStyles={$Inline({
              space: "6",
              className: "mx-auto wide:mx-0 mb-4",
            })}
            iconsStyles="text-primary dark:text-white/70 text-[20px]"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Danny Sequeira. All rights reserved.
          </div>
        </Stack>
        <div></div>
      </div>
    </footer>
  );
}
