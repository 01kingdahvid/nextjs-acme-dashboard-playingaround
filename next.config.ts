import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
  images: {
    domains: [], // Specify external domains if needed
    formats:['image/webp', 'image/avif'],
    unoptimized: true, // Bypasses Next.js optimization, useful in dev/testing
  },
};

export default nextConfig;
