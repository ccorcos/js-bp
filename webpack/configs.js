'use strict'

const R = require('ramda')
const baseConfig = require('./base')

const makeConfig = (args) => R.pipe(...args)(baseConfig)

module.exports = {
  development: () => makeConfig([
    require('./loaders/eslint'),
    require('./loaders/babel'),
    require('./loaders/json'),
    require('./loaders/scss-dev'),
    require('./loaders/assets-dev'),
    require('./development'),
  ]),
  production: () => makeConfig([
    require('./loaders/eslint'),
    require('./loaders/babel'),
    require('./loaders/json'),
    require('./loaders/scss-prod'),
    require('./loaders/assets-prod'),
    require('./production'),
  ]),
  testing: () => makeConfig([
    // require('./loaders/eslint'),
    require('./loaders/istanbul'),
    require('./loaders/babel'),
    require('./loaders/json'),
    require('./loaders/ignore'),
    require('./testing'),
  ]),
}