import { Grid } from "@strapi-portfolio/ui";
import { ContactInformation } from "../../molecules";
import { ContactForm } from "../contact-form";

export function ContactData() {
  return (
    <Grid wide="2" className="wide:mb-32 mb-24">
      <ContactInformation />
      <ContactForm />
    </Grid>
  );
}
