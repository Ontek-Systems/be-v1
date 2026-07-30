/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/be-v1",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
