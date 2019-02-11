var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin');
var ImageMinPlugin = require('imagemin-webpack-plugin').default;
var px2rem = require('postcss-pxtorem');
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    // app: './src/app.js',
    app: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/',
    // publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      // ts
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
      // less
      {
        test: /\.less$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  // 合成雪碧图
                  require('postcss-sprites')({
                    filterBy: function (img) {
                      if (/sprite-/.test(img.url)) return Promise.resolve();
                      return Promise.reject();
                    },
                  }),
                  px2rem({
                    rootValue: 16,
                    unitPrecision: 5,
                    propList: [
                      'font',
                      'font-size',
                      'line-height',
                      'letter-spacing',
                      'background-size',
                      'background-position',
                    ],
                    selectorBlackList: [],
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 0,
                  }),
                ],
              },
            },
            'less-loader',
          ],
        }),
      },
      // img
      {
        test: /\.(png|jpe?g|gif|svg)$/i,

        use: [
          // 使用file-loader
          /* {
             loader: 'file-loader',
             options: {
               publicPath: '../images',
               outputPath: 'images',
               // useRelativePath: true,
               name: '[name]_[hash:4].[ext]',
             },
           },*/
          // 使用url-loader
          {
            loader: 'url-loader',
            options: {
              publicPath: '../images',
              outputPath: 'images',
              limit: 10000,// 超过10000b的图片使用base64
              // useRelativePath: true,
              name: '[name]_[hash:4].[ext]',
            },
          },
          // 无效
          /*{
            loader: 'img-loader',
            options: {
              pngquant: {
                quality: 10,
              },
            },
          },*/
        ],
      },
      // font
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: '../font',
          outputPath: 'font',
          name: '[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new Clean('dist'),
    // 抽取css
    new ExtractText({
      filename: 'css/[name].css',
      allChunks: true,// 当使用提取公共模块插件时必须为true
    }),
    // 压缩图片
    new ImageMinPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '80-100',
        progressive: true,
      },
    }),
    // 外部js
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
  ],
};