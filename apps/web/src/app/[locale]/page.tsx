import { LocaleSchema } from "@strapi-portfolio/web/config";
import {
  About,
  Cta,
  getHeroInformation,
  Hero,
  Reviews,
  Services,
  Work,
} from "@strapi-portfolio/web/home";
import { parse } from "valibot";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const hero = await getHeroInformation({
    locale: parse(LocaleSchema, locale),
  });
  return (
    <main>
      <Hero hero={hero} />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
