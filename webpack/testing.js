'use strict'

module.exports = config => {
  config.devtool = 'inline-source-map'

  // need this to get enzyme working
  // https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md#react-15-compatability
  config.externals = {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }

  // need this to get sinon working
  // https://github.com/webpack/webpack/issues/304#issuecomment-153120107
  config.module.noParse = [
    /node_modules\/sinon/,
  ]

  return config
}