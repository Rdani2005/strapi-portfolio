import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("http://localhost:1337")],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
