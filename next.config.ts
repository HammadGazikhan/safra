import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"], // ✅ Add this line
  },
  /* config options here */
};

export default nextConfig;
