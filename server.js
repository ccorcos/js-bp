'use strict'

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/entry/home/index.html'));
});

app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/entry/dashboard/index.html'));
});

/*
app.all('/api/*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:8080'
  });
});

# sudo pip install lpthw.web

import web

urls = (
  '/api/ping', 'index'
)

app = web.application(urls, globals())

class index:
    def GET(self):
        return "pong"

if __name__ == "__main__":
    app.run()
*/

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});