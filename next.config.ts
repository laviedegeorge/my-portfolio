import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["motion", "lucide-react", "radix-ui"],
  },
};

export default nextConfig;
