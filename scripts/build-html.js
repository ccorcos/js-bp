'use strict'

/*
usage: node build-html.js VERSION PUBLIC_PATH

this will copy the entry index.html files and move them to the distribution
folder with the proper links to to common js chunks and index.js files.
*/


const version = process.argv[2]
let publicPath = process.argv[3]

console.log(`Building HTML with Version: ${version} and PublicPath: ${publicPath}`)

// peel off the trailing slash
if (publicPath[publicPath.length -1] === '/') {
  publicPath = publicPath.slice(0, publicPath.length -1)
}

const fs = require('fs')
const path = require('path')
const R = require('ramda')

const entryDir = path.resolve(__dirname + '/../src/entry/')
const distDir = path.resolve(__dirname + '/../dist/')

const entries = fs.readdirSync(entryDir)

const insert = (index, insertString, string) => {
  return string.slice(0, index) + insertString + string.slice(index)
}

entries.forEach(entry => {
  console.log(`Found entry point: ${entry}/index.html`)
  // read the html file
  let html = fs.readFileSync(`${entryDir}/${entry}/index.html`, 'utf8')

  // find the index file and replace the name
  const indexFile = fs.readdirSync(`${distDir}/${version}/${entry}`)
    .filter(str => str.startsWith('index'))[0]

  console.log(`- found index.js: ${indexFile}`)

  const indexPath = `${publicPath}/${entry}/${indexFile}`
  html = html.replace(
    `<script src="${entry}/index.js"></script>`,
    `<script src="${indexPath}"></script>`
  )

  // put the common js file before the index file
  const commonFiles = fs.readdirSync(`${distDir}/${version}`)
    .filter(str => str.startsWith('common'))

  commonFiles.forEach(commonFile => {
    console.log(`- found common chunk: ${commonFile}`)
    const commonPath = `${publicPath}/${commonFile}`

    html = insert(
      html.indexOf(`<script src="${indexPath}"></script>`),
      `<script src="${commonPath}"></script>`,
      html
    )
  })

  fs.writeFileSync(`${distDir}/${version}/${entry}/index.html`, html, 'utf8')
})