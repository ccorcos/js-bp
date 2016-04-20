'use strict'

/*
In development, the output defaults to `[name]/index.js`. And therefore, in
your `entry/[name]/index.html`, you should can add the script tag:
`<script src="[name]/index.js"></script>` at the bottom of the body,

In production, the output hashes your files and adds a public path
`http://mycdn.com/my-bucket/[name]/index-[hash].js`. Note that your image
assets and css files will all end up hashed in this same place.
*/

const path = require('path')

module.exports = config => {
  if (process.env.NODE_ENV === "production") {
    config.output = {
      path: path.resolve(__dirname + '/../dist'),
      filename: "[name]/index-[hash].js",
      publicPath: 'http://mycdn.com/my-bucket/',
    }
  } else {
    config.devtool = 'source-map'
    config.output = {
      path: path.resolve(__dirname + '/../dist'),
      filename: "[name]/index.js",
      publicPath: '/',
    }
  }
  return config
}
