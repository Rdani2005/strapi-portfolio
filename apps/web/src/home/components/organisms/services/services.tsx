import { Service } from "@strapi-portfolio/web/home/models";
import { ServiceList } from "../../molecules";
import { useTranslations } from "next-intl";

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  const t = useTranslations("myServicesSection");
  return (
    <section className="wide:mb-36 wide:px-0 mb-12 px-4">
      <div className="container mx-auto">
        <h2 className="section-title desktop:mb-24 mx-auto mb-12 text-center">
          {t("title")}
        </h2>
        <ServiceList services={services} />
      </div>
    </section>
  );
}
