module.exports = {
  root: true,
  extends: 'standard',
  plugins: [],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    $: true,// 可以把jquery设置为全局变量
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'eol-last': ['error', 'never'],
  },
};