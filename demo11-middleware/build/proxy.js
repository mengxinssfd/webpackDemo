module.exports = {
  '/comments': {
    target: 'https://m.weibo.cn',
    changeOrigin: true,
    logLevel: 'debug',
    cssSourceMap: false
    /* pathRewrite: {
       '^/comments': '/api/comments',// 可以省略前面的api
     }, */
  },
};