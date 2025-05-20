import { Service } from "@strapi-portfolio/web/home/models";
import { ServiceItem } from "../../atoms";

type ServiceListProps = {
  services: Service[];
};
export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="desktop:grid-cols-3 desktop:gap-y-24 desktop:gap-x-8 grid justify-center gap-y-12">
      {services.map((item, index) => (
        <ServiceItem key={index} item={item} />
      ))}
    </div>
  );
}
