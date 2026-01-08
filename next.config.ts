import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Next's build-time lint currently calls ESLint with deprecated options in
    // this setup, producing noisy warnings. We keep linting via `npm run lint`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
