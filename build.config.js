'use strict'

// not used yet, but we should do something like this
module.exports {
  entry: {
    home: {
      html: './src/entry/home/index.html',
      js: './src/entry/home/index.js',
    },
    dashboard: {
      html: './src/entry/dashboard/index.html',
      js: './src/entry/dashboard/index.js',
    },
  },
  chunks: {
    common: ['home', 'dashboard'],
  },
  output: {
    publicPath: 'mydomain.com/assets/',
  },
}
