'use strict'

/*
http://webpack.github.io/docs/list-of-plugins.html

TODO:
- AppCachePlugin
  - HTML5 Cache manifest
- OfflinePlugin
  - Event bettern than AppCachePlugin?
- WebpackShellPlugin
  - Run a script after build
- S3Plugin
  - Upload directly to S3
- I18nPlugin
  - Create mutliple configs/build for each language
- Chunking stuff?
  - webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
  - webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
*/


const webpack = require('webpack')
const VERSION = "v1.0.0" // XXX: get this from package.json

module.exports = config => {
  const plugins = list => list.forEach(item => config.plugins.push(item))

  plugins([
    // feature flags
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION),
      PROD: process.env.NODE_ENV === 'production',
      DEV: process.env.NODE_ENV !== 'production',
    })
  ])

  if (process.env.NODE_ENV === 'production') {
    plugins([
      // webpack will try to dedupe code that is common in dependencies
      new webpack.optimize.DedupePlugin(),
      // keep entry chunks small
      new webpack.optimize.OccurrenceOrderPlugin(true),
      // rip out common code into one file
      new webpack.optimize.CommonsChunkPlugin('common-[hash].js'),
      // minify js and all loaders
      new webpack.optimize.UglifyJsPlugin({
        mangle: {except: []},
        output: {comments: false},
      }),
      // add a version commnet at the top of each file
      new webpack.BannerPlugin(VERSION),
    ])
  } else {
    plugins([
      // dont exit on error
      new webpack.NoErrorsPlugin(),
      // hot module replacement for fast development
      new webpack.HotModuleReplacementPlugin(),
    ])
  }

  return config
}