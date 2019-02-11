var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
var UglifyPlugin = require('uglifyjs-webpack-plugin');
// var Webpack = require("webpack");
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    // app: "./src/app.ts"
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].js',
  },
  /*module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },*/
  plugins: [
    new CleanPlugin(['dist']),
    new UglifyPlugin({
      test: /\.js($|\?)/i,
      exclude: /\/excludes/,
    }),
  ],
};