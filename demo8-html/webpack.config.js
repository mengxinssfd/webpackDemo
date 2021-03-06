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
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
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
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // publicPath: 'static/images',
              outputPath: 'static/images/',
              limit: 1000,
              // useRelativePath: true,
              name: '[name]_[hash:4].[ext]',
            },
          },
        ],
      },
      {
        // 作用：解决html中图片路径问题
        test: /\.html$/,
        /*
          loader: 'html-loader',
          options: {
            attrs: [':src', ':data-src'],// 默认attrs:[':src']
          },
         */
        // 与上面相等
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src', ':src'],// 默认attrs:[':src']
            },
          },
        ],
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
      filename: 'static/css/[name].css',
      // allChunks: true,
    }),
    new htmlPlugin({
      template: './src/pages/index/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunks: ['index', 'common'],
    }),
    new htmlPlugin({
      template: './src/pages/main/main.html',
      filename: 'main.html',
      chunks: ['main', 'common'],// 于loader一样，在后面的会插到前面去
    }),
  ],
  devServer: {
    port: 8888,
    hot: true,
  },
};