import {Animal2 as Animal} from './animal.js';

let cat = () => {
  return import(
    /* webpackChunkName:"cat" */
    /* webpackMode:"lazy" */
    './cat.js'
    );
};
let bird = () => {
  return import(/* webpackChunkName:"bird" */'./bird.js');
};
// import {Bird} from './bird.js';
// import {test} from './util';

new Animal('dog').jump();
cat().then(({Cat}) => {
  console.log('xxxxx', Cat);
  let cat = new Cat('Tom');
  cat.jump();
  cat.eat();
});

bird().then(({Bird}) => {
  new Bird('bee').fly();
});

console.log(cat.name);
console.log('test');

