module.exports = {
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'], // connect-history-api-fallback必须
  rewrites: [{
    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
    to: function (context) {
      let s = `src/${context.match[1]}${context.match[2]}.html`;
      console.log(s);
      return s;
    },
  }],
};