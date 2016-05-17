'use strict'

/*
In production, the output hashes your files and adds a public path
`http://mycdn.com/my-bucket/[version]/[name]/index-[hash].js`. Note that your image
assets and css files will all end up hashed in this same place.

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

const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const WebpackShellPlugin = require('webpack-shell-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = config => {
  const distPath = path.resolve(`${__dirname}/../dist/`)
  const buildScript = path.resolve(`${__dirname}/../scripts/build-html.js`)

  config.output = {
    path: distPath,
    filename: "[name]/index-[chunkhash].js",
    // publicPath: 'http://mycdn.com/my-bucket/',
    publicPath: distPath + '/',
  }

  utils.setEntry(config, name => `./src/entry/${name}/index.js`)

  utils.addPlugins(config, [
    // webpack will try to dedupe code that is common in dependencies
    new webpack.optimize.DedupePlugin(),
    // keep entry chunks small
    new webpack.optimize.OccurrenceOrderPlugin(true),
    // rip out common code into one file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common/index-[chunkhash].js',
      chunks: Object.keys(config.entry)
    }),
    // minify js and all loaders
    new ExtractTextPlugin("[name]/style-[chunkhash].css"),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {except: []},
      output: {comments: false},
    }),
    new WebpackShellPlugin({
      onBuildStart: [
        // delete the old buildn
        `rm -rf ${distPath};`
      ],
      onBuildEnd: [
        // copy index files over
        `node ${buildScript} ${config.VERSION} ${config.output.publicPath}`
      ]
    })
  ])
  return config
}


