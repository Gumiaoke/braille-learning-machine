import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/braille-learning-machine",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
