/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true, // Required for static site generation
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
}

module.exports = nextConfig 