/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Private KASM Registry',
    description: 'Private registry with KASM workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasm-registry.wianeck.com/',
    contactUrl: 'https://github.com/kwianeck89',
  },
  reactStrictMode: true,
  basePath: '/1.1',
  assetPrefix: '/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
