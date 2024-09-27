/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["uatseller.petsploy.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
