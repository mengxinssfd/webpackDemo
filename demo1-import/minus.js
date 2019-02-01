const add = import('./sum');
// import sum from "./sum"
add().then(f => {
  console.log('xxxxxxxxxxxx', f(1, 2));
});
module.exports = function (a, b) {
  return a - b;
};