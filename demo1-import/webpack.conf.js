module.exports = {
  entry: {
    app: './app.js',
  },
  output: {
    filename: './dist/[name].[hash:5].js',
  },
};