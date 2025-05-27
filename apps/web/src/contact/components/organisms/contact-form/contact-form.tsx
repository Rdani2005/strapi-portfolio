"use client";

import { $Stack, Button, Inline, Input, Textarea } from "@strapi-portfolio/ui";
import {
  UserIcon,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
} from "@strapi-portfolio/ui/icons";

export function ContactForm() {
  return (
    <form className={$Stack({ space: "4" })}>
      <Inline className="relative" alignY="center">
        <Input type="name" id="name" placeholder="name" />
        <UserIcon className="absolute right-6" size={20} />
      </Inline>
      <Inline className="relative" alignY="center">
        <Input type="email" id="email" placeholder="email" />
        <MailIcon className="absolute right-6" size={20} />
      </Inline>
      <Inline className="relative" alignY="center">
        <Textarea id="message" placeholder="message" />
        <MessageSquare className="absolute right-6 top-4" size={20} />
      </Inline>
      <Button className="max-w-[166px] items-center">
        Let&apos;s talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}
