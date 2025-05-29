import { Link } from "@strapi-portfolio/web/i18n/navigation";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src="/logo.svg" width={54} height={54} priority alt="" />
    </Link>
  );
};
