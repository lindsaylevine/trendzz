/* eslint-disable @typescript-eslint/no-var-requires */
// const withPWA = require('next-pwa');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// const withCSS = require('@zeit/next-css');

// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
// const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = {
  // poweredByHeader: false,
  // cssModules: true,
  target: 'serverless',
  // cssLoaderOptions: {
  //   // typings-for-css-modules-loader config here
  //   namedExport: true,
  // },
  tsCssModules: true,
  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV !== 'production',
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
}
