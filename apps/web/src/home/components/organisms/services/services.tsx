import {
  GanttChartSquareIcon,
  BlocksIcon,
  GemIcon,
} from "@strapi-portfolio/ui/icons";
import { Service } from "@strapi-portfolio/web/home/models";
import { ServiceList } from "../../molecules";

const servicesData: Service[] = [
  {
    icon: <GanttChartSquareIcon size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BlocksIcon size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <GemIcon size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function Services() {
  return (
    <section className="desktop:mb-36 mb-12">
      <div className="container mx-auto">
        <h2 className="section-title desktop:mb-24 mx-auto mb-12 text-center">
          My Services
        </h2>
        <ServiceList services={servicesData} />
      </div>
    </section>
  );
}
