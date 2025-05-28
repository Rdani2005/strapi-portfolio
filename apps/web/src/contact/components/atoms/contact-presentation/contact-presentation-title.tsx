import { Inline } from "@strapi-portfolio/ui";

export function ContactPresentationTitle() {
  return (
    <Inline space="4" alignY="center" className="text-primary mb-4 text-lg">
      <span className="bg-primary flex h-[2px] w-[30px]"></span>
      Say Hello 👋🏻
    </Inline>
  );
}
