'use strict'

const webpack = require("webpack")
const path = require('path')
const R = require('ramda')
const VERSION = "v" + require('./package.json').version

let empty = {
  VERSION: VERSION,
  target: 'web',
  module:{
    loaders:[],
    preLoaders:[],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION),
      PROD: process.env.NODE_ENV === 'production',
      DEV: process.env.NODE_ENV !== 'production',
    })
  ],
  resolve: {
    root: [
      path.resolve(__dirname),
      path.resolve(__dirname + '/src'),
      path.resolve(__dirname + '/src/styles'),
      path.resolve(__dirname + '/src/assets'),
    ]
  },
}

module.exports = R.pipe(
  require('./webpack/entry'),
  require('./webpack/loaders'),
  require('./webpack/development'),
  require('./webpack/production')
)(empty)
