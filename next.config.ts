import type { NextConfig } from "next";

// Static export for GitHub Pages. In production the site is served from a
// project page (https://<user>.github.io/<repo>/), so we prefix assets/routes
// with the repo name. Locally (dev) it stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "timothy-roberts-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
