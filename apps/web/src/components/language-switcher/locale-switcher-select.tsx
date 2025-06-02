"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@strapi-portfolio/ui";
import { GlobeIcon } from "@strapi-portfolio/ui/icons";
import { locales } from "@strapi-portfolio/web/config";
import { usePathname, useRouter } from "@strapi-portfolio/web/i18n/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

type Props = {
  defaultValue: string;
};

export function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const options = locales;
  const t = useTranslations("localeSwitcher");
  const params = useParams();

  function onValueChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={isPending}
    >
      <SelectTrigger className="flex h-[32px] w-auto items-center justify-between gap-[3.5px] rounded-md border-0 border-none bg-transparent pr-[8px] text-[11px] font-bold shadow-none focus:ring-0 focus:ring-offset-0">
        <GlobeIcon className="h-[16px] w-[16px] flex-shrink-0"></GlobeIcon>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((value) => (
          <SelectItem
            className="border-0 border-none text-[15px] font-bold leading-[120%] tracking-[0.01em] text-[#100416] opacity-80 focus:bg-[rgba(16,4,22,0.17)] dark:text-white"
            key={value}
            value={value}
          >
            {t(`locale`, { locale: value.split("-")[0] })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
