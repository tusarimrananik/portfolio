import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all hosts
      },
      {
        protocol: "http",
        hostname: "**", // allow all hosts over http too
      },
    ],
  },
};

export default nextConfig;
