import packageInfo from './package.json' assert { type: "json" }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/visual-test-review',
  publicRuntimeConfig: {
    version: packageInfo.version,
  },
}

export default nextConfig
