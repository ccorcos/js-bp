'use strict'

/*
In development, the output defaults to `[name]/index.js`. And therefore, in
your `entry/[name]/index.html`, you should can add the script tag:
`<script src="[name]/index.js"></script>` at the bottom of the body,
*/

const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')

module.exports = config => {
  config.devtool = 'source-map'

  config.output = {
    path: path.resolve(__dirname + '/../dist'),
    filename: "[name]/index.js",
    publicPath: '/',
  }

  utils.setEntry(config, name => [
    'webpack-hot-middleware/client',
    `./src/entry/${name}/index.js`,
  ])

  utils.addPlugins(config, [
    // dont exit on error
    new webpack.NoErrorsPlugin(),
    // hot module replacement for fast development
    new webpack.HotModuleReplacementPlugin(),
  ])
  return config
}
