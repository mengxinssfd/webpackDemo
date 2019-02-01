var cleanPlugin = require('clean-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    appTs:  './src/ts/app.ts',
    mainTs: './src/ts/main.ts',
    // app: './src/js/app.js',
    // commons:"./src/ts/utils"
    // vendor: ['babel-polyfill'],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
          // loader: 'awesome-typescript-loader',
        },
      },
    ],
  },
  plugins: [
    new cleanPlugin(['dist/js']),
    /* new webpack.optimize.CommonsChunkPlugin(
       {
         name: 'common',
         minChunks: 2,
       },
     ),*/
    /*new webpack.optimize.SplitChunksPlugin(
      {
        name: 'common',
        minSize: 0,
        minChunks: Infinity,
      },
    ),*/
  ],
  optimization: {
    splitChunks: {
      // chunks: 'all',
      // minSize: 0,
      // minChunks: 1,
      // name: 'vendor',
      // chunks: 'initial', // 只对入口文件处理 默认async
      cacheGroups: {
        vendor: { // split `node_modules`目录下被打包的代码到 `vendor.js ` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          // priority: 1,
          enforce: true,
        },
        commons: { // split `src/util`目录下被打包的代码到`commons.js`
          // test: /(js|ts)[\\/](util|api)/,
          test: /src[\\/]common/,
          name: 'commons',
          chunks: 'all',
          // minSize: 0,
          // minChunks: 1,
          // priority: 10,
          enforce: true,
        },
      },
    },
    /*runtimeChunk: {
      name: 'runtime',
    },*/
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};