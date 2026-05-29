import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/**"),
      new URL("https://danishshakeel.me/**"),
    ],
  },
};

export default nextConfig;
