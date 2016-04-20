const webpack = require("webpack")

module.exports = {
  devtool: 'source-map',
  entry: {
    home: [
      'webpack-hot-middleware/client',
      'src/entry/home/index.js'
    ],
    dashboard: [
      'webpack-hot-middleware/client',
      'src/entry/dashboard/index.js'
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]/index.js",
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint",
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0',
          ]
        }
      },
      {
        test: /\.scss/,
        loader: "style!css!resolve-url!sass?sourceMap",
      },
      {
        test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot|otf)$/,
        loader: 'url?limit=8182',
      },
    ]
  },
  resolve: {
    root: [
      __dirname,
      __dirname + '/src',
      __dirname + '/src/styles',
      __dirname + '/src/assets',
    ]
  },
  sassLoader: {
    includePaths: [
      __dirname,
      __dirname + '/src',
      __dirname + '/src/styles',
      __dirname + '/src/assets',
    ]
  },
  resolveUrlLoader: {
    sourceMap: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}
