'use strict'

module.exports = config => {
  // transpile source files instrumented with istanbul

  config.module.preLoaders.push({
    test: /\.js$/,
    exclude: /(node_modules|test)/,
    loader: 'babel-istanbul',
    query: {
      cacheDirectory: true,
    }
  })

  return config
}