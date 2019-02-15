var Clean = require('clean-webpack-plugin');
var Html = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
          },
        },
      },
    ],
  },
  plugins: [
    new Clean(['dist']),
    new Html({
      template: 'index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 9999,
    hot: true,
    overlay: true,// 把错误直接输出到浏览器页面中
  },
};