var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/*var extractStylus = new ExtractTextPlugin({
  filename: '[name].min.css',
  allChunks: true,
});*/
module.exports = {
  // context: path.join(__dirname, 'src'),
  mode: 'production',
  entry: {
    app: './src/app.ts',
    // app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: [
          // 执行顺序从下往上
          {
            // loader: 'style-loader/url',// import一次生成一个文件,使用link标签，与file-loader搭配
            loader: 'style-loader',// 使用script标签，直接生成到html里去
            options: {
              // singleton: true,// 全部css合并到单个script标签
              // transform: './css.transform.js',// 在浏览器环境运行
              // insertInto: '#app',// script插到#app元素中
            },
          },
          {
            loader: 'css-loader',
            options: {
              // minimize: true,// v1.0.0已移除 // remove minimize option, use postcss-loader with cssnano or use optimize-cssnano-plugin plugin
              modules: true,
              localIdentName: '[path][name]_[local]_[hash:4]',
              // alias: 'test-[name]',
            },
            // loader: 'file-loader',
          },
        ],
      },
      // less
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      // sass/scss
      {
        test: /\.(sass|scss)$/,

        /*use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }],*/
        // use: extractStylus.extract([/*'style-loader',*/ 'css-loader', 'sass-loader']),
        use: ExtractTextPlugin.extract({
          fallback: {loader: 'style-loader'},
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            }],
        }),
      },
      // stylus
      // 不使用ExtractTextPlugin
      /* {
         test: /\.styl$/,

         use: [
           {
             loader: 'style-loader',
           },
           {
             loader: 'css-loader',
           },
           {
             loader: 'stylus-loader',
           }],
       },*/
      // 使用ExtractTextPlugin
      {
        test: /\.styl$/,
        // use: extractStylus.extract([/*'style-loader',*/ 'css-loader', 'stylus-loader']),
        use: ExtractTextPlugin.extract({
          fallback: {loader: 'style-loader'},
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'stylus-loader',
            }],
        }),
      },
      // ts
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanPlugin(['dist']),
    // extractStylus,
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,// 当使用提取公共模块插件时必须为true
    }),
  ],
};