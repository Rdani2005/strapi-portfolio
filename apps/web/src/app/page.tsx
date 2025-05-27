import {
  About,
  Cta,
  Hero,
  Reviews,
  Services,
  Work,
} from "@strapi-portfolio/web/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
