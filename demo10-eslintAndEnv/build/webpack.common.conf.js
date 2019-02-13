const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const merge = require('webpack-merge');
const productionConfig = require('./webpack.prod.conf');
const developmentConfig = require('./webpack.dev.conf');

const commonConfig = env => {
  return {
    entry: {
      app: './src/app.js',
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ],
    },
    plugins: [
      new Clean(['dist']),
      new Html({
        template: 'index.html',
        filename: 'index.html',
      }),
    ],
  };
};

module.exports = env => {
  let config = env === 'production' ? productionConfig : developmentConfig;
  return merge(commonConfig(env), config);
};

/*
module.exports = function (...args) {
  console.log('0000000000000');
  console.log(args);
  console.log('0000000000000');
  return {};
};
*/
