/** @type {import('next').NextConfig} */
const packageInfo = require('./package.json')

const nextConfig = {
  output: 'export',
  basePath: '/visual-test-review',
  publicRuntimeConfig: {
    version: packageInfo.version,
  },
}

export default nextConfig
