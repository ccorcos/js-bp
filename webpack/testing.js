'use strict'

module.exports = config => {
  config.devtool = 'inline-source-map'

  config.externals = {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }

  // https://github.com/webpack/webpack/issues/304#issuecomment-153120107
  config.module.noParse = [
    /node_modules\/sinon/,
  ]

  return config
}