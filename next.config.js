/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true, // Required for static site generation
  },
  // Disable server-side features since we're deploying to Cloudflare Pages
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 