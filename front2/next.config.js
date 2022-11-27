/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: "/:path*", //api request path
        destination: "https://http://141.164.59.254:8080/:path*", //목적 path
      },
    ];
  },
};

module.exports = nextConfig;
