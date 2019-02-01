let func = () => {
};
const NUM = 45;
let arr = [1, 2, 3, 4];
let arrB = arr.map(i => i * 2);
console.log('test', new Set(arrB));

async function fn() {
  let t = await new Promise(resolve => resolve()).then(() => 10);
  console.log('ggggggggggggggggggggggggg', t);
}

fn();