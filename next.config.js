/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Cold-Esthetic-Reform'; // nombre exacto del repo

const nextConfig = {
  ...(isProd ? { output: 'export', trailingSlash: true } : {}),
  images: {
    unoptimized: isProd,
  },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_WA_URL: process.env.NEXT_PUBLIC_WA_URL,
  },
};

module.exports = nextConfig;
