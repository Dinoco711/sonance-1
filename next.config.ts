import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false, 
  output: "standalone",
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === "development",
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig; 