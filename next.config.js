/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
    ],
  },
  env: {
    FORMSPREE_FORM_ID: 'maqaoblg',
  },
}
module.exports = nextConfig