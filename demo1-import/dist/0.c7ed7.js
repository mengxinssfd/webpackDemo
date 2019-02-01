webpackJsonp([0],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

const add = new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 0));
// import sum from "./sum"
add().then(f => {
  console.log('xxxxxxxxxxxx', f(1, 2));
});
module.exports = function (a, b) {
  return a - b;
};

/***/ })

});