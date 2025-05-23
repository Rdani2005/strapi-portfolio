import { Inline } from "@strapi-portfolio/ui";
import { AboutInfo } from "@strapi-portfolio/web/home/models";

type AboutInfoItemProps = {
  item: AboutInfo;
};
export function AboutInfoItem({ item }: AboutInfoItemProps) {
  return (
    <Inline className="wide:mx-0 mx-auto" space="4">
      <div className="text-primary">{item.icon}</div>
      <div>{item.text}</div>
    </Inline>
  );
}
