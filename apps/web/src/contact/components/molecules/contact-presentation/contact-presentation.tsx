import { Stack } from "@strapi-portfolio/ui";
import {
  ContactPresentationDescription,
  ContactPresentationTitle,
} from "../../atoms";

export function ContactPresentation() {
  return (
    <Stack className="justify-center">
      <ContactPresentationTitle />
      <h1 className="h1 mb-8 max-w-md">Let&apos;s work together</h1>
      <ContactPresentationDescription />
    </Stack>
  );
}
