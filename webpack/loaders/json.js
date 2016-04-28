'use strict'

// see .eslint file for configurations
module.exports = config => {
  config.module.preLoaders.push({
    test: /\.json$/,
    loader: "json",
  })
  return config
}
