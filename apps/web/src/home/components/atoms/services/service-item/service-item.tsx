import { Service } from "@strapi-portfolio/web/home/models";
import {
  $Stack,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@strapi-portfolio/ui";
import { cn } from "@strapi-portfolio/ui/css";

type ServiceItemProps = {
  item: Service;
};
export function ServiceItem({ item }: ServiceItemProps) {
  return (
    <Card
      className={cn(
        "relative h-[300px] w-full max-w-[424px] items-center justify-center pb-10 pt-16",
        $Stack(),
      )}
    >
      <CardHeader className="text-primary absolute -top-[60px]">
        <div className="dark:bg-background flex h-[80px] w-[140px] items-center justify-center bg-white">
          {item.icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-4 text-2xl">{item.title}</CardTitle>
        <CardDescription className="text-lg">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
