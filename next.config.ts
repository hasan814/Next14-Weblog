import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/deyw9xwwr/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
