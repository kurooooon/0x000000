const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, './src/styles'),
      path.join(__dirname, './src/**'),
    ],
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
};
