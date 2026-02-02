import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true, // Enables styled-components support via SWC
      },
      // @ts-expect-error - eslint config is valid but type definition might be missing in this version
      eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during builds
      },
    };
  /* config options here */


export default nextConfig;
