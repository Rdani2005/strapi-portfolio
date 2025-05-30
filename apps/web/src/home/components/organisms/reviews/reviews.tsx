import { useTranslations } from "next-intl";
import { ReviewsSlider } from "../../molecules";

export function Reviews() {
  const t = useTranslations("reviews");
  return (
    <section className="wide:mb-32 wide:px-0 mb-12 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center">
          {t("title")}
        </h2>
        <ReviewsSlider />
      </div>
    </section>
  );
}
