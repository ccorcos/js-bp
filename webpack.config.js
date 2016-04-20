'use strict'

const webpack = require("webpack")
const path = require('path')
const R = require('ramda')

let empty = {
  target: 'web',
  module:{
    loaders:[],
    preLoaders:[],
  },
  plugins: [],
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
  require('./webpack/output'),
  require('./webpack/loaders'),
  require('./webpack/plugins')
)(empty)
