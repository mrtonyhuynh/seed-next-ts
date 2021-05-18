const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [withOptimizedImages],
  ],
  {
    /* global config here ... */
  }
);