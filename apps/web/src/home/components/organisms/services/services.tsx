import {
  GanttChartSquareIcon,
  BlocksIcon,
  GemIcon,
} from "@strapi-portfolio/ui/icons";
import { Service } from "@strapi-portfolio/web/home/models";
import { ServiceList } from "../../molecules";
import { useTranslations } from "next-intl";

const servicesData: Service[] = [
  {
    icon: <GanttChartSquareIcon size={72} strokeWidth={0.8} />,
    title: "webDesign",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BlocksIcon size={72} strokeWidth={0.8} />,
    title: "webDevelopment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <GemIcon size={72} strokeWidth={0.8} />,
    title: "appDevelopment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function Services() {
  const t = useTranslations("myServicesSection");
  return (
    <section className="wide:mb-36 wide:px-0 mb-12 px-4">
      <div className="container mx-auto">
        <h2 className="section-title desktop:mb-24 mx-auto mb-12 text-center">
          {t("title")}
        </h2>
        <ServiceList services={servicesData} />
      </div>
    </section>
  );
}
