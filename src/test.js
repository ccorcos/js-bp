const context = require.context('./ui', true, /.js$/);
context.keys().forEach(context);
