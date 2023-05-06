const { join } =  require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
