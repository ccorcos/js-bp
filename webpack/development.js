'use strict'

/*
In development, the output defaults to `[name]/index.js`. And therefore, in
your `entry/[name]/index.html`, you should can add the script tag:
`<script src="[name]/index.js"></script>` at the bottom of the body,
*/

const path = require('path')
const webpack = require('webpack')

module.exports = config => {
  if (process.env.NODE_ENV !== "production") {
    config.devtool = 'source-map'
    config.output = {
      path: path.resolve(__dirname + '/../dist'),
      filename: "[name]/index.js",
      publicPath: '/',
    }

    const plugins = list => list.forEach(item => config.plugins.push(item))

    plugins([
      // dont exit on error
      new webpack.NoErrorsPlugin(),
      // hot module replacement for fast development
      new webpack.HotModuleReplacementPlugin(),
    ])
  }
  return config
}
