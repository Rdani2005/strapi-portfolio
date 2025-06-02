import { LocaleSchema } from "@strapi-portfolio/web/config";
import {
  About,
  Cta,
  getAboutInfo,
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
  const locale = parse(LocaleSchema, (await params).locale);
  const hero = await getHeroInformation({
    locale: locale,
  });
  const devInformation = await getAboutInfo({
    locale,
  });

  return (
    <main>
      <Hero hero={hero} />
      <About devInformation={devInformation} />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
