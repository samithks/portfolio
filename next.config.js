const { join } = require('node:path')
const { withContentlayer } = require('next-contentlayer')
const  securityHeaders = require('./security-headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
}

module.exports = withContentlayer(nextConfig)
