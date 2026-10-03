import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smallest), WebP as fallback for browsers without AVIF.
    formats: ["image/avif", "image/webp"],
    // The images rarely change, so optimized versions can be cached for
    // 31 days instead of being regenerated.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        // Preview images for the click-to-load videos.
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
