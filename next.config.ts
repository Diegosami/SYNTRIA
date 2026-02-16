import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/portfolio/:slug',
        destination: '/portafolio/:slug',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/portafolio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
