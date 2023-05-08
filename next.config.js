const { withContentlayer } = require("next-contentlayer")
const { join } = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
}

module.exports = withContentlayer(nextConfig)
