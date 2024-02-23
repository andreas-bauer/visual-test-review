import packageInfo from './package.json' assert { type: 'json' }

const nextBasePath = process.env.NEXT_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: nextBasePath,
  publicRuntimeConfig: {
    version: packageInfo.version,
  },
}

export default nextConfig
