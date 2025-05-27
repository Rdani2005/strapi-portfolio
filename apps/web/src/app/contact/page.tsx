import { Inline, Stack } from "@strapi-portfolio/ui";
import { HomeIcon, MailIcon, PhoneCallIcon } from "@strapi-portfolio/ui/icons";
import { ContactForm } from "@strapi-portfolio/web/contact";

export default function ContactPage() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="wide:grid-cols-2 wide:h-[480px] mb-6 grid pt-12">
          <Stack className="justify-center">
            <Inline
              space="4"
              alignY="center"
              className="text-primary mb-4 text-lg"
            >
              <span className="bg-primary flex h-[2px] w-[30px]"></span>
              Say Hello 👋🏻
            </Inline>
            <h1 className="h1 mb-8 max-w-md">Let&apos;s work together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, numquam!
            </p>
          </Stack>
          <div className="wide:flex bg-contact_illustration hidden w-full bg-contain bg-top bg-no-repeat" />
        </div>

        <div className="wide:grid-cols-2 wide:mb-32 mb-24 grid">
          <Stack
            space="4"
            className="wide:gap-14 wide:mb-24 wide:text-lg mb-12"
          >
            <Inline space="8" alignY="center">
              <MailIcon className="text-primary" size={18} />
              <div>hello@rdani2005.com</div>
            </Inline>
            <Inline space="8" alignY="center">
              <HomeIcon className="text-primary" size={18} />
              <div>Costa Rica, Moravia</div>
            </Inline>
            <Inline space="8" alignY="center">
              <PhoneCallIcon className="text-primary" size={18} />
              <div>+(506) 6080-1519</div>
            </Inline>
          </Stack>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
