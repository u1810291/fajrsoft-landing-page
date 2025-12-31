import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  poweredByHeader: false,
  // Compress responses
  compress: true,
};

export default nextConfig;
