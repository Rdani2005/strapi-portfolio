import {
  $Inline,
  $Stack,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  Stack,
} from "@strapi-portfolio/ui";
import { AlignJustifyIcon } from "@strapi-portfolio/ui/icons";
import { Nav } from "./nav";
import { Logo } from "../logo";
import { Socials } from "../socials";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustifyIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <Stack align="center" className="h-full justify-between py-8">
          <Stack className="gap-32" align="center">
            <Logo />
            <Nav
              containerStyles={$Stack({ space: "6", align: "center" })}
              linkStyles="text-2xl"
              underlineStyles=""
            />
          </Stack>
          <Socials
            containerStyles={$Inline({ space: "4" })}
            iconsStyles="text-2xl"
          />
        </Stack>
      </SheetContent>
    </Sheet>
  );
}
