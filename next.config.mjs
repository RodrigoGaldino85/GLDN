// Plain JS (not next.config.ts) so the config loads without compiling TypeScript —
// required on hosts where Next's native SWC binary can't run (e.g. Hostinger: old glibc → WASM fallback).

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev only: lets phones/tablets on the local network (e.g. http://192.168.x.x:3001) use hot reload.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
