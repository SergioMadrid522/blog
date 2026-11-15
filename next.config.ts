import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
