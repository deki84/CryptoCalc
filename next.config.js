/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  swcMinify: true,
  images: {
    domains: ['assets.coingecko.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
