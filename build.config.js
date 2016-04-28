'use strict'

// not used yet, but we should do something like this
module.exports {
  entry: {
    // html entry files will generate html with hashed js and css all
    // linked appropriately along with chunking as desired.
    home: {
      src: './src/entry/home/index.html',
      dest: './dist/index.html',
    },
    dashboard: {
      src: './src/entry/dashboard/index.html',
      dest: './dist/dashboard/index.html'
    },
    analytics: {
      src: './src/entry/analytics/index.html',
      dest: './dist/analytics/index.html'
    },
    // entry from a js file or a css file will generate files without hashes
    // for the purpose building packages
    utils: {
      src: './src/entry/utils.js',
      dest: './dist/utils.js',
    },
    theme: {
      src: './src/entry/theme.scss',
      dest: './dist/theme.css'
    },
  },
  chunks: {
    // we can build hierarchies of chunks and they'll all get linked
    // appropriately in the html files
    common: ['home', 'dashboard'],
    admin: ['analytics', 'dashboard'],
  },
  output: {
    // when linking assets, this will be the cdn prefix path
    publicPath: 'mydomain.com/assets/',
  },
  devServer: {
    serveStatic: './dist',
    proxy: {
      '/api/*': 'http://localhost:8080/',
    },
  },
}
