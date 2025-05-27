import { Button, Stack } from "@strapi-portfolio/ui";
import Link from "next/link";

export function Cta() {
  return (
    <section className="bg-tertiary dark:bg-secondary/40 py-24">
      <div className="container mx-auto">
        <Stack align="center">
          <h2 className="h2 mb-8 max-w-xl text-center">
            Prepared to turn your ideas into reality? Let&apos;s work together!
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </Stack>
      </div>
    </section>
  );
}
