import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets phones/tablets on the local network (e.g. http://192.168.x.x:3001) use hot reload.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
