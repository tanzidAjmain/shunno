/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  allowedDevOrigins: ['192.168.0.101'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/**',
      },
    ],
  },
};

export default nextConfig;
