import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ─────── NEW ───────
  // put all your static HTML/CSS/JS into `out/` instead of `.next`
  distDir: 'out',

  // existing:
  output: 'export',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
    ],
  },
};

export default nextConfig;
