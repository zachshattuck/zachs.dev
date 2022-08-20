/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/'
  },
  // // Using firebase rewrites instead
  // exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildDir }) {
  //   return {
  //     "/": { page: "/" },
  //     "/gallery": { page: "/gallery" },
  //     // "/gallery/index": { page: "/gallery" },
  //   }
  // }
}

module.exports = nextConfig
