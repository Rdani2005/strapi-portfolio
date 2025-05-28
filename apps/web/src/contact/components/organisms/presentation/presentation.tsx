import { Grid } from "@strapi-portfolio/ui";
import { ContactPresentation } from "../../molecules";
import { ContactIllustration } from "../../atoms";

export function Presentation() {
  return (
    <Grid wide="2" className="wide:h-[480px] mb-6 pt-12">
      <ContactPresentation />
      <ContactIllustration />
    </Grid>
  );
}
