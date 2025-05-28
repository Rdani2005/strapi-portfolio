import { Container } from "@strapi-portfolio/ui";
import { ContactData, Presentation } from "@strapi-portfolio/web/contact";

export default function ContactPage() {
  return (
    <section>
      <Container>
        <Presentation />
        <ContactData />
      </Container>
    </section>
  );
}
