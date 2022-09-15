/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  // largePageDataBytes: 200 * 1000, //128KB by default
};

module.exports = nextConfig;
