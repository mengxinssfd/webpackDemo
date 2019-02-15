const webpack = require('webpack');
module.exports = {
  module: {
    rules: [
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 9999,
    hot: true,
    overlay: true// 把错误直接输出到浏览器页面中
  },
};