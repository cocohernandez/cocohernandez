import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the site as plain HTML/CSS/JS into out/, so GitHub Pages can host it
  // (see .github/workflows/deploy.yml). Server-only features such as
  // cacheComponents/partial prerendering can't be used with a static export.
  output: "export",
};

export default nextConfig;
