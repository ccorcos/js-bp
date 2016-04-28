'use strict'

const webpack = require("webpack")
const path = require('path')
const VERSION = "v" + require('../package.json').version

module.exports = {
  VERSION: VERSION,
  target: 'web',
  module:{
    loaders:[],
    preLoaders:[],
    externals: {},
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
      path.resolve(__dirname + '/..'),
      path.resolve(__dirname + '/../src'),
      path.resolve(__dirname + '/../src/styles'),
      path.resolve(__dirname + '/../src/assets'),
    ]
  },
}