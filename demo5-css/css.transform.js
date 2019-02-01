module.exports = function (css) {
  console.log('******** start *********');
  console.log(css);
  console.log('********  end *********');
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    return css.replace('#c8d1ff', 'red');
  }
  return css;
};