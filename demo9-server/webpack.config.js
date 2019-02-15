var path = require('path');
const Clean = require('clean-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const webpackBundle = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const compressionPlugin = require('compression-webpack-plugin');
module.exports = {
  mode: 'development',// 浏览器会看到webpack的source
  // mode: 'production',
  devtool: 'cheap-module-source-map',
  // devtool: '#source-map',
  // devtool: 'cheap-module-eval-source-map',// css位置会显示绝对地址
  entry: {
    index: './src/pages/index/app.ts',
    main: './src/pages/main/main.ts',
    // app: './src/app.js',
    // main: './src/main.js',
  },
  output: {
    // publicPath: '/',// npm run dev时使用,打包后的文件要在服务器环境打开
    // publicPath: '', // webpack打包时使用，打包后的文件能在本地直接打开
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
          use: [
            /*{
              loader: 'style-loader',
              options: {
                sourceMap: true,
              },
            },*/
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
              },
            },
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
      chunks: ['index', 'common'],// 需要插到html中的chunk
    }),
    new htmlPlugin({
      template: './src/pages/main/index.html',
      filename: 'main.html',
      chunks: ['main', 'common'],// 于loader一样，在后面的会插到前面去
    }),
    // new webpackBundle(),
    new compressionPlugin({
      filename: '[path].gz[query]',
      test: /\.(js|css)$/i,
      threshold: 1040,
    }),
  ],
  devServer: {
    // publicPath: '/',
    port: 8888,
    // inline: true,
    // hot: true,
    // contentBase: path.join(__dirname, "../dist"),
    // historyApiFallback: true,// 404页面指向index页面
    historyApiFallback: {
      rewrites: [{
        from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
        to: function (context) {
          let s = `/src/${context.match[1]}${context.match[2]}.html`;
          console.log(s);
          return s;
        },
      }],
    },
    proxy: {
      '/comments': {
        target: 'https://m.weibo.cn/',
        changeOrigin: true,
        logLevel: 'debug',
        /* pathRewrite: {
           '^/comments': '/api/comments',// 可以省略前面的api
         },*/
      },
    },
  },
};