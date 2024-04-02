/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `my_service_${hash}`,
});

// ('https://d1x6bubco94kr4.cloudfront.net/images/100153084.JPG');

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1x6bubco94kr4.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      // {
      //   protocol: 'http',
      //   hostname: 'info.nec.go.kr',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
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

export default withVanillaExtract(nextConfig);
