const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const path = require('path');
const withImages = require('next-images');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  target: 'serverless',
  trailingSlash: true
};

module.exports = withBundleAnalyzer({});

module.exports = withImages({
  esModule: true
});
