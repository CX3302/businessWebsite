/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['*'], // Allow images from all domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
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