import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "covers.openlibrary.org" },
      {
        protocol: "https",
        hostname: "7jue4fyftkpjsvgw.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
