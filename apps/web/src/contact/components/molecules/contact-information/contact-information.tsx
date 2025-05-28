import { Stack } from "@strapi-portfolio/ui";
import { HomeIcon, MailIcon, PhoneCallIcon } from "@strapi-portfolio/ui/icons";
import { ContactInformation as ContactInformationData } from "@strapi-portfolio/web/contact/models";
import { ContactInformationItem } from "../../atoms";

const contactInformationItems: ContactInformationData[] = [
  {
    icon: <MailIcon className="text-primary" size={18} />,
    label: "hello@rdani2005.com",
  },
  {
    icon: <HomeIcon className="text-primary" size={18} />,
    label: "Costa Rica, Moravia",
  },
  {
    icon: <PhoneCallIcon className="text-primary" size={18} />,
    label: "+(506) 6080-1519",
  },
];

export function ContactInformation() {
  return (
    <Stack space="4" className="wide:gap-14 wide:mb-24 wide:text-lg mb-12">
      {contactInformationItems.map((contact) => (
        <ContactInformationItem key={contact.label} contact={contact} />
      ))}
    </Stack>
  );
}
