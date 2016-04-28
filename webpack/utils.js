'use strict'

const fs = require('fs')
const R = require('ramda')

// add a list of plugins
function addPlugins(config, list) {
  list.forEach(item => config.plugins.push(item))
  return config
}

function readEntryFiles() {
  return fs.readdirSync(__dirname + '/../src/entry/')
}

// set the entry point given each entry name
function setEntry(config, fn) {
  const entryFiles = readEntryFiles()
  config.entry = R.zipObj(entryFiles, R.map(fn, entryFiles))
  return config
}

module.exports = {
  addPlugins,
  readEntryFiles,
  setEntry,
}