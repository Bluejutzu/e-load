import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  images: {
    // The "Eine Karte" showcase tile is an inline SVG; the other tiles are
    // photos that go through the normal image optimizer.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  async redirects() {
    return [
      // The parent company site. Reachable from the footer "Powered by"
      // link and via this short path.
      {
        source: "/advantis",
        destination: "https://advantisgroup.de",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
