const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    // app: ['./node_modules/babel-polyfill/dist/polyfill.min.js','./app.js'],// webpack为全局安装,babel-preset-env也必须全局安装，否则会报错
    app: './app.js',
  },
  output: {
    filename: './dist/[name].[hash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // '@babel/preset-env',// 带@的需要最新的babel-loader
                'env',
                {
                  // useBuiltins: true,
                  // modules: false,
                  targets: {
                    browsers: ['> 1%', 'last 2 versions'],
                  },
                },
              ],
            ],
            // 'plugins': [
            //   'transform-runtime',// 与上面的modules: false,有冲突
            // ],
          },
        },
        exclude: '/node_modules/',
      },
    ],
  },
};