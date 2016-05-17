'use strict'

// see .eslint file for configurations
module.exports = config => {
  config.module.preLoaders.push({
    test: /\.js$/,
    loader: "eslint",
    exclude: /node_modules/,
  })
  config.eslint = {
    fix: true,
  }
  return config
}
