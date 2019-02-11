var path = require('path');
const Clean = require('clean-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/index/app.ts',
    main: './src/pages/main/main.ts',
    // app: './src/app.js',
    // main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          // fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
          ],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'all',
          /*test: function (file) {
            console.log('bbbbbbbbbbbbbbbb');
            console.log(file.resource);
            console.log('BBBBBBBBBBBBBBBB');
            return !/\.less/.test(file.resource);
          },*/
          minSize: 0,
          priority: 10,
          minChunks: 2,
          name: 'common',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new Clean(['dist']),
    new extractTextPlugin({
      filename: 'css/[name].css',
      // allChunks: true,
    }),
    new htmlPlugin({
      template: './src/pages/index/index.html',
      filename: '../index.html',
      chunks: ['index', 'common'],
    }),
    new htmlPlugin({
      template: './src/pages/main/main.html',
      filename: '../main.html',
      chunks: ['main', 'common'],
    }),
  ],
};