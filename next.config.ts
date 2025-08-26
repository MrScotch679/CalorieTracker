import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import '@/env';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack: config => {
    // Add svgr loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    // https://nextjs.org/docs/pages/api-reference/components/image#devicesizes
    deviceSizes: [360, 430, 576, 768, 992, 1440, 1920],
    // https://nextjs.org/docs/messages/next-image-unconfigured-host
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.swapspace.co',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'dev-storage.swapspace.co',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
  // https://sass-lang.com/d/legacy-js-api
  // https://github.com/vercel/next.js/issues/71638#issuecomment-2431137842
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
