'use strict'

// resolve asset paths using `url("~/path/to/asset")`
module.exports = config => {
  config.sassLoader = {
    includePaths: config.resolve.root
  }
  config.module.loaders.push({
    test: /\.scss/,
    loader: "style!css!resolve-url!sass?sourceMap",
  })
  return config
}

