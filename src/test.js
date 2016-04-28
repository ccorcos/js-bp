// collect all js files we want to test so we can build them all at once
const context = require.context('./ui', true, /.js$/)
context.keys().forEach(context)
