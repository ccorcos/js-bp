'use strict'

// see .babelrc for presets and plugins
module.exports = config => {
  config.module.loaders.push({
    test: /\.js$/,
    loader: "babel",
    exclude: /node_modules/,
  })
  return config
}
