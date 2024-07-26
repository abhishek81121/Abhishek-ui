/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.usegalileo.ai",
      },
    ],
  },
};

module.exports = nextConfig;