'use strict'

const configs = require('./webpack/configs')

const env = process.env.NODE_ENV || 'development'

module.exports = configs[env]()