import { TabsTrigger } from "@strapi-portfolio/ui";

type AboutTriggerProps = {
  value: string;
  label: string;
};

export function AboutTrigger({ value, label }: AboutTriggerProps) {
  return (
    <TabsTrigger value={value} className="desktop:w-auto w-[162px]">
      {label}
    </TabsTrigger>
  );
}
