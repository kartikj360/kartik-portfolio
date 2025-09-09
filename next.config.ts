import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "kartik-portfolio",
  assetPrefix: "/kartik-portfolio/",
};

export default nextConfig;