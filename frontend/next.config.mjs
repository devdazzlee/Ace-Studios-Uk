/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Only applied by `next dev` (output: 'export' ignores this at build time).
  // Production headers for the deployed static export live in vercel.json /
  // public/_headers / public/.htaccess instead.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ]
  },
}

export default nextConfig
