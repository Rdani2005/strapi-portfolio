import { About, Hero, Services, Work } from "@strapi-portfolio/web/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
