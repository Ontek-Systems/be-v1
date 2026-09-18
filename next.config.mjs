/* "" on the real domain, "/be-v1" for the GitHub Pages preview. Read by
   lib/siteConfig.ts too, so asset paths always match. */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim().replace(/\/+$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
