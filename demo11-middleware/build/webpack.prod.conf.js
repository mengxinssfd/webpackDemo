const Clean = require('clean-webpack-plugin');
var path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    new Clean(['dist'])
  ]
};