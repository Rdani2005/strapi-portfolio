import { oneline } from "@strapi-portfolio/core";

const contactIllustrationClassName = oneline`
  wide:flex 
  bg-contact_illustration 
  hidden 
  w-full 
  bg-contain 
  bg-top 
  bg-no-repeat
`;

export function ContactIllustration() {
  return <div className={contactIllustrationClassName} />;
}
