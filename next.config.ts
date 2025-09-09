import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/kartik-portfolio",
  assetPrefix: "/kartik-portfolio/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/kartik-portfolio",
  },
};

export default nextConfig;