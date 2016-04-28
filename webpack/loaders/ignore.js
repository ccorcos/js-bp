'use strict'

module.exports = config => {
  config.module.loaders.push({
    test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf|scss|css|sass)$/,
    loader: 'ignore',
  })
  return config
}
