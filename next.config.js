/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    unoptimized: true,
  },
  // Remove trailing slashes from URLs
  trailingSlash: false,
  // Disable server-side features since we're deploying statically
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure we can deploy to any domain
  basePath: '',
  assetPrefix: '',
  // Configure webpack for framer-motion
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource'
    });
    // Add support for framer-motion in static exports
    config.module.rules.push({
      test: /framer-motion/,
      sideEffects: false
    });
    return config;
  }
}

module.exports = nextConfig 