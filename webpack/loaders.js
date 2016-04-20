'use strict'

/*
This file supports the following loaders:
- eslint (see .eslint file for configurations)
- babel with e2015, react and stage-0 presets
- scss with resolve-url-loader
  - to resolve asset paths using `url("~/path/to/asset")`
- url loader to load images and fonts
  - hashes filenames for caching
  - inlines files smaller that 8KB
*/

const R = require('ramda')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const eslint = config => {
  config.module.preLoaders.push({
    test: /\.js$/,
    loader: "eslint",
    exclude: /node_modules/,
  })
  return config
}

const babel = config => {
  config.module.loaders.push({
    test: /\.js$/,
    loader: "babel",
    exclude: /node_modules/,
    query: {
      presets: [
        'es2015',
        'react',
        'stage-0',
      ]
    }
  })
  return config
}

const scss = config => {
  config.sassLoader = {
    includePaths: config.resolve.root
  }
  if (process.env.NODE_ENV === 'production') {
    config.resolveUrlLoader = {
      sourceMap: true,
    }
    config.module.loaders.push({
      test: /\.scss/,
      loader: ExtractTextPlugin.extract("css!resolve-url!sass?sourceMap"),
    })
  } else {
    config.module.loaders.push({
      test: /\.scss/,
      loader: "style!css!resolve-url!sass?sourceMap",
    })
  }
  return config
}

const assets = config => {
  if (process.env.NODE_ENV === 'production') {
    config.module.loaders.push({
      test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf)$/,
      loader: 'url?limit=8182&name=/assets/[hash].[ext]',
    })
  } else {
    config.module.loaders.push({
      test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf)$/,
      loader: 'url?limit=8182',
    })
  }
  return config
}

module.exports = R.pipe(
  eslint,
  babel,
  scss,
  assets
)
