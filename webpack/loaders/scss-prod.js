'use strict'

const ExtractTextPlugin = require("extract-text-webpack-plugin")

// css files get pulled out of js
module.exports = config => {
  config.sassLoader = {
    includePaths: config.resolve.root
  }
  config.resolveUrlLoader = {
    sourceMap: true,
  }
  config.module.loaders.push({
    test: /\.scss/,
    loader: ExtractTextPlugin.extract("css!resolve-url!sass?sourceMap"),
  })
  return config
}

