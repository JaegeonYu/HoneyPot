/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `my_service_${hash}`,
});

const nextConfig = {};

export default withVanillaExtract(nextConfig);
