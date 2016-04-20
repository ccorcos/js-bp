'use strict'

/*
This file create the entry points spec for your webpack config. It assumes a
file structure: `/src/entry/[name]/index.{js,html}`. It will generate a config
with multiple entry points including hot middleware in development.

This will generate the following entry spec in production:
{
  [name]: `src/entry/${name}/index.js`
}

This will generate the following entry spec in development:
{
  [name]: [
    'webpack-hot-middleware/client',
    `src/entry/${name}/index.js`
  ]
}
*/

const fs = require('fs')
const R = require('ramda')

module.exports = config => {
  const entryFiles = fs.readdirSync(__dirname + '/../src/entry/')

  const toEntryPath = name => {
    if (process.env.NODE_ENV === "production") {
      return `src/entry/${name}/index.js`
    } else {
      return [
        'webpack-hot-middleware/client',
        `src/entry/${name}/index.js`,
      ]
    }
  }

  config.entry = R.zipObj(entryFiles, R.map(toEntryPath, entryFiles))

  return config
}
