var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
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
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/url',
            options: {
              // singleton: true,
              // transform:"路径" 在浏览器环境运行
            },
          },
          {
            // loader: 'css-loader',
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanPlugin(['dist']),
  ],
};