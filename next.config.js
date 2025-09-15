/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    NEXT_PUBLIC_WA_URL: process.env.NEXT_PUBLIC_WA_URL,
  },
}

module.exports = nextConfig