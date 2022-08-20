/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildDir }) {
    return {
      "/": { page: "/" },
      "/gallery": { page: "/gallery" },
      // Using firebase rewrites instead
      // "/gallery/index": { page: "/gallery" },
    }
  }
}

module.exports = nextConfig
