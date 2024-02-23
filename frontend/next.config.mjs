/** @type {import('next').NextConfig} */
import packageInfo from './package.json' assert { type: "json" }

const nextConfig = {
  output: 'export',
  basePath: '/visual-test-review',
  publicRuntimeConfig: {
    version: packageInfo.version,
  },
}

export default nextConfig
