import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: false, // Let Vercel optimize images
  },
  // Ensure proper output for Vercel
  output: undefined, // Use default (standalone for Vercel)
};

export default nextConfig;
