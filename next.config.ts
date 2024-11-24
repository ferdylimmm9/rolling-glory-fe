import type { NextConfig } from "next";

import pwa from "@ducanh2912/next-pwa";
import defaultCache from "./runtime-caching";

const withPWA = pwa({
  disable: process.env.NODE_ENV !== "production",
  dynamicStartUrl: true,
  cacheStartUrl: true,
  workboxOptions: {
    maximumFileSizeToCacheInBytes: 10485760, // increase to 10 MB
    skipWaiting: true,
    disableDevLogs: true,
    sourcemap: false,
    runtimeCaching: defaultCache as any,
  },
});

const nextConfig: NextConfig = withPWA({
  /* config options here */
  reactStrictMode: true,
  async headers() {
    // https://github.com/vercel/next.js/issues/1791#issuecomment-805595853
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/:all*(json)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/chunks/:all*(js)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "private, max-age=31536000, must-revalidate",
                },
              ],
            },
          ]
        : []),
    ];
  },
});

export default nextConfig;
