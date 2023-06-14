/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "tecdn.b-cdn.net",
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
