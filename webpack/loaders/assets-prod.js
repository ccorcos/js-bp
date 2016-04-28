'use strict'

// hashes filenames for caching into dist/assets folder
module.exports = config => {
  config.module.loaders.push({
    test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf)$/,
    loader: 'url?limit=8182&name=/assets/[hash].[ext]',
  })
  return config
}
