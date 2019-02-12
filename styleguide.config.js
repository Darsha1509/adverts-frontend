const webpackConfig = require('react-scripts/config/webpack.config');

module.exports = {
  webpackConfig,
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/index.js',
  ],
};
