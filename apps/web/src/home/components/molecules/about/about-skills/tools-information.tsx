import { Inline } from "@strapi-portfolio/ui";
import { useTranslations } from "next-intl";
import { type Tool } from "@strapi-portfolio/web/home/models";
import { ToolItem } from "../../../atoms";

type ToolsInformationProps = {
  tools: Tool[];
};
export function ToolsInformation({ tools }: ToolsInformationProps) {
  const t = useTranslations("aboutMeSection");
  return (
    <div>
      <h4 className="wide:text-left mb-2 text-xl font-semibold">
        {t("tools")}
      </h4>
      <div className="border-border mb-4 border-b"></div>
      <Inline
        alignX="center"
        space="4"
        className="wide:justify-start w-full"
        wrap
      >
        {tools.map((item) => (
          <ToolItem key={item.id} tool={item} />
        ))}
      </Inline>
    </div>
  );
}
