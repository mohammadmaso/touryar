module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack5: true,
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

if (process.env.ACTIVE_PWA === "true") {
  module.exports = withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
      register: true,
      skipWaiting: true,
    },
})}

// module.exports = {
//   images: {
//     domains: ['cdn.pay.ir'],
//   },
// }