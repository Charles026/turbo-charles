/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/i,
      type: 'asset/resource'
    });
    return config;
  },
  images: {
    unoptimized: true,
    domains: ['localhost', 'turbocharles.space'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig