import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // For project pages (https://username.github.io/repo), also set:
  // basePath: "/<your-repo-name>",
  // assetPrefix: "/<your-repo-name>/",
};

export default nextConfig;