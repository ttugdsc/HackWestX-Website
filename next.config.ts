import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev-mode route indicator (bottom-left floating button).
  // It never renders in production builds.
  devIndicators: false,
};

export default nextConfig;
