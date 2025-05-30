import { Button, Stack } from "@strapi-portfolio/ui";
import { Link } from "@strapi-portfolio/web/i18n/navigation";
import { useTranslations } from "next-intl";

export function Cta() {
  const t = useTranslations("contact");

  return (
    <section className="bg-tertiary dark:bg-secondary/40 py-24">
      <div className="container mx-auto">
        <Stack align="center">
          <h2 className="h2 mb-8 max-w-xl text-center">{t("ready")}</h2>
          <Link href="/contact">
            <Button>{t("contactMe")}</Button>
          </Link>
        </Stack>
      </div>
    </section>
  );
}
