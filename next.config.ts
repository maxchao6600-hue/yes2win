import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/zh",
        destination: "/zh-cn/",
        permanent: true,
      },
      {
        source: "/zh/:path*",
        destination: "/zh-cn/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/zh-cn",
        destination: "/",
      },
      {
        source: "/zh-cn/",
        destination: "/",
      },
      {
        source: "/zh-cn/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
