import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fan-cdn.nolimitcity.com" },
      { protocol: "https", hostname: "games.evolution.com" },
      { protocol: "https", hostname: "www.pragmaticplay.com" },
    ],
  },
};

export default nextConfig;
