import { LocaleSchema } from "@strapi-portfolio/web/config";
import {
  About,
  Cta,
  getAboutInfo,
  getDevServices,
  getHeroInformation,
  getQualifications,
  getSkillsAndTools,
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
  const devQualifications = await getQualifications({
    locale,
  });

  const skillsAndTools = await getSkillsAndTools({ locale });
  const services = await getDevServices({
    locale,
  });

  return (
    <main>
      <Hero hero={hero} />
      <About
        devQualifications={devQualifications}
        devInformation={devInformation}
        skillsAndTools={skillsAndTools}
      />
      <Services services={services} />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
