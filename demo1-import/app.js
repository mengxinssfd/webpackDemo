// es module
import sum from './sum';
// commonJs
const mul = require("./mul")
// import()
const minus = () => import('./minus.js');

// AMD cs
require(['./divide'], function (divide) {
    console.log("10 / 5 = ", divide(10, 5))
})

async function fn() {
    let m = await minus();
    console.log('10 - 5 = ', m(10, 5))
}

console.log('10 + 20 = ', sum(10, 20));
console.log('10 * 5 = ', mul(10, 5));
fn();