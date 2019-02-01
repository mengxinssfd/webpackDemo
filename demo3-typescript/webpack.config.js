var cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode:"development",
  entry: {
    app: './src/app.ts',
  },
  output: {
    filename: './[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
      },
    }],
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};