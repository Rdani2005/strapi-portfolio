import { Inline } from "@strapi-portfolio/ui";
import { ContactInformation } from "@strapi-portfolio/web/contact/models";

type ContactInformationItemProps = {
  contact: ContactInformation;
};

export function ContactInformationItem({
  contact,
}: ContactInformationItemProps) {
  return (
    <Inline space="8" alignY="center">
      {contact.icon}
      <div>{contact.label}</div>
    </Inline>
  );
}
