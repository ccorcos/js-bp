'use strict'

// inlines files smaller that 8KB
module.exports = config => {
  config.module.loaders.push({
    test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf)$/,
    loader: 'url?limit=8182',
  })
  return config
}