const express = require('express');
const webpack = require('webpack');
const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const httpProxyMiddleware = require('http-proxy-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const config = require('./webpack.common.conf.js')('development');
const proxy = require('./proxy.js');
const historyFallback = require('./historyFallback.js');

const compiler = webpack(config);// 执行webpack config
const app = express();
const port = 3000;

for (let key in proxy) {
  app.use(key, httpProxyMiddleware(proxy[key]));
}

app.use(connectHistoryApiFallback(historyFallback));
console.log(compiler);
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
}));
app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
  console.log(('success listen to' + port));
  opn('http://localhost:' + port);
});