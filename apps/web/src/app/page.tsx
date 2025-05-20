import { About, Hero, Services } from "@strapi-portfolio/web/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
