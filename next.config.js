const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'en', 'es'],
    defaultLocale: 'ru',
  },
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.SERVER_URL}/:path*`,
  //     },
  //     {
  //       source: '/static/:path*',
  //       destination: `${process.env.SERVER_URL}/static/:path*`,
  //     },
  //   ];
  // },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
